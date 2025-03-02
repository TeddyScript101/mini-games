import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { storeKeyEnum } from '../../const';
// import MaxDiscountLabelMini from '../common/MaxDiscountLabelMini';
import MachineHeadWithLogo from '../common/MachineHeadWithLogo';
import MachineBodyWithLightBulbs from '../common/MachineBodyWithLightBulbs';
import styled from 'styled-components';
import Trigger from '../slotMachine/Trigger';
import CouponDisplay from '../common/CouponDisplay';
import { setSlotMachineShowFullScreen } from '../../redux/slotMachineSlice'
export default function MachineBody() {
    const { theme, isRunning, result, showFullScreen } = useSelector((state) => state[storeKeyEnum.slotMachine]);
    const dispatch = useDispatch();
    const handleAnimationEnd = () => {
        if (result) dispatch(setSlotMachineShowFullScreen(true))
    }

    return (
        <>
            <MachineHeadWithLogo img={theme.machineLogo} storeKey={storeKeyEnum.slotMachine}>
                {/* <MaxDiscountLabelMini storeKey={storeKeyEnum.slotMachine} /> */}
            </MachineHeadWithLogo>

            <MachineBodyWithLightBulbs lightboxColor={theme.lightboxColor} storeKey={storeKeyEnum.slotMachine} lightBulbColor={theme.lightBulbColor}>
                <SlotWrapper>
                    {theme.slots.map((el, outerIndex) => {
                        const stopY = theme.stopYArray[outerIndex].stopY
                        return (
                            <Slot key={outerIndex + stopY}>
                                <SlotContentWrapper
                                    style={{
                                        animationName: isRunning ? `moveDown-${outerIndex}` : 'none',
                                        animationDuration: '3s',
                                        animationTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
                                        animationFillMode: 'forwards',
                                        animationDelay: `${outerIndex * 0.2}s`,
                                    }}
                                    onAnimationEnd={handleAnimationEnd}
                                    isRunning={isRunning}
                                    delay={outerIndex * 0.2}
                                >
                                    <style>
                                        {moveDownKeyframes(stopY).replace('moveDown', `moveDown-${outerIndex}`)}
                                    </style>
                                    {el.map((item, innerIndex) => (
                                        <div key={innerIndex}>
                                            {item.img ? (
                                                <CircularFrame>
                                                    <CircularImage src={item.img} />
                                                </CircularFrame>
                                            ) : (
                                                <CouponText>{item.name}</CouponText>
                                            )}
                                        </div>
                                    ))}
                                </SlotContentWrapper>
                                {showFullScreen && (
                                    <CouponDisplay storeKey={storeKeyEnum.slotMachine} />
                                )}

                            </Slot>
                        );
                    })}
                </SlotWrapper>

                <Trigger />
            </MachineBodyWithLightBulbs>

            <HorizontalMessageBox>
                <span>BRAND NEW</span>
            </HorizontalMessageBox>
        </>
    );
}

const SlotWrapper = styled.div`
    display: flex;
    gap: 20px;
`;

const CouponText = styled.div`
    text-align: center;
    color: #FE3935;
    font-size: 20px;
    font-weight: 600;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
`;

const CircularFrame = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #B17053;
    background-color: white;
`;

const CircularImage = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
`;

const Slot = styled.div`
    width: 60px;
    height: 240px;
    background-color: #E8E3D0;
    border-radius: 15px;
    border: 2px solid #B17053;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    overflow: hidden;
`;

const SlotContentWrapper = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== 'isRunning',
})`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 15px 0px;
    gap: 20px;
`;

const moveDownKeyframes = (stopY) => `
    @keyframes moveDown {
        0% {
            transform: translateY(-100%);
        }
        60% {
            transform: translateY(${stopY * 1.2}px);
        }
        100% {
            transform: translateY(${stopY}px);
        }
    }
`;


const HorizontalMessageBox = styled.div`
  background-color: #FEE1A8;
  width: 350px;
  height: 80px;
  border: 5px solid #963A12;
  border-radius: 15px;
  font-size: 50px;
  color: #963A12;
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
  span {
      animation: scroll 5s linear infinite;
  }

  @keyframes scroll {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`;
