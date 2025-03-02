import React from 'react'
import styled from 'styled-components';

export default function Footer({ handleWheelClick }) {
  return (
    <Body>
      <Button onClick={handleWheelClick}>SPIN</Button>
      <BottomTextRow>
        <div className='whiteBall' />
        <div>Press to find out your reward</div>
      </BottomTextRow>
    </Body>
  )
}

const Body = styled.div`
    flex: 1;
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    gap: 2rem;
    position: relative;
    background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0.3) 0.5%,
        rgba(255, 245, 170, 0.4) 5%,
        rgba(122, 64, 50, 0.9) 15%, 
        #4E2A21 40%, 
        #4E2A21 100% 
    );
    padding: 2rem;
`;


const Button = styled.div`
    background-color: #F68D1B;
    padding: 0.8rem 2.8rem;
    font-weight: bold;
    font-size:25px;
    color: white;
    border-radius: 8px; 
    text-align: center;
`;




const BottomTextRow = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  gap:7px;

  & .whiteBall{
    width: 20px;
    height:20px;
    background-color: white;
    border-radius: 50%;
  }
`