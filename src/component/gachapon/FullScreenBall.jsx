import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

export default function FullScreenBallWithImg({ handleShowCard }) {
    const [startRiseUp, setStartRiseUp] = useState(false);
    const [upperBallSrc, setUpperBallSrc] = useState('/images/img_1.png');

    const handleShakeAnimationEnd = () => {
        setStartRiseUp(true); 
    };

    const handleRiseUpAnimationEnd = () => {
        setUpperBallSrc('/images/img_0.png'); 
        handleShowCard();
    };

    return (
        <BallWrapper onAnimationEnd={handleShakeAnimationEnd}>
            <UpperBallClosed
                src={upperBallSrc}
                startRiseUp={startRiseUp}
                onAnimationEnd={handleRiseUpAnimationEnd}
            />
            <LowerBallClosed src="/images/img_2.png" />
        </BallWrapper>
    );
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

const riseUp = keyframes`
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(-120px);
    }
`;

const UpperBallClosed = styled.img.withConfig({
    shouldForwardProp: (prop) => prop !== 'startRiseUp',

})`
    width: 300px;
    z-index: 999;
    position: relative;
    top: 130px;
    ${(props) =>
        props.startRiseUp &&
        css`
            animation: ${riseUp} 0.2s forwards;
        `}
`;

const LowerBallClosed = styled.img`
    width: 300px;
`;

const BallWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 80px;
    animation: ${shake} 2s linear;
`;
