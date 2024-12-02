import React, { useState } from 'react';
import styled from 'styled-components';
import MachineHeadWithLogo from '../common/MachineHeadWithLogo';
import MaxDiscountLabel from '../common/MaxDiscountLabel';
import { storeKey } from '../../const';
import DecorationBalls from './DecorationBalls';
import CouponDisplay from '../common/CouponDisplay'; // Import CouponDisplay

export default function MachineBody() {
    const [highlightedIndex, setHighlightedIndex] = useState(null);
    const [isRunning, setIsRunning] = useState(false);
    const [showFullScreen, setShowFullScreen] = useState(false); // Add showFullScreen state

    const handleGoClick = () => {
        if (isRunning) return; 
        setIsRunning(true);
        setShowFullScreen(false); // Reset showFullScreen before starting
        let count = 0;
    
        const interval = setInterval(() => {
            const validIndices = [0, 1, 2, 3, 5, 6, 7, 8];
            const randomIndex = validIndices[Math.floor(Math.random() * validIndices.length)];
            setHighlightedIndex(randomIndex);
            count++;
    
            if (count >= 10) {
                clearInterval(interval);
                setHighlightedIndex(null); 
                setIsRunning(false);
                setShowFullScreen(true); // Show the full-screen coupon after animation
            }
        }, 300); 
    };

    return (
        <>
            <MachineHeadWithLogo img='https://hommdesserts.com.au/wp-content/uploads/2024/03/homm-dessert-at-heart-logo-plain-red.svg#383' bordered>
                <MaxDiscountLabel storeKey={storeKey.luckyDraw} />
            </MachineHeadWithLogo>
            <LuckyDrawContainer>

                <DecorationBalls />
                <CardGrid>
                    {Array.from({ length: 9 }).map((_, index) => (
                        <Card
                            key={index}
                            highlighted={index === highlightedIndex}
                            className={index === 4 ? 'goBtn' : ''}
                            onClick={index === 4 ? handleGoClick : undefined}
                        >
                            {index === 4 ? 'GO!' : index % 2 === 0 ? 'FREE MOCHI' : '50% OFF'}
                        </Card>
                    ))}
                </CardGrid>
            </LuckyDrawContainer>
            {showFullScreen && (
                <CouponDisplay storeKey={storeKey.luckyDraw} /> 
            )}
        </>
    );
}

const LuckyDrawContainer = styled.div`
    position: relative;
    border: 5px solid brown;
    width: 400px;
    height: 400px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FCDAA2;
    padding:8px;
`;

const CardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 85%;
    height: 85%;
    background-color:#52221E;
    padding:4px 3px;
    border-radius:10px;
`;

const Card = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== 'highlighted',
})`
    aspect-ratio:1/1;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F9F3DE;
    border: 9px solid ${(props) => (props.highlighted ? '#FCC979' : '#B6542D')};
    border-radius: 16px;
    font-weight: bold;
    color: brown;
    font-size: 16px;
    text-align: center;

    &.goBtn {
        background-color: #F30003;
        color: white;
        font-size: 20px;
        font-style: italic;
        cursor: pointer;
    }
`;
