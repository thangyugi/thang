import React from 'react'
import classNames from 'classnames'
import TechTitleStyle from './TechTitle.module.scss'

const TechTitle = ({ children, textAlign }) => {
  const classes = classNames({
    [TechTitleStyle['www-techTitle']]: true,
    [TechTitleStyle[`${textAlign}`]]: textAlign,
  })

  return <div className={classes}>{children}</div>
}

export default TechTitle
