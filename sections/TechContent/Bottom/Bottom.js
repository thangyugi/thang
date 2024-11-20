import React from 'react'
import { v4 as uuid_v4 } from 'uuid'
import { frontOthers } from 'data/frontdata'
import { vcdeploy } from 'data/otherdata'
import BottomStyle from './Bottom.module.scss'

import TechCard from '@/components/GlobalUI/Section/TechCard'
import Heading from '@/components/WinUI/Typography/Heading'

import TechField from '@/sections/TechContent/TechField/TechField'
import TechTitle from '@/sections/TechContent/TechField/TechTitle'

const Bottom = () => {
  return (
    <div className={BottomStyle['www-bottom-tech']}>
      <TechField columns={6} heading='Art exhibitions' data={vcdeploy} />
      <TechField columns={5} heading='Other platforms' data={frontOthers} />
    </div>
  )
}

export default Bottom
