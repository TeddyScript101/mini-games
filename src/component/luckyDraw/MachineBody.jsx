import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import styled from 'styled-components';
import MachineHeadWithLogo from '../common/MachineHeadWithLogo';
import { storeKeyEnum } from '../../const';
import MachineBodyWithLightBulbs from '../common/MachineBodyWithLightBulbs'
import CouponDisplay from '../common/CouponDisplay';
import {
    setLuckyDrawRunning,
    setLuckyDrawHighlightedIndex,
    setLuckyDrawShowFullScreen,
    setLuckyDrawResult,
    setLuckyDrawIsFinished
} from '../../redux/luckyDrawSlice';

import { useQueryParams } from '../../helper'
import axios from 'axios';
export default function MachineBody() {
    const dispatch = useDispatch();
    const query = useQueryParams();
    const {
        isRunning,
        highlightedIndex,
        showFullScreen,
        theme
    } = useSelector((state) => state.luckyDraw);

    const handleGoClick = async () => {
        if (isRunning) return;

        dispatch(setLuckyDrawRunning(true));
        dispatch(setLuckyDrawShowFullScreen(false));

        const validIndices = [0, 1, 2, 5, 8, 7, 6, 3];

        try {
            const backendUrl = import.meta.env.VITE_BACKEND_URL;
            const { data } = await axios.put(`${backendUrl}/coupon`, { type: storeKeyEnum.luckyDraw, key: query.key });
            const drawnCoupon = data.drawnCoupon;

            // Find the index of drawn coupon in `validIndices` 
            const drawnCouponIndex = theme.luckyDrawItems.findIndex(item => item.name === drawnCoupon.name);
            if (!validIndices.includes(drawnCouponIndex)) return;

            let currentIndex = 0;
            let intervalTime;
            let iteration = 0;
            const maxIterations = 15 + Math.floor(Math.random() * 11); // Initial iterations before slowing down

            const animate = () => {
                dispatch(setLuckyDrawHighlightedIndex(validIndices[currentIndex]));

                currentIndex = (currentIndex + 1) % validIndices.length;
                iteration++;

                const remainingIterations = maxIterations - iteration;

                if (remainingIterations <= 8) {
                    intervalTime = 200 + Math.random() * 100; // Gradual slowdown
                } else {
                    intervalTime = 50; // Fast at the beginning
                }

                if (validIndices[currentIndex] === drawnCouponIndex && iteration >= maxIterations) {
                    dispatch(setLuckyDrawHighlightedIndex(drawnCouponIndex));
                    dispatch(setLuckyDrawResult(theme.luckyDrawItems[drawnCouponIndex]));
                    dispatch(setLuckyDrawRunning(false));
                    dispatch(setLuckyDrawIsFinished(true));
                    setTimeout(() => dispatch(setLuckyDrawShowFullScreen(true)), 1000);
                    return;
                }

                setTimeout(animate, intervalTime);
            };

            animate();
        } catch (error) {
            console.error('Lucky draw API error:', error);
            dispatch(setLuckyDrawRunning(false));
        }
    };


    // const handleGoClick = () => {
    //     if (isRunning) return;

    //     dispatch(setLuckyDrawRunning(true));
    //     dispatch(setLuckyDrawShowFullScreen(false));

    //     const validIndices = [0, 1, 2, 5, 8, 7, 6, 3];
    //     const weights = theme.luckyDrawItems.filter(el => el.name !== "GO!").map(item => item.weight);
    //     let currentIndex = 0;
    //     let intervalTime;
    //     let iteration = 0;

    //     // Calculate the total weight of all items
    //     const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);

    //     // Random stop iteration (not weighted yet)
    //     const randomStopIteration = Math.floor(Math.random() * 11) + 15; // Initial random stop iteration

    //     const animate = () => {
    //         dispatch(setLuckyDrawHighlightedIndex(validIndices[currentIndex]));

    //         currentIndex = (currentIndex + 1) % validIndices.length; // Circular motion
    //         iteration++;

    //         const remainingIterations = randomStopIteration - iteration;

    //         const currentWeight = theme.luckyDrawItems[validIndices[currentIndex]].weight;
    //         const maxWeight = Math.max(...validIndices.map(idx => theme.luckyDrawItems[idx].weight));

    //         if (remainingIterations <= 8) {
    //             intervalTime = 200 + (300 * currentWeight / maxWeight);  // Gradual increase of interval time based on weight
    //         } else {
    //             intervalTime = 50;  // Faster motion during the initial iterations
    //         }

    //         if (iteration >= randomStopIteration) {
    //             setTimeout(() => {
    //                 // Choose a final item based on weight after stopping the animation
    //                 let finalIndex = weightedRandomSelection(validIndices, weights);

    //                 // Final smooth transition to the selected item
    //                 const finalAnimation = () => {
    //                     if (validIndices[currentIndex] === finalIndex) {
    //                         dispatch(setLuckyDrawHighlightedIndex(finalIndex));
    //                         dispatch(setLuckyDrawResult(theme.luckyDrawItems[finalIndex]));
    //                         dispatch(setLuckyDrawRunning(false));
    //                         dispatch(setLuckyDrawIsFinished(true));
    //                         setTimeout(() => dispatch(setLuckyDrawShowFullScreen(true)), 1000);
    //                         return;
    //                     }

    //                     // Ensure circular motion continues smoothly
    //                     currentIndex = (currentIndex + 1) % validIndices.length;
    //                     dispatch(setLuckyDrawHighlightedIndex(validIndices[currentIndex]));
    //                     setTimeout(finalAnimation, intervalTime);  // Continue smoothly with the adjusted interval
    //                 };

    //                 finalAnimation();
    //             }, intervalTime);

    //             return;
    //         }

    //         setTimeout(animate, intervalTime);
    //     };

    //     animate();
    // };

    // Function to select an index based on weighted probability
    const weightedRandomSelection = (validIndices, weights) => {
        const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);
        const randomValue = Math.random() * totalWeight;

        let cumulativeWeight = 0;
        for (let i = 0; i < validIndices.length; i++) {
            cumulativeWeight += weights[i];
            if (randomValue <= cumulativeWeight) {
                return validIndices[i];
            }
        }

        // Return the last index if nothing was selected (should not happen due to cumulativeWeight logic)
        return validIndices[validIndices.length - 1];
    };



    return (
        <>
            <MachineHeadWithLogo img={theme.machineLogo}>
                {/* <MaxDiscountLabel storeKey={storeKeyEnum.luckyDraw} /> */}
            </MachineHeadWithLogo>
            <MachineBodyWithLightBulbs storeKey={storeKeyEnum.luckyDraw}>
                <CardGrid>
                    {theme.luckyDrawItems.map((item, index) => (
                        <Card
                            key={index}
                            highlighted={index === highlightedIndex}
                            className={index === 4 ? 'goBtn' : ''}
                            onClick={index === 4 ? handleGoClick : undefined}
                        >
                            {item.img && <div>
                                <img src={item.img} className={item.isEmpty ? 'emptyImg' : "cardImg"} />
                            </div>}
                            <div className='itemName'>
                                {item.isEmpty ? "" : item.name}
                            </div>
                        </Card>
                    ))}
                </CardGrid>
            </MachineBodyWithLightBulbs>
            {showFullScreen && (
                <CouponDisplay storeKey={storeKeyEnum.luckyDraw} />
            )}
        </>
    );
}

const CardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 85%;
    height: 85%;
    background-color:#52221E;
    padding:4px 3px;
    border-radius:10px;
`;

const Card = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== 'highlighted',
})`
    aspect-ratio:1/1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    background-color: #F9F3DE;
    border: 9px solid ${(props) => (props.highlighted ? '#FCC979' : '#B6542D')};
    border-radius: 16px;
    font-weight: bold;
    color: brown;
    font-size: 16px;
    text-align: center;
    overflow:hidden;

    &.goBtn {
        background-color: #F30003;
        color: white;
        font-size: 20px;
        font-style: italic;
        cursor: pointer;
    }
    & .emptyImg{
        height:80px;
    }

    & .cardImg{
        height:40px;
    }
`;
