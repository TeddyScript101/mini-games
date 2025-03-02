import React from 'react'
import styled from 'styled-components';
import { storeKeyEnum } from '../../const';
export default function MachineHeadWithLogo({ img, storeKey, children }) {
    return (
        <Body storeKey={storeKey}>
            {img && <img src={img} alt='logo' />}
            {children}
        </Body>
    )
}


const Body = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== 'storeKey',
})`
    background: linear-gradient(180deg, rgba(251,240,211,0.98) 75%, rgba(255,255,255,1) 96%); 
    width: ${({ storeKey }) => storeKey === storeKeyEnum.slotMachine ? "70%" : '88%'};
    border-radius: ${({ storeKey }) => storeKey === storeKeyEnum.slotMachine ? "20px 20px 0px 0px" : 'none'};
    height: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    border: ${(props) => (props.storeKey === storeKeyEnum.luckyDraw ? '5px solid #963A12' : props.storeKey === storeKeyEnum.slotMachine ? '11px solid #963A12' : 'none')};
    border-bottom:none;
    img {
        height: 80px;    
    }
`;
