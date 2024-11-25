import React from 'react'
import styled, { keyframes, css } from 'styled-components';
import MaxDiscountLabel from './MaxDiscountLabel'

export default function MachineBody({ isSpinning, maxDiscount }) {
    return (
        <Body>
            <MachineHeadWithLogo>
                <img src='https://hommdesserts.com.au/wp-content/uploads/2024/03/homm-dessert-at-heart-logo-plain-red.svg#383' alt='logo' />
                <MaxDiscountLabel maxDiscount={maxDiscount} />
            </MachineHeadWithLogo>
            <GachaArea start='#B0B0B0' end='#505050'>
                <Window>
                    {BallPositionConfig.map(({ size, bottom, left, rotate, color }, index) => (
                        <GachaBall
                            key={index}
                            size={size}
                            bottom={bottom}
                            left={left}
                            rotate={rotate}
                            color={color}
                        >DEAL</GachaBall>
                    ))}
                </Window>
                <InsertCoinsArea>
                    <Circle>
                        <Stroke />
                    </Circle>
                </InsertCoinsArea>
                <ExchangeCoinsArea>
                    <Eclipse bottom='4px' />
                    <Eclipse bottom='14px' />
                </ExchangeCoinsArea>
                {/* to be replaced by real wheel image */}
                <Wheel isSpinning={isSpinning}>
                    <Arrow src="src/assets/curved-arrow.png" style={{ transform: "rotate(0deg)" }} bottom='10px' left='5px' />
                    <Arrow src="src/assets/curved-arrow.png" style={{ transform: "rotate(120deg)" }} left='20px' />
                    <Arrow src="src/assets/curved-arrow.png" style={{ transform: "rotate(240deg)" }} bottom='12px' left='45px' />
                </Wheel>
                <GachaCollectionArea />
            </GachaArea>
        </Body>
    )
}

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(90deg);
    }
`;

const Body = styled.div`
    flex:1;
    display:flex;
    width:100%;
    flex-direction:column;
    align-items:center;
`;

const MachineHeadWithLogo = styled.div`
background: linear-gradient(180deg, rgba(251,240,211,0.98) 75%, rgba(255,255,255,1) 96%); 
    width:88%;
    height:6rem;
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;

    img{
        height:90px;    
    }
`;




const GachaArea = styled.div`
    background: ${({ start, end }) => `linear-gradient(to right, ${start}, ${end})`};
    width:80%;
    height:23rem;
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;
`

const Window = styled.div`
    position:absolute;
    top:20px;
    width:90%; 
    height:11rem;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;

const GachaBall = styled.div`
    position: absolute;
    bottom: ${({ bottom }) => bottom};
    left: ${({ left }) => left};
    width: ${({ size }) => size};
    height: ${({ size }) => size};
    background-color: ${({ color }) => color || '#FF6F61'};
    border-radius: 50%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transform: rotate(${({ rotate }) => rotate}); 
    display:flex;
    justify-content:center;
    align-items:center;
`;

const InsertCoinsArea = styled.div`
    position:absolute;
    width:40px;
    height:40px;
    background-color:brown;
    bottom:100px;
    left:30px;
    display:flex;
    justify-content:center;
    align-items:center;
`
const Circle = styled.div`
    width: 33px;
    height: 33px;
    background-color: white;
    border-radius: 50%; 
    display:flex;
    justify-content:center;
    align-items:center;
`;
const Stroke = styled.div`
    width:5px;
    height:25px;
    background-color: black;
`

const ExchangeCoinsArea = styled.div`
    position:absolute;
    width:60px;
    height:25px;
    background-color:brown;
    bottom:60px;
    left:20px;
    display:flex;
    justify-content:center;
    align-items:center;
`

const Eclipse = styled.div`
  position: absolute;
  bottom: ${({ bottom }) => `${bottom}`};  
  left: 5px;
  width: 50px;
  height: 6px;
  background-color: white;
  border-radius: 50%;
`;

const Wheel = styled.div`
  position:absolute;
  background-color: white;
  border-radius: 50%;
  width:80px;
  height:80px;
  bottom:50px;
  cursor: pointer;
  
  ${({ isSpinning }) =>
        isSpinning &&
        css`
            animation: ${spin} 1s ease-out forwards;
        `}
`

const GachaCollectionArea = styled.div`
  position: absolute;
  background-color: black;
  width: 80px;
  height: 80px;
  bottom: 0px;
  right: 10px;
  border-top-left-radius: 8px;  
  border-top-right-radius: 8px;  
  outline: 1px solid red;         
`;

const Arrow = styled.img`
  position: absolute;
  width: 30px;
  height: 30px;
  bottom: ${({ bottom }) => `${bottom}`};  
  left: ${({ left }) => `${left}`};  
  transform-origin: center center; /* Make sure rotation happens around the center */
`;

const BallPositionConfig = [
    { size: "55px", bottom: "0px", left: "3px", rotate: "3deg", color: "#FF6F61" },
    { size: "55px", bottom: "0px", left: "60px", rotate: "30deg", color: "#2196F3" },
    { size: "55px", bottom: "0px", left: "118px", rotate: "160deg", color: "#4CAF50" },
    { size: "55px", bottom: "0px", left: "175px", rotate: "120deg", color: "#FFC107" },
    { size: "55px", bottom: "0px", left: "232px", rotate: "120deg", color: "#FF6F61" },
    { size: "55px", bottom: "48px", left: "30px", rotate: "40deg", color: "#FFC107" },
    { size: "55px", bottom: "48px", left: "85px", rotate: "30deg", color: "#2196F3" },
    { size: "55px", bottom: "48px", left: "140px", rotate: "160deg", color: "#FF6F61" },
    { size: "55px", bottom: "48px", left: "200px", rotate: "120deg", color: "#FFC107" },
    { size: "55px", bottom: "94px", left: "170px", rotate: "120deg", color: "#4CAF50" }
]

