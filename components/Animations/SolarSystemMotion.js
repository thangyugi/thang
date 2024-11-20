import React from 'react'
import Lottie from 'react-lottie'
import SolarMotionData from '@/assets/animation/solar-system.json'

const SpaceMotion = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: SolarMotionData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return <Lottie options={defaultOptions} width='100%' />
}

export default SpaceMotion
