import React from 'react'
import styled from 'styled-components';
export default function MachineHeadWithLogo({ bordered, img, children }) {
    return (
        <Body bordered={bordered}>
            <img src={img} alt='logo' />
            {children}
        </Body>
    )
}


const Body = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== 'bordered',
})`
    background: linear-gradient(180deg, rgba(251,240,211,0.98) 75%, rgba(255,255,255,1) 96%); 
    width: 88%;
    height: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    border: ${(props) => (props.bordered ? '5px solid brown' : 'none')};
    border-bottom:none;
    img {
        height: 90px;    
    }
`;
