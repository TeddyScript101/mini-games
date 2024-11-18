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
    flex:1;
    display:flex;
    width:100%;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    color:white;
    gap:2rem;
`;

const Button = styled.div`
    background-color:orange;
    padding:0.5rem 2rem;
`