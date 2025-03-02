import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { useSelector } from 'react-redux';
import { storeKeyEnum } from '../../const';

export default function Trigger() {
    const isRunning = useSelector((state) => state[storeKeyEnum.slotMachine].isRunning);
    return (
        <Body isRunning={isRunning}>
            <div className='wrapper'>
                <div className="partOne" />
                <div className="partTwo" />
                <div className="partThree" />
                <div className="partFour" />
            </div>
        </Body>
    );
}

const drop = keyframes`
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(60px);
    }
    100% {
        transform: translateY(0);
    }
`;

const adjustHeight = keyframes`
    0% {
        height: 60px;
    }
    50% {
        height: 0px;
    }
    100% {
        height: 60px;
    }
`;

const Body = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== 'isRunning'
})`
    position: absolute;
    top: 50%;
    right: -20px;

    & .wrapper {
        position: relative;
    }

    & .partOne {
        position: absolute;
        top: 0;
        left: -10px;
        width: 12px;
        height: 25px;
        background-color: #832307;
    }

    & .partTwo {
        position: absolute;
        top: 8px;
        left: 3px;
        width: 20px;
        height: 10px;
        background-color: #fee1a8;
    }

    & .partThree {
        position: absolute;
        bottom: -18px;
        left: 22px;
        width: 10px;
        height: 60px;
        background-color: #fee1a8;
        ${({ isRunning }) => isRunning && css`
            animation: ${adjustHeight} 2s linear;
        `}
    }

    & .partFour {
        position: absolute;
        top: -60px;
        left: 12px;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: #832307;
        ${({ isRunning }) => isRunning && css`
            animation: ${drop} 2s linear;
        `}
    }
`;