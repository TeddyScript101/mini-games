import React from 'react'
import styled from 'styled-components';
export default function GameTitle({ text }) {
    return (
        <Wrapper>{text}</Wrapper>
    )
}


const Wrapper = styled.div`
  font-weight: 600;
  font-size: 1rem;
  color: white;
  flex: 1;
`;