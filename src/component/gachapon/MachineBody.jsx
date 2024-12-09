import React, { useRef, useEffect } from 'react'
import styled, { keyframes, css } from 'styled-components';
import MaxDiscountLabel from '../common/MaxDiscountLabel'
import { useSelector, useDispatch } from 'react-redux';
import { setGachaDroppedBall, setGachaShowFullScreen } from '../../redux/gachaSlice'
import CouponDisplay from '../common/CouponDisplay'
import MachineHeadWithLogo from '../common/MachineHeadWithLogo'
import { storeKey } from '../../const'
import screen from '../../assets/screen.json'
import Lottie from 'lottie-react';

export default function MachineBody() {
    const { theme, isSpinning, droppedBall, showFullScreen } = useSelector((state) => state.gacha);

    const lottieRef = useRef(null);

    const handlePlay = () => {
        lottieRef.current?.play();
    };

    useEffect(() => {
        if (isSpinning) handlePlay()
    }, [isSpinning])

    const dispatch = useDispatch();

    const handleDropComplete = () => {
        dispatch(setGachaDroppedBall(true));
        setTimeout(() => dispatch(setGachaShowFullScreen(true)), 1000);
    };

    return (
        <Body>
            <MachineHeadWithLogo img={theme.logo}>
                <MaxDiscountLabel storeKey={storeKey.gacha} />
            </MachineHeadWithLogo>
            <GachaArea start='#B0B0B0' end='#505050'>
                <Window>
                    <WindowAnimationContainer>
                        <Lottie
                            lottieRef={lottieRef}
                            autoplay={false}
                            animationData={screen}
                            loop={false}
                            initialSegment={[30, 100]}
                            onComplete={handleDropComplete}
                        />
                    </WindowAnimationContainer>
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
                <Wheel isSpinning={isSpinning} src='/images/wheel.png' alt='wheel'>
                </Wheel>
                <GachaCollectionArea>
                    {droppedBall && <DroppedBall src='/images/img_9.png' />}
                </GachaCollectionArea>

            </GachaArea>
            {showFullScreen && (
                <CouponDisplay storeKey={storeKey.gacha} />
            )}
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
const WindowAnimationContainer = styled.div`
    position:absolute;
    scale:1.321;
    top:-230px;   
`;

const Body = styled.div`
    flex:1;
    display:flex;
    width:100%;
    flex-direction:column;
    align-items:center;
`;

const GachaArea = styled.div`
    background: ${({ start, end }) => `linear-gradient(to right, ${start}, ${end})`};
    width:80%;
    height:21rem;
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

const appearInCollection = keyframes`
  0% {
    transform: translateY(-20px) rotate(50deg);
   
  }
  40% {
    transform: rotate(60deg);
  }
  70% {
    transform: translateX(-10px) rotate(10deg); 
  }
    100%{
    transform: translateX(-10px) rotate(10deg); 

}
`;

const DroppedBall = styled.img`
  width: 63px;
  height: 63px;
  position: absolute;
  bottom: 1px;
  left: 11px;
  animation: ${appearInCollection} 1s linear forwards;
`;


const InsertCoinsArea = styled.div`
    position:absolute;
    width:40px;
    height:40px;
    background-color:brown;
    bottom:80px;
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
    bottom:38px;
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

const Wheel = styled.img.withConfig({
    shouldForwardProp: (prop) => prop !== 'isSpinning',
})`
    position: absolute;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    bottom: 25px;
    cursor: pointer;
    
    ${({ isSpinning }) =>
        isSpinning &&
        css`
        animation: ${spin} 1s linear forwards;
      `}
  `;


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


