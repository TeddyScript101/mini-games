import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useSelector } from 'react-redux';
export default function MaxDiscountLabelMini({storeKey}) {
  const theme = useSelector((state) => state[storeKey].theme);
  return (
    <>
      <SpinningLabel />
      <Container>
        <div className="rowOne">
          <div className="winText">WIN</div>
          <div className="upToText">
            <div>UP</div>
            <div>TO</div>
          </div>
        </div>
        <div className="percentageText">{theme.maxDiscount}</div>
        <div className="offText">OFF</div>
      </Container>
    </>
  );
}

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
const Container = styled.div`
  position:absolute;
  right:-14px;
  bottom:64px;

  & .rowOne {
    display: flex;
    gap: 5px;
  }
  & .winText {
    font-size: 15px;
    font-weight: bold;
    color: white;
    font-style: italic;
  }
  & .upToText {
    font-size: 10px;
    font-weight: bold;
    color: brown;
  }
  & .percentageText {
    font-size: 25px;
    font-weight: bold;
    color: white;
    font-style: italic;
  }
  & .offText {
    font-size: 12px;
    font-weight: bold;
    color: white;
    font-style: italic;
  }

`


const SpinningLabel = styled.div`
  position: absolute;
  background-color: orange;
  color: white;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  width: 100px;
  height: 100px;
  right: -40px;
  top: -60px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  clip-path: polygon(
    100% 50.1%, 94.77% 54.5%, 99.02% 59.85%, 93.04% 63.15%, 96.16% 69.22%,
    89.64% 71.29%, 91.52% 77.86%, 84.73% 78.62%, 85.29% 85.42%, 78.48% 84.84%,
    77.7% 91.63%, 71.13% 89.73%, 69.04% 96.23%, 62.98% 93.09%, 59.66% 99.06%,
    54.32% 94.79%, 49.9% 100%, 45.5% 94.77%, 40.15% 99.02%, 36.85% 93.04%,
    30.78% 96.16%, 28.71% 89.64%, 22.14% 91.52%, 21.38% 84.73%, 14.58% 85.29%,
    15.16% 78.48%, 8.37% 77.7%, 10.27% 71.13%, 3.77% 69.04%, 6.91% 62.98%,
    0.94% 59.66%, 5.21% 54.32%, 0% 49.9%, 5.23% 45.5%, 0.98% 40.15%, 6.96% 36.85%,
    3.84% 30.78%, 10.36% 28.71%, 8.48% 22.14%, 15.27% 21.38%, 14.71% 14.58%,
    21.52% 15.16%, 22.3% 8.37%, 28.87% 10.27%, 30.96% 3.77%, 37.02% 6.91%,
    40.34% 0.94%, 45.68% 5.21%, 50.1% 0%, 54.5% 5.23%, 59.85% 0.98%, 63.15% 6.96%,
    69.22% 3.84%, 71.29% 10.36%, 77.86% 8.48%, 78.62% 15.27%, 85.42% 14.71%,
    84.84% 21.52%, 91.63% 22.3%, 89.73% 28.87%, 96.23% 30.96%, 93.09% 37.02%,
    99.06% 40.34%, 94.79% 45.68%
  );

  /* Add animation */
  animation: ${rotate} 50s linear infinite;


`;
