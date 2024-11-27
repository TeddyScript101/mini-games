import React from 'react'
import styled, { keyframes, css } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { setShowCard,setShowFullScreen } from '../../redux/gachaSlice'

export default function CouponDisplay() {
    const showCard = useSelector((state) => state.gacha.showCard);
    const dispatch = useDispatch();

    const handleShowCard = () => {
        dispatch(setShowCard(true))
    }

    const closeFullScreen = () => {
        dispatch(setShowFullScreen(false));
    };

    return (
        <Backdrop onClick={closeFullScreen}>
            {showCard &&
                <WinCard>
                    🎉 You won 10% off! 🎉
                </WinCard>}
            <FullScreenBall onAnimationEnd={handleShowCard} />
        </Backdrop>
    )
}
const shake = keyframes`
    0%, 100% {
        transform: translate(0, 0);
    }
    10% {
        transform: translate(-15px, -5px);
    }
    20% {
        transform: translate(15px, 5px);
    }
    30% {
        transform: translate(-10px, 10px);
    }
    40% {
        transform: translate(10px, -10px);
    }
    50% {
        transform: translate(20px, 0);
    }
    60% {
        transform: translate(-20px, 5px);
    }
    70% {
        transform: translate(15px, -5px);
    }
    80% {
        transform: translate(-15px, 10px);
    }
    90% {
        transform: translate(10px, -10px);
    }
`;

const FullScreenBall = styled.div`
    width: 400px;
    height: 400px;
    background-color: #2196F3; /* Blue */
    border-radius: 50%;
    display: flex;
    justify-content: center;
    color: white;
    font-size: 24px;
    font-weight: bold;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    position:absolute;
    animation: ${shake} 2s linear;
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
    z-index: 9999; /* Ensures it appears above everything else */
`;

const WinCard = styled.div`
    width: 300px;
    height: 300px;
    background-color: white;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
    text-align: center;
    padding: 20px;
    animation: fadeIn 0.5s ease-in-out forwards;
    z-index:10000;
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: scale(0.9);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
`;

