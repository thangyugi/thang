import React from 'react'
import Heading from '@/components/WinUI/Typography/Heading'
import BreadLinkStyle from './BreadcumbLink.module.scss'

const BreadcumbLink = ({ heading }) => {
  return (
    <div className={BreadLinkStyle['www_breadcumblink']}>
      <Heading level={6}>{heading}</Heading>
    </div>
  )
}

export default BreadcumbLink
