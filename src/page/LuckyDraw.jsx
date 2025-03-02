import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import MachineBody from '../component/luckyDraw/MachineBody';
import { useSelector, useDispatch } from 'react-redux';
import { setLuckyDrawTheme } from '../redux/luckyDrawSlice'
import GradientBackground from '../component/common/GradientBackground'
import { useQueryParams, fetchByKey, weightedRandomSelection } from '../helper.js';
export default function LuckyDraw() {
  const theme = useSelector((state) => state.luckyDraw.theme);
  const dispatch = useDispatch();
  const query = useQueryParams();
  const [error, setError] = useState(null);

  const fetchDataByKey = async (key) => {
    try {
      const data = await fetchByKey(key);
      const { value, coupons } = data;
      const { backgroundColor, machineLogo, lightboxColor, lightBulbColor } = value;
      dispatch(setLuckyDrawTheme({
        background: { start: backgroundColor, end: backgroundColor },
        luckyDrawItems: coupons.sort((a, b) => a.order - b.order),
        lightboxColor,
        lightBulbColor,
        machineLogo,
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
    <GradientBackground start={theme.background.start} end={theme.background.end} isRadial={false}>
      <Container>
        <GameTitle>Lucky Draw</GameTitle>
        <MachineBody />
        <Footer>
          <MovingBanner>
            <BannerText>
              NEW BRAND NEW BRAND NEW BRAND NEW BRAND NEW BRAND
            </BannerText>
          </MovingBanner>
        </Footer>
      </Container>
    </GradientBackground>
  );
}


const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  max-width: 400px;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0px 0px 0px;
`;

const GameTitle = styled.div`
  font-weight: 600;
  font-size: 1rem;
  color: white;
  flex: 1;
`;

const Footer = styled.div`
  flex: 1;
  display: flex;
  padding-top: 30px;
  align-items: start;
  width: 100%;
`;

const MovingBanner = styled.div`
  color: white;
  background-color: orange;
  width: 100%;
  height: 30px;
  font-size: 25px;
  overflow: hidden;  
  position: relative;
`;


const moveBanner = keyframes`
  0% {
    transform: translateX(100%); 
  }
  100% {
    transform: translateX(-100%);
  }
`;

const BannerText = styled.div`
  display: inline-block;
  position: absolute;
  white-space: nowrap;
  animation: ${moveBanner} 10s linear infinite;
  width: max-content;
`;


