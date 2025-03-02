import React, { useEffect, useState } from 'react'
import GradientBackground from '../component/common/GradientBackground'
import { storeKeyEnum } from '../const';
import { useSelector, useDispatch } from 'react-redux';
import { setSlotMachineTheme, setSlotMachineRunning, setSlotMachineResult } from '../redux/slotMachineSlice.js';
import GameTitle from '../component/common/GameTitle';
import MachineBody from '../component/slotMachine/MachineBody';
import Footer from '../component/common/Footer';
import { useQueryParams, fetchByKey } from '../helper.js';

export default function SlotMachine() {
    const theme = useSelector((state) => state[storeKeyEnum.slotMachine].theme);
    const dispatch = useDispatch();
    const query = useQueryParams();

    const [error, setError] = useState(null);

    const handleWheelClick = () => {
        dispatch(setSlotMachineRunning(true));
    };

    const fetchDataByKey = async (key) => {
        try {
            const data = await fetchByKey(key);
            const { value, coupons } = data;
            const { backgroundColor, lightboxColor, lightBulbColor, badgeText, machineLogo, emptyPrizeDisplayText } = value;


            const slots = Array(3).fill().map(() => Array(24).fill().flatMap(() => coupons));


            const stopYArray = coupons.map(() => {
                const startY = 170;
                const circularHeight = 60;
                const gap = 20;
                const stopYIndex = Math.floor(Math.random() * 3);
                const stopY = -(startY + stopYIndex * (circularHeight + gap));
                const price = coupons[stopYIndex];
                return { stopY, price };
            });


            const verifyPrizesAreConsistent = (array) => {
                const firstPriceId = array[0]?.price?.id;
                return firstPriceId && array.every(item => item?.price?.id === firstPriceId);
            };

            if (verifyPrizesAreConsistent(stopYArray)) {
                dispatch(setSlotMachineResult(stopYArray[0].price));
            } else {
                const noPrizeObj = {
                    "name": emptyPrizeDisplayText,
                    "validDate": "",
                    "img": "",
                    "isEmpty": true
                }
                dispatch(setSlotMachineResult(noPrizeObj));
            }


            dispatch(setSlotMachineTheme({
                backgroundColor,
                lightboxColor,
                lightBulbColor,
                badgeText,
                machineLogo,
                slots,
                stopYArray
            }));
        } catch (error) {
            console.log('Error fetching data:', error);
            setError('The provided key is invalid, failed to load data.');
        }
    };

    useEffect(() => {
        if (!query.key) {
            setError('No query key provided.');
            return;
        }

        fetchDataByKey(query.key);
    }, [query.key]);

    if (error) {
        return <div>Error: {error}</div>;
    }


    if (!theme?.backgroundColor) {
        return
    }

    return (
        <GradientBackground start={theme.backgroundColor} end={theme.backgroundColor} isRadial={false}>
            <GameTitle text={`Slot Machine`} />
            <MachineBody />
            <Footer handleWheelClick={handleWheelClick} />
        </GradientBackground>
    );
}
