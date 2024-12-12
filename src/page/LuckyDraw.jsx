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
      { id: 0, name: 'Pie', validDate: new Date().toISOString(), img: "data:image/jpeg;base64,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", isEmpty: false },
      { id: 1, name: 'Free Mochi', validDate: new Date().toISOString(), img: "https://img.bestrecipes.com.au/aaV-foHf/w643-h428-cfill-q90/br/2017/03/annes-cake-recipe-520563-1.jpg",isEmpty: false },
      { id: 2, name: "", validDate: null, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLEySXEIcK1QatZRmZYRh4vIfmnB43NBh8DA&s", isEmpty: true },
      { id: 3, name: "", validDate: null, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLEySXEIcK1QatZRmZYRh4vIfmnB43NBh8DA&s", isEmpty: true },
      { id: 4, name: '50% OFF', validDate: new Date().toISOString(), isEmpty: false },
      { id: 5, name: 'Free  Mooncake', validDate: new Date().toISOString(), img: "https://img.taste.com.au/18AXPnQk/w1200-h630-cfill/taste/2016/11/mango-and-pineapple-tart-104743-1.jpeg", isEmpty: false },
      { id: 6, name: '50% OFF', validDate: new Date().toISOString(), isEmpty: false },
      { id: 7, name: 'Tart', validDate: new Date().toISOString(), img: "https://richanddelish.com/wp-content/uploads/2023/05/mini-fruit-tarts-2.jpg", isEmpty: false },
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


