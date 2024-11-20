import React from 'react'
import { frontStack, uilibsStack } from 'data/frontdata'
import TechFrontStyle from './TechFront.module.scss'

import TechCard from '@/components/GlobalUI/Section/TechCard'

import { v4 as uuid_v4 } from 'uuid'
import Heading from '@/components/WinUI/Typography/Heading'

import TechField from '@/sections/TechContent/TechField/TechField'
import TechTitle from '@/sections/TechContent/TechField/TechTitle'

const TechFront = () => {
  return (
    <div className={TechFrontStyle['www-frontend']}>
      <div className={TechFrontStyle['www-frontend-wrapper']}>
        <div className={TechFrontStyle['www-frontend-cell']}>
          <TechField size='four' sizeMobile='mb-two'>
            <TechTitle textAlign='center'>
              <Heading level={6}>I draw with</Heading>
            </TechTitle>
            {frontStack.map(({ title, Image, color }) => (
              <TechCard
                key={uuid_v4()}
                title={title}
                Image={Image}
                color={color}
              />
            ))}
          </TechField>
        </div>

        <div className={TechFrontStyle['www-frontend-cell']}>
          <TechField size='four' sizeMobile='mb-two'>
            <TechTitle textAlign='center'>
              <Heading level={6}>Color</Heading>
            </TechTitle>
            {uilibsStack.map(({ title, Image, color }) => (
              <TechCard
                key={uuid_v4()}
                title={title}
                Image={Image}
                color={color}
              />
            ))}
          </TechField>
        </div>
      </div>
    </div>
  )
}

export default TechFront
