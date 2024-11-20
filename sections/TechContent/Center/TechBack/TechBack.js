import React from 'react'
import { backStack, clouddb, database } from 'data/backdata'
import { v4 as uuid_v4 } from 'uuid'
import TechBackStyle from './TechBack.module.scss'

import TechCard from '@/components/GlobalUI/Section/TechCard'
import TechField from '@/sections/TechContent/TechField/TechField'
import TechTitle from '@/sections/TechContent/TechField/TechTitle'

import { TechWrapper } from '@/styles/styled-component/techWrapperStyled'
import Heading from '@/components/WinUI/Typography/Heading'

const TechBack = () => {
  return (
    <div className={TechBackStyle['www-backend']}>
      <div className={TechBackStyle['www-backend-wrapper']}>
        <div className={TechBackStyle['www-backend-cell']}>
          <TechField size='two'>
            <TechTitle textAlign='center'>
              <Heading level={6}>BE</Heading>
            </TechTitle>
            {backStack ? (
              backStack?.map(({ title, Image, color }) => (
                <TechCard
                  key={uuid_v4()}
                  title={title}
                  Image={Image}
                  color={color}
                  mbSmall='mbSmall'
                />
              ))
            ) : (
              <div>Loading...</div>
            )}
          </TechField>
        </div>

        <div className={TechBackStyle['www-backend-cell']}>
          <TechField size='two'>
            <TechTitle textAlign='center'>
              <Heading level={6}>DB</Heading>
            </TechTitle>
            {database ? (
              database?.map(({ title, Image, color }) => (
                <TechCard
                  key={uuid_v4()}
                  title={title}
                  Image={Image}
                  color={color}
                  mbSmall='mbSmall'
                />
              ))
            ) : (
              <div>Loading...</div>
            )}
          </TechField>
          <TechField size='two'>
            <TechTitle textAlign='center'>
              <Heading level={6}>Cloud</Heading>
            </TechTitle>
            {clouddb ? (
              clouddb?.map(({ title, Image, color }) => (
                <TechCard
                  key={uuid_v4()}
                  title={title}
                  Image={Image}
                  color={color}
                  mbSmall='mbSmall'
                />
              ))
            ) : (
              <div>Loading...</div>
            )}
          </TechField>
        </div>
      </div>
    </div>
  )
}

export default TechBack
