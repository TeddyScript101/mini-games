import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

const AnimationComponent = ({
    animationPath,   // Path to the animation JSON
    assetsPath = '', // Path to the assets (optional)
    loop = true,     // Should the animation loop?
    autoplay = true, // Should the animation autoplay?
    height = 300,    // Animation height
    width = 300,     // Animation width
}) => {
    const animationContainer = useRef(null);

    useEffect(() => {
        const animation = lottie.loadAnimation({
            container: animationContainer.current,
            renderer: 'svg',
            loop,
            autoplay,
            path: animationPath,
            assetsPath, // Optional: Specify assets path if needed
        });

        return () => {
            animation.destroy(); // Clean up on unmount
        };
    }, [animationPath, assetsPath, loop, autoplay]);

    return (
        <div
            ref={animationContainer}
            style={{ width, height, margin: 'auto' }}
        />
    );
};

export default AnimationComponent;
