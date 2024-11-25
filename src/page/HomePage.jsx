import React from 'react'
import Lottie from 'lottie-react';
import animation from '../assets/Gachapon_code.json'

export default function HomePage() {
  return (
    <>
    {/* example code of imported animation */}
      <div style={{ width: '500px', height: '300px' }}>
        <Lottie animationData={animation} loop={true} />
      </div>
    </>
  )
}
