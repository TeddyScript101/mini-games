import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import MachineBody from '../component/luckyDraw/MachineBody';
import { useSelector, useDispatch } from 'react-redux';
import { setIsSpinning, setTheme } from '../redux/luckyDrawSlice'

export default function LuckyDraw() {
    const theme = useSelector((state) => state.luckyDraw.theme);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setTheme({
            background: { start: "#5C4033", end: "#3E2723" },
            maxDiscount: "50%"
        }));
    }, []);

    if (!theme?.background?.start || !theme?.background?.end) {
        return null;
    }

    return (
        <Background start={theme.background.start} end={theme.background.end}>
            <Container>
                <GameTitle>GACHAPON</GameTitle>
                <MachineBody />
                <Footer>
                    <MovingBanner>
                        <BannerText>
                            NEW BRAND NEW BRAND NEW BRAND NEW BRAND NEW BRAND      
                        </BannerText>
                    </MovingBanner>
                </Footer>
            </Container>
        </Background>
    );
}

const Background = styled.div`
  background: rgb(57,158,150); 
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  max-width: 400px;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0px 0px 0px;
`;

const GameTitle = styled.div`
  font-weight: 600;
  font-size: 2rem;
  color: white;
  flex: 2;
`;

const Footer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  width: 100%;
`;

const MovingBanner = styled.div`
  color: white;
  background-color: orange;
  width: 100%;
  height: 30px;
  font-size: 25px;
  overflow: hidden;  /* Hide content that is outside the container */
  position: relative;
`;


const moveBanner = keyframes`
  0% {
    transform: translateX(100%); /* Start the text from the right */
  }
  100% {
    transform: translateX(-100%); /* Move the text to the left */
  }
`;

const BannerText = styled.div`
  display: inline-block;
  position: absolute;
  white-space: nowrap; /* Ensures the text doesn't wrap */
  animation: ${moveBanner} 10s linear infinite; /* Adjust timing as needed */
  width: max-content; /* Ensures the width fits the content without excess space */
`;


