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
import { storeKey as storeKeyConst } from '../../const';
import FullScreenBallWithImg from '../gachapon/FullScreenBall'

export default function CouponDisplay({ storeKey }) {
    const dispatch = useDispatch();

    const actionMap = {
        [storeKeyConst.gacha]: {
            setShowCard: setGachaShowCard,
            setShowFullScreen: setGachaShowFullScreen,
        },
        [storeKeyConst.luckyDraw]: {
            setShowCard: setLuckyDrawShowCard,
            setShowFullScreen: setLuckyDrawShowFullScreen,
        },
    };

    const showCard = useSelector((state) => state[storeKey]?.showCard);

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
                <FadeInZoomContainer>
                    <WinCard>
                        <div className='congrats'>Congratulations, Aldyssa!</div>
                        <div className='discount'>You Won a coupon for 10% off</div>
                        <div className='disclaimer'>T&Cs Apply: Valid until 29/07/2024 11pm</div>
                    </WinCard>

                    <CouponBtn>
                        <div className="close-icon">×</div>
                        <div className="button-text">VIEW COUPONS</div>
                    </CouponBtn>
                </FadeInZoomContainer>
            )}

            {storeKey === storeKeyConst.gacha && (
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
        background-color: #2196F3; /* Blue color */
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

    /* Mobile responsiveness */
    @media (max-width: 768px) {
        width: 80%;
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

    /* Extra small screen responsiveness (e.g., for phones in portrait mode) */
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

const WinCard = styled.div`
    width: 100%;
    aspect-ratio: 1/1;
    background-color: white;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
    text-align: center;
    padding: 20px;

    & .congrats {
        font-size: 12px;
    }
    & .disclaimer {
        font-size: 12px;
    }
`;
