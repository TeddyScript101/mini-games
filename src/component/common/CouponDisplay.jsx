import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import {
    setGachaShowCard,
    setGachaShowFullScreen
} from '../../redux/gachaSlice';
import {
    setLuckyDrawShowCard,
    setLuckyDrawShowFullScreen
} from '../../redux/luckyDrawSlice';
import {
    setSlotMachineShowCard,
    setSlotMachineShowFullScreen
} from '../../redux/slotMachineSlice';
import { storeKeyEnum } from '../../const';
import FullScreenBallWithImg from '../gachapon/FullScreenBall'
import { format } from 'date-fns';

export default function CouponDisplay({ storeKey }) {
    const dispatch = useDispatch();

    const actionMap = {
        [storeKeyEnum.gacha]: {
            setShowCard: setGachaShowCard,
            setShowFullScreen: setGachaShowFullScreen,
        },
        [storeKeyEnum.luckyDraw]: {
            setShowCard: setLuckyDrawShowCard,
            setShowFullScreen: setLuckyDrawShowFullScreen,
        },
        [storeKeyEnum.slotMachine]: {
            setShowCard: setSlotMachineShowCard,
            setShowFullScreen: setSlotMachineShowFullScreen,
        }
    };

    const showCard = useSelector((state) => state[storeKey]?.showCard);
    let result = useSelector((state) => state[storeKey]?.result);

    const handleShowCard = () => {
        const action = actionMap[storeKey]?.setShowCard;
        if (action) dispatch(action(true));
    };

    const closeFullScreen = () => {
        const action = actionMap[storeKey]?.setShowFullScreen;
        if (action) dispatch(action(false));
    };

    return (
        <Backdrop onClick={closeFullScreen}>
            {showCard && (
                <FadeInZoomContainer className="visible">
                    <WinCard bgImage={result.img}>
                        {!result.isEmpty && <div className='congrats'>Congratulations, Aldyssa!</div>}
                        <div className='discount'>
                            {!result.isEmpty ? `You Won a ${result.name}` : result.name}
                        </div>
                        {result.validDate && <div className='disclaimer'>T&Cs Apply: Valid until {format(result.validDate, 'dd/MM/yyyy h:mma')}</div>}
                    </WinCard>

                    {!result.isEmpty && (
                        <CouponBtn>
                            <div className="close-icon">×</div>
                            <div className="button-text">VIEW COUPONS</div>
                        </CouponBtn>
                    )}
                </FadeInZoomContainer>
            )}


            {storeKey === storeKeyEnum.gacha && (
                <FullScreenBallWithImg handleShowCard={handleShowCard} />
            )}

        </Backdrop>
    );
}


const FadeInZoomContainer = styled.div`
    animation: fadeInZoom 1s ease-in-out forwards;
    z-index: 10000;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
    opacity: 0;  // Ensure animation starts from 0 opacity

    @keyframes fadeInZoom {
        from {
            opacity: 0;
            transform: scale(0.5);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }

    &.visible {
        opacity: 1;
        animation: fadeInZoom 1s ease-in-out forwards;
    }

    @media (max-width: 768px) {
        width: 70%;
    }
`;

const CouponBtn = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    color: white;
    width: 500px;
    height: 80px;
    font-size: 12px;
    font-weight: bold;
    border-radius: 80px;
    cursor: pointer;
    position: relative;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 9999;

    &:hover {
        background-color: #1976D2; 
    }

    &:active {
        background-color: #1565C0;
    }

    .close-icon {
        padding-left: 40px;
        color: #2196F3;
        font-size: 50px;
    }

    .button-text {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 400px;
        background-color: #2196F3;
        border-radius: 80px;
        height: 80px;
        font-size: 25px;
    }

    @keyframes fadeInZoom {
        from {
            opacity: 0;
            transform: scale(0.5);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }

    @media (max-width: 768px) {
        width:80%;
        height: 60px;
        font-size: 10px;

        .close-icon {
            font-size: 35px;
            padding-left: 25px;
        }

        .button-text {
            height: 60px;
            width: 80%;
            font-size: 18px;
        }
    }

    @media (max-width: 480px) {
        width: 80%;
        height: 50px;
        font-size: 8px;

        .close-icon {
            font-size: 40px;
            padding-left: 20px;
        }

        .button-text {
            height: 50px;
            width:80%;
            font-size: 16px;
        }
    }
`;



const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
    z-index: 9999;
`;

const WinCard = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== 'bgImage',
})`
    width: 500px; 
    height: 500px; 
    background-color: ${({ bgImage }) => (bgImage ? "transparent" : "white")};
    background-image: ${({ bgImage }) => (bgImage ? `url(${bgImage})` : "none")};
    background-size: cover;
    background-position: center;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    font-size: 1.5rem;
    font-weight: bold;
    color: #fff;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
    text-align: center;
    padding: 20px;
    position: relative;
    overflow: hidden;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.4);
        z-index: 1;
        border-radius: 20px;
    }

    & > * {
        z-index: 2;
    }

    & .congrats, & .disclaimer, & .discount {
        font-size: 14px;
        text-align: center;
    }

    @media (max-width: 768px) {
        width: 250px;
        height: 250px;
    }

    @media (max-width: 480px) {
        width: 200px;
        height: 200px;
    }
`;


