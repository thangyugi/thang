import React from 'react'
import TechMiddleStyle from './TechMiddle.module.scss'

import SolarSystemMotionWeb from '@/components/Animations/SolarSystem/SolarSystemMotionWeb'
import Heading from '@/components/WinUI/Typography/Heading'

const TechMiddle = () => {
  return (
    <>
      <div className={TechMiddleStyle['www-techMiddle']}>
        <div className={TechMiddleStyle['www-techMiddle-wrapper']}>
          {/* <Heading level={4}>My Solar System</Heading> */}
          <SolarSystemMotionWeb />
        </div>
      </div>
    </>
  )
}

export default TechMiddle
