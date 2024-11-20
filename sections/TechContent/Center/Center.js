import React from 'react'
import CenterStyle from './Center.module.scss'

import { frontStack, uilibsStack } from 'data/frontdata'
import { backStack, clouddb, database } from 'data/backdata'

import TechField from '@/sections/TechContent/TechField/TechField'
import TechMiddle from '@/sections/TechContent/Center/TechMiddle/TechMiddle'

const Center = () => {
  return (
    <div className={CenterStyle['www-center-tech']}>
      <div className={CenterStyle['www-frontend']}>
        <div className={CenterStyle['wrapper']}>
          <div className={CenterStyle['cell']}>
            <TechField columns={4} heading='I draw with' data={frontStack} />
          </div>
          <div className={CenterStyle['cell']}>
            <TechField columns={4} heading='Color' data={uilibsStack} />
          </div>
        </div>
      </div>
      <TechMiddle />
      <div className={CenterStyle['www-backend']}>
        <div className={CenterStyle['wrapper']}>
          <div className={CenterStyle['cell']}>
            <TechField columns={2} heading='BE' data={backStack} />
          </div>

          <div className={CenterStyle['cell']}>
            <TechField columns={2} heading='DB' data={database} />
            <TechField columns={2} heading='Cloud' data={clouddb} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Center
