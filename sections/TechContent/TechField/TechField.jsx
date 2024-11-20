import React from 'react'

import classNames from 'classnames'
import { v4 as uuid_v4 } from 'uuid'

import TechFieldStyle from './TechField.module.scss'
import TechTitle from './TechTitle'
import Heading from '@/components/WinUI/Typography/Heading'
import TechCard from '@/components/GlobalUI/Section/TechCard'

const TechField = ({ heading, data = [], columns }) => {
  const columnClass = classNames(TechFieldStyle[`column-${columns}`])

  return (
    <div className={TechFieldStyle['www-techField']}>
      <TechTitle textAlign='center'>
        <Heading level={6}>{heading}</Heading>
      </TechTitle>
      <div className={`${TechFieldStyle['techField-wrapper']} ${columnClass}`}>
        {data ? (
          data?.map(({ title, Image, color }) => (
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
      </div>
    </div>
  )
}

export default TechField
