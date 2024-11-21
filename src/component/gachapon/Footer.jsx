import React from 'react'
import styled from 'styled-components';

export default function Footer({handleWheelClick}) {
  return (
    <Body>
        <Button onClick={handleWheelClick}>SPIN</Button>
        <div>Press to find out your reward</div>
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
        rgba(255, 255, 255, 0.3) 0.5%, /* Subtle white at the top */
        rgba(255, 245, 170, 0.4) 5%, /* Very light yellow */
        rgba(122, 64, 50, 0.9) 15%, /* Transitional brown shade */
        #4E2A21 40%, /* Solid brown starts here */
        #4E2A21 100% /* Solid brown for the rest */
    );
    padding: 2rem;
`;


const Button = styled.div`
    background-color: rgb(255,65,29);
    padding: 0.8rem 2rem;
    font-weight: bold;
    font-size:25px;
    color: white;
    border-radius: 8px; /* Optional for rounded corners */
    text-align: center;
`;
