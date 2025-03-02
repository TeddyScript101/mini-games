import React, { useEffect, useState } from 'react';
import MachineBody from '../component/gachapon/MachineBody';
import Footer from '../component/common/Footer';
import { useSelector, useDispatch } from 'react-redux';
import { setGachaIsRunning, setGachaTheme, setGachaResult } from '../redux/gachaSlice'
import GradientBackground from '../component/common/GradientBackground'
import GameTitle from '../component/common/GameTitle'
import { useQueryParams, fetchByKey, drawCoupon } from '../helper.js';
import { storeKeyEnum } from '../const.js';

export default function Gachapon() {
  const theme = useSelector((state) => state[storeKeyEnum.gacha].theme);
  const dispatch = useDispatch();
  const query = useQueryParams();
  const [error, setError] = useState(null);

  const handleWheelClick = async () => {
    if (theme?.coupons?.length === 0) return alert("No coupons are available");
    dispatch(setGachaIsRunning(true))
    const selectedCoupon = await drawCoupon({ key: query.key, type: storeKeyEnum.gacha })
    dispatch(setGachaResult(selectedCoupon))
  };

  const fetchDataByKey = async (key) => {
    try {
      const data = await fetchByKey(key);
      const { value, coupons } = data;
      const { backgroundColor, machineLogo } = value;
      dispatch(setGachaTheme({
        background: { start: backgroundColor, end: backgroundColor },
        machineLogo,
        coupons
      }));
    } catch (error) {
      console.log('Error fetching data:', error);
      setError('The provided key is invalid, failed to load data.');
    }
  };



  useEffect(() => {
    fetchDataByKey(query.key);
  }, []);

  if (!theme?.background?.start || !theme?.background?.end) {
    return null;
  }

  return (
    <GradientBackground start={theme.background.start} end={theme.background.end} isRadial>
      <GameTitle text="GACHAPON" />
      <MachineBody />
      <Footer handleWheelClick={handleWheelClick} />
    </GradientBackground>
  );
}




