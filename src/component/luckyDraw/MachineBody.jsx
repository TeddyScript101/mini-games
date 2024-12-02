import React from 'react'
import styled, { keyframes } from 'styled-components';
import MachineHeadWithLogo from '../common/MachineHeadWithLogo';
import MaxDiscountLabel from '../common/MaxDiscountLabel'
import { storeKey } from '../../const'

export default function MachineBody() {
    // Create a single array of 28 balls
    const balls = [...Array(28)];

    return (
        <>
            <MachineHeadWithLogo img='https://hommdesserts.com.au/wp-content/uploads/2024/03/homm-dessert-at-heart-logo-plain-red.svg#383' bordered>
                <MaxDiscountLabel storeKey={storeKey.luckyDraw} />
            </MachineHeadWithLogo>
            <LuckyDrawContainer>
                {/* Render all balls into their respective tracks */}
                <BallTrackTop>
                    {balls.slice(0, 7).map((_, index) => (
                        <Ball key={index} index={index} />
                    ))}
                </BallTrackTop>
                <BallTrackLeft>
                    {balls.slice(7, 14).map((_, index) => (
                        <Ball key={index} index={index + 7} />
                    ))}
                </BallTrackLeft>
                <BallTrackRight>
                    {balls.slice(14, 21).map((_, index) => (
                        <Ball key={index} index={index + 14} />
                    ))}
                </BallTrackRight>
                <BallTrackBottom>
                    {balls.slice(21, 28).map((_, index) => (
                        <Ball key={index} index={index + 21} />
                    ))}
                </BallTrackBottom>

                <CardGrid>
                    <Card>FREE MOCHI</Card>
                    <Card>FREE MOCHI</Card>
                    <Card>50% OFF</Card>
                    <Card>50% OFF</Card>
                    <Card className="goBtn">GO!</Card>
                    <Card>50% OFF</Card>
                    <Card>FREE MOCHI</Card>
                    <Card>FREE MOCHI</Card>
                    <Card>50% OFF</Card>
                </CardGrid>
            </LuckyDrawContainer>
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
    background-color:rgb(225,202,180);
`;


const CardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 85%;
    height: 85%;
`;

const Card = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border: 2px solid #a0522d;
    border-radius: 10px;
    font-weight: bold;
    color: brown;
    font-size: 16px;
    text-align: center;

    &.goBtn {
        background-color: #a0522d;
        color: white;
        font-size: 20px;
        font-style: italic;
    }
`;

const BallTrackTop = styled.div`
    top: 0px;
    left: 0px;
    position: absolute;
    width: 370px;
    height: 30px;
    display: flex;
    gap: 20px;
    padding-left: 40px;
`;

const BallTrackLeft = styled.div`
    top: 30px;
    left: 0;
    position: absolute;
    width: 30px;
    height: 370px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-top: 3px;
`;

const BallTrackBottom = styled.div`
    bottom: 0;
    left: 30px;
    position: absolute;
    width: 370px;
    height: 30px;
    display: flex;
    gap: 20px;
    padding-left: 0px;
`;

const BallTrackRight = styled.div`
    top: 0px;
    right: 0px;
    position: absolute;
    width: 30px;
    height: 370px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-top: 40px;
`;

// Keyframe animation for color shift
const changeColor = keyframes`
    0%, 100% {
        background-color:rgb(224,192,141);
    }
    50% {
        background-color: rgb(220,215,190);
    }
`;

const Ball = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: ${props => props.index % 2 === 0 ? 'rgb(224,192,141)' : 'rgb(220,215,190)'};
    animation: ${changeColor} 3s infinite;
    animation-delay: ${props => `${props.index * 0.1}s`}; /* Delayed animation for anti-clockwise effect */
`;
