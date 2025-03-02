import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';


const HomePage = () => {
  const demoKeySet = {
    gachapon: "gachaponDemo",
    luckyDraw: "luckyDrawDemo",
    slotMachine: "slotMachineDemo"
  }

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Welcome to the Home Page</h1>
      <div>
        <NavButton to={`/gachapon?key=${demoKeySet.gachapon}`}>Go to Gachapon</NavButton>
        <NavButton to={`/luckyDraw?key=${demoKeySet.luckyDraw}`}>Go to Lucky Draw</NavButton>
        <NavButton to={`/slotMachine?key=${demoKeySet.slotMachine}`}>Go to Slot Machine</NavButton>
      </div>
    </div>
  );
};


const NavButton = styled(Link)`
  display: inline-block;
  margin: 10px;
  padding: 15px 25px;
  font-size: 16px;
  color: white;
  background-color: #6c1d08;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #8a2a10;
  }
`;





export default HomePage;
