import React from 'react'
import styled from 'styled-components';
import DecorationBallsForLuckyDraw from '../luckyDraw/DecorationBalls'
import DecorationBallsForSlotMachine from '../slotMachine/DecorationBalls'
import { storeKeyEnum } from '../../const'
export default function MachineBodyWithLightBulbs({ children, lightboxColor, lightBulbColor, storeKey }) {

  return (
    <Wrapper lightboxColor={lightboxColor} storeKey={storeKey}>
      {storeKey === storeKeyEnum.luckyDraw ? <DecorationBallsForLuckyDraw storeKey={storeKey} /> : <DecorationBallsForSlotMachine storeKey={storeKey} lightBulbColor={lightBulbColor}/>}
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'lightboxColor' && prop !== "storeKey",
})`
    position: relative;
    border: ${({ storeKey }) =>
    storeKey === storeKeyEnum.luckyDraw ? "5px solid #963A12" : `11px solid #963A12`};
    border-bottom: ${({ storeKey }) =>
    storeKey === storeKeyEnum.luckyDraw ? "5px solid #963A12" : "none"};
    width: ${({ storeKey }) =>
    storeKey === storeKeyEnum.luckyDraw ? "400px" : "320px"};
    height: ${({ storeKey }) =>
    storeKey === storeKeyEnum.luckyDraw ? "400px" : "320px"};
    border-radius: ${({ storeKey }) =>
    storeKey === storeKeyEnum.luckyDraw
      ? "20px"
      : storeKey === storeKeyEnum.slotMachine
        ? "12px 12px 0 0"
        : "12px"};
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ lightboxColor }) => lightboxColor || '#FCDAA2'};
    padding: 8px;
  `;
