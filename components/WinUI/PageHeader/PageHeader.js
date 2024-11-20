import React from 'react'
import Divider from '../Divider/Divider'
import Heading from '../Typography/Heading'
import PageHeaderStyle from './PageHeader.module.scss'

const PageHeader = ({ title, subtitle }) => {
  return (
    <div className={PageHeaderStyle['www_page-header']}>
      <Divider />
      <Heading level={1}>{title}</Heading>
      <div className={PageHeaderStyle['www_page-header_sub']}>
        <Heading level={6}>{subtitle}</Heading>
      </div>
      <Divider />
    </div>
  )
}

export default PageHeader
