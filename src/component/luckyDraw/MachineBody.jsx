import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import styled from 'styled-components';
import MachineHeadWithLogo from '../common/MachineHeadWithLogo';
import MaxDiscountLabel from '../common/MaxDiscountLabel';
import { storeKey } from '../../const';
import DecorationBalls from './DecorationBalls';
import CouponDisplay from '../common/CouponDisplay';
import {
    setLuckyDrawRunning,
    setLuckyDrawHighlightedIndex,
    setLuckyDrawShowFullScreen,
    setLuckyDrawResult,
    setLuckyDrawIsFinished
} from '../../redux/luckyDrawSlice';

export default function MachineBody() {
    const dispatch = useDispatch();

    const {
        isRunning,
        highlightedIndex,
        showFullScreen,
        theme
    } = useSelector((state) => state.luckyDraw);

    const handleGoClick = () => {
        if (isRunning) return;

        dispatch(setLuckyDrawRunning(true));
        dispatch(setLuckyDrawShowFullScreen(false));

        let count = 0;
        let intervalTime = 100;
        const validIndices = [0, 1, 2, 3, 5, 6, 7, 8];
        let interval;

        const animate = () => {
            const randomIndex = validIndices[Math.floor(Math.random() * validIndices.length)];
            dispatch(setLuckyDrawHighlightedIndex(randomIndex));
            count++;

            if (count >= 15) {
                clearInterval(interval);
                dispatch(setLuckyDrawHighlightedIndex(null));
                dispatch(setLuckyDrawResult(theme.luckyDrawItems[validIndices[randomIndex]]))
                dispatch(setLuckyDrawRunning(false));
                dispatch(setLuckyDrawIsFinished(true));

                setTimeout(() => dispatch(setLuckyDrawShowFullScreen(true)), 1000)
                return;
            }
            intervalTime += 50;
            clearInterval(interval);
            interval = setInterval(animate, intervalTime);
        };

        interval = setInterval(animate, intervalTime);
    };


    const handleGoClick2 = () => {
        if (isRunning) return;

        dispatch(setLuckyDrawRunning(true));
        dispatch(setLuckyDrawShowFullScreen(false));

        const validIndices = [0, 1, 2, 5, 8, 7, 6, 3];
        let currentIndex = 0;
        let intervalTime = 100;
        const randomStopIteration = Math.floor(Math.random() * 11) + 15;
        let iteration = 0;

        const animate = () => {
            dispatch(setLuckyDrawHighlightedIndex(validIndices[currentIndex]))
            currentIndex = (currentIndex + 1) % validIndices.length;
            iteration++;


            const remainingIterations = randomStopIteration - iteration;

            intervalTime = remainingIterations > 8 ? 50 : 400;

            if (iteration >= randomStopIteration) {
                setTimeout(() => {
                    dispatch(setLuckyDrawHighlightedIndex(validIndices[currentIndex]));
                    dispatch(setLuckyDrawResult(theme.luckyDrawItems[validIndices[currentIndex]]));
                    dispatch(setLuckyDrawRunning(false));
                    dispatch(setLuckyDrawIsFinished(true));
                    setTimeout(() => dispatch(setLuckyDrawShowFullScreen(true)), 1000);
                }, intervalTime);

                return;
            }

            setTimeout(animate, intervalTime);
        };

        animate();
    };

    return (
        <>
            <MachineHeadWithLogo img={theme.logo} bordered>
                <MaxDiscountLabel storeKey={storeKey.luckyDraw} />
            </MachineHeadWithLogo>
            <LuckyDrawContainer>

                <DecorationBalls />
                <CardGrid>
                    {theme.luckyDrawItems.map((item, index) => (
                        <Card
                            key={index}
                            highlighted={index === highlightedIndex}
                            className={index === 4 ? 'goBtn' : ''}
                            onClick={index === 4 ? handleGoClick2 : undefined}
                        >
                            {item.img && <div>
                                <img src={item.img} className={item.isEmpty ? 'emptyImg' : "cardImg"} />
                            </div>}
                            <div className='itemName'>
                                {item.name}
                            </div>
                        </Card>
                    ))}
                </CardGrid>
            </LuckyDrawContainer>
            {showFullScreen && (
                <CouponDisplay storeKey={storeKey.luckyDraw} />
            )}
        </>
    );
}

const LuckyDrawContainer = styled.div`
    position: relative;
    border: 5px solid brown;
    width: 400px;
    height: 400px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FCDAA2;
    padding:8px;
`;

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
