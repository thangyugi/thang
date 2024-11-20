import React from 'react'
import { v4 as uuid_v4 } from 'uuid'
import { design, worktools } from 'data/otherdata'
import Topstyle from './Top.module.scss'

import TechCard from '@/components/GlobalUI/Section/TechCard'
import Heading from '@/components/WinUI/Typography/Heading'

import TechField from '@/sections/TechContent/TechField/TechField'
import TechTitle from '@/sections/TechContent/TechField/TechTitle'

const Top = () => {
  return (
    <div className={Topstyle['www-top-tech']}>
      <TechField columns={6} heading='In search of beauty' data={worktools} />
      <TechField columns={2} heading='Realize ideas' data={design} />
    </div>
  )
}

export default Top
