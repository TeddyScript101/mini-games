import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import MachineBody from '../component/luckyDraw/MachineBody';
import { useSelector, useDispatch } from 'react-redux';
import { setLuckyDrawTheme } from '../redux/luckyDrawSlice'

export default function LuckyDraw() {
  const theme = useSelector((state) => state.luckyDraw.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    const luckyDrawItems = [
      { id: 0, name: 'Free Monchi', validDate: new Date().toISOString() },
      { id: 1, name: '50% OFF', validDate: new Date().toISOString() },
      { id: 2, name: 'Free Monchi', validDate: new Date().toISOString() },
      { id: 3, name: '50% OFF', validDate: new Date().toISOString() },
      { id: 4, name: '50% OFF', validDate: new Date().toISOString() },
      { id: 5, name: 'Free Monchi', validDate: new Date().toISOString() },
      { id: 6, name: '50% OFF', validDate: new Date().toISOString()},
      { id: 7, name: 'Free Monchi', validDate: new Date().toISOString() },
    ]

    const goItem = { id: 999, name: 'GO!' };
    luckyDrawItems.splice(4, 0, goItem);


    dispatch(setLuckyDrawTheme({
      background: { start: "#5C4033", end: "#3E2723" },
      maxDiscount: "50%",
      logo: "https://hommdesserts.com.au/wp-content/uploads/2024/03/homm-dessert-at-heart-logo-plain-red.svg#383",
      luckyDrawItems
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
  font-size: 1rem;
  color: white;
  flex: 1;
`;

const Footer = styled.div`
  flex: 1;
  display: flex;
  padding-top: 30px;
  align-items: start;
  width: 100%;
`;

const MovingBanner = styled.div`
  color: white;
  background-color: orange;
  width: 100%;
  height: 30px;
  font-size: 25px;
  overflow: hidden;  
  position: relative;
`;


const moveBanner = keyframes`
  0% {
    transform: translateX(100%); 
  }
  100% {
    transform: translateX(-100%);
  }
`;

const BannerText = styled.div`
  display: inline-block;
  position: absolute;
  white-space: nowrap;
  animation: ${moveBanner} 10s linear infinite;
  width: max-content;
`;


