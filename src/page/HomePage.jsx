import Lottie from 'lottie-react';
import animation from '../assets/Gachapon_code.json'
import React, { useEffect, useRef } from 'react';

export default function HomePage() {


  return (
    <>
      {/* First animation using Lottie component */}
      <div style={{ width: '500px', height: '300px' }}>
        <Lottie animationData={animation} loop={true} />
      </div>

    </>
    
  );
}
