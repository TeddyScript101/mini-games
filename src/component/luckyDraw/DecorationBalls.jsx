import React from 'react';
import styled, { keyframes } from 'styled-components';

export default function DecorationBalls() {
    const balls = [...Array(40)]; // Total of 41 balls (10 per side plus 1 extra for the bottom)

    return (
        <>
            <BallTrackTop>
                {balls.slice(0, 10).map((_, index) => (
                    <Ball key={index} index={index} />
                ))}
            </BallTrackTop>
            <BallTrackLeft>
                {balls.slice(10, 20).map((_, index) => (
                    <Ball key={index + 9} index={index + 9} />
                ))}
            </BallTrackLeft>
            <BallTrackRight>
                {balls.slice(20, 30).map((_, index) => (
                    <Ball key={index + 18} index={index + 18} />
                ))}
            </BallTrackRight>
            <BallTrackBottom>
                {balls.slice(30, 40).map((_, index) => (
                    <Ball key={index + 27} index={index + 27} />
                ))}
            </BallTrackBottom>
        </>
    );
}

// Keyframe animation for color shift
const changeColor = keyframes`
    0%, 100% {
        background-color: #FCE8C4;
    }
    50% {
        background-color: #FAC980;
    }
`;

const Ball = styled.div`
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: ${(props) =>
        props.index % 2 === 0 ? '#FCE8C4' : '#FAC980'};
    animation: ${changeColor} 3s infinite;
    animation-delay: ${(props) => `${props.index * 0.1}s`}; /* Delayed animation for anti-clockwise effect */
`;

const BallTrackTop = styled.div`
    top: 8px;
    left: 8px;
    position: absolute;
    width: 370px; /* Adjusted width for 10 balls */
    height: 30px;
    display: flex;
    gap: 15.5px;
`;

const BallTrackLeft = styled.div`
    top: 4px;
    left: 8px;
    position: absolute;
    width: 30px;
    height: 370px; /* Adjusted height for 10 balls */
    display: flex;
    flex-direction: column;
    gap: 15.5px;
    padding-top: 3px;
`;

const BallTrackBottom = styled.div`
    bottom: 0px;
    left: 10px;
    position: absolute;
    width: 410px; /* Increased width to accommodate extra ball */
    height: 30px;
    display: flex;
    gap: 20px; 
`;

const BallTrackRight = styled.div`
    top: -30px;
    right: -2px;
    position: absolute;
    width: 30px;
    height: 370px; /* Adjusted height for 10 balls */
    display: flex;
    flex-direction: column;
    gap: 15.5px;
    padding-top: 40px;
`;
