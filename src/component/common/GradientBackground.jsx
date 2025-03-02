import React from 'react'
import styled from 'styled-components';

export default function GradientBackground({ start, end, isRadial, children }) {
    return (
        <Background start={start} end={end} isRadial={isRadial}>
            <Container>
                {children}
            </Container>
        </Background>
    )
}

const Background = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== 'start' && prop !== 'end' && prop !== 'isRadial',
})`
  background: ${({ isRadial, start, end }) =>
        isRadial
            ? `radial-gradient(circle, rgba(255, 255, 255, 0.05) 1%, ${start} 50%, ${end})`
            : `${end}`};
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
