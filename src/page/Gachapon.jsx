import React, { useEffect } from 'react';
import styled from 'styled-components';
import MachineBody from '../component/gachapon/MachineBody';
import Footer from '../component/gachapon/Footer';
import { useSelector, useDispatch } from 'react-redux';
import { setGachaIsSpinning, setGachaTheme, setGachaResult } from '../redux/gachaSlice'


export default function Gachapon() {
  const theme = useSelector((state) => state.gacha.theme);
  const dispatch = useDispatch();


  const handleWheelClick = () => {
    dispatch(setGachaIsSpinning(true))
    //TODO: add api fetch to get result 
    dispatch(setGachaResult({ name: "10% off discount coupon", validDate: new Date().toISOString() }))
  };


  useEffect(() => {
    dispatch(setGachaTheme({
      background: { start: "#5C4033", end: "#3E2723" },
      maxDiscount: "50%",
      logo: "https://hommdesserts.com.au/wp-content/uploads/2024/03/homm-dessert-at-heart-logo-plain-red.svg#383"
    }));

    const metaTag = document.querySelector('meta[name="theme-color"]');

    if (metaTag) {
      metaTag.setAttribute('content', '#493029');
    } else {
      const newMetaTag = document.createElement('meta');
      newMetaTag.setAttribute('name', 'theme-color');
      newMetaTag.setAttribute('content', '#493029');
      document.head.appendChild(newMetaTag);
    }
  }, []);

  if (!theme?.background?.start || !theme?.background?.end) {
    return null;
  }

  return (
    <GradientBackground start={theme.background.start} end={theme.background.end}>
      <Container>
        <GameTitle>GACHAPON</GameTitle>
        <MachineBody />
        <Footer handleWheelClick={handleWheelClick} />
      </Container>
    </GradientBackground>
  );
}

const GradientBackground = styled.div`
  background: ${({ start, end }) => `radial-gradient(circle, rgba(255, 255, 255, 0.05) 1%, ${start} 50%, ${end})`};
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;



const Container = styled.div`
  display: flex;
  height:100%;
  width:100%;
  max-width:400px;
  flex-direction:column;
  align-items: center;
  padding: 2rem 0px 0px 0px;
`

const GameTitle = styled.div`
  font-weight: 600;
  font-size: 1rem;
  color: white;
  flex:1;
`;

