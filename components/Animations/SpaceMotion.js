import React from 'react'
import Lottie from 'react-lottie'
import SpaceMotionData from '@/assets/animation/agx_spaces.json'

const SpaceMotion = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: SpaceMotionData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return <Lottie options={defaultOptions} height={400} width={400} />
}

export default SpaceMotion
