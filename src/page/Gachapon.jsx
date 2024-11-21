import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MachineBody from '../component/gachapon/machineBody';
import Footer from '../component/gachapon/Footer';
export default function Gachapon() {
  const [theme, setTheme] = useState(null);
  const [isSpinning, setIsSpinning] = useState(false);

  const handleWheelClick = () => {
    setIsSpinning(true);
    setTimeout(() => setIsSpinning(false), 5000);
  };


  useEffect(() => {
    setTheme({
      background: { start: "#5C4033", end: "#3E2723" },
      maxDiscount:"50%"
    });
  }, []);

  if (!theme?.background?.start || !theme?.background?.end) {
    return null;
  }

  return (
    <GradientBackground start={theme.background.start} end={theme.background.end}>
      <Container>
      <GameTitle>GACHAPON</GameTitle>
      <MachineBody isSpinning={isSpinning} maxDiscount={theme.maxDiscount}/>
      <Footer handleWheelClick={handleWheelClick}/>
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
  font-size: 2rem;
  color: white;
  flex:2;
`;

