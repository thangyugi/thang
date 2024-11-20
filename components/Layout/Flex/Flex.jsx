import React from 'react'
import classNames from 'classnames'
import ContainerStyle from './Container.module.scss'

const Container = ({ children, fluid }) => {
  const classes = classNames({
    [ContainerStyle['www-container']]: true,
    [ContainerStyle['fluid']]: fluid,
  })

  return <div className={classes}>{children}</div>
}

export default Container
