import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { useSelector } from 'react-redux';
import { lighten } from 'polished';

export default function DecorationBalls({ storeKey, lightBulbColor }) {
    const balls = [...Array(36)];
    const { isRunning, isFinished } = useSelector((state) => state[storeKey]);

    // Generate a lighter version of the base color using Polished
    const lightBulbColorAlt = lighten(0.3, lightBulbColor); // Adjust percentage as needed

    return (
        <>
            <BallTrackTop>
                {balls.slice(0, 8).map((_, index) => (
                    <Ball
                        key={index}
                        index={index}
                        isRunning={isRunning}
                        isFinished={isFinished}
                        lightBulbColor={lightBulbColor}
                        lightBulbColorAlt={lightBulbColorAlt}
                    />
                ))}
            </BallTrackTop>
            <BallTrackLeft>
                {balls.slice(9, 18).map((_, index) => (
                    <Ball
                        key={index + 9}
                        index={index + 9}
                        isRunning={isRunning}
                        isFinished={isFinished}
                        lightBulbColor={lightBulbColor}
                        lightBulbColorAlt={lightBulbColorAlt}
                    />
                ))}
            </BallTrackLeft>
            <BallTrackRight>
                {balls.slice(18, 27).map((_, index) => (
                    <Ball
                        key={index + 18}
                        index={index + 18}
                        isRunning={isRunning}
                        isFinished={isFinished}
                        lightBulbColor={lightBulbColor}
                        lightBulbColorAlt={lightBulbColorAlt}
                    />
                ))}
            </BallTrackRight>
            <BallTrackBottom>
                {balls.slice(28, 36).map((_, index) => (
                    <Ball
                        key={index + 28}
                        index={index + 28}
                        isRunning={isRunning}
                        isFinished={isFinished}
                        lightBulbColor={lightBulbColor}
                        lightBulbColorAlt={lightBulbColorAlt}
                    />
                ))}
            </BallTrackBottom>
        </>
    );
}


const Ball = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== 'isRunning' && prop !== 'isFinished' && prop !== 'lightBulbColor' && prop !== 'lightBulbColorAlt' && prop !== 'index',
})`
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: ${(props) =>
        props.index % 2 === 0 ? props.lightBulbColor : props.lightBulbColorAlt};
    animation: ${(props) =>
        css`
            ${keyframes`
                0%, 100% {
                    background-color: ${props.lightBulbColor};
                }
                50% {
                    background-color: ${props.lightBulbColorAlt};
                }
            `}
        `}
        ${(props) =>
        props.isFinished
            ? '0.5s'
            : props.isRunning
                ? '1s'
                : '3s'}
        infinite steps(1);
    animation-delay: ${(props) =>
        props.isFinished ? '0s' : `${(props.index % 2) * 1.5}s`};
`;
const BallTrackTop = styled.div`
    top: 2px;
    left: 0px;
    position: absolute;
    width: 300px;
    height: 30px;
    display: flex;
    gap: 12px;
`;

const BallTrackLeft = styled.div`
    top: 32px;
    left: 0px;
    position: absolute;
    width: 30px;
    height: 270px;
    display: flex;
    flex-direction: column;
    gap: 9px;
    padding-top: 3px;
`;

const BallTrackBottom = styled.div`
    bottom: -1.5px;
    left: 34px;
    position: absolute;
    width: 410px;
    height: 30px;
    display: flex;
    gap: 12px;
`;

const BallTrackRight = styled.div`
    top: -37px;
    right: -4px;
    position: absolute;
    width: 30px;
    height: 370px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding-top: 40px;
`;
