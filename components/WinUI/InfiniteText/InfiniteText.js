import React from 'react'

import Heading from '../Typography/Heading'

import classNames from 'classnames'
import InfiniteTextStyle from './InfiniteText.module.scss'

const InfiniteText = ({
  number,
  heading,
  image,
  textAlign,
  borderPosition,
}) => {
  const classes = classNames({
    [InfiniteTextStyle['www_infinitetext']]: true,
    [InfiniteTextStyle[`${textAlign}`]]: textAlign,
    [InfiniteTextStyle[`${borderPosition}`]]: borderPosition,
  })

  return (
    <div className={classes}>
      <a className={InfiniteTextStyle['www_infinitetext-link']}>
        <Heading level={3}>{number}</Heading>
        <Heading level={2}>{heading}</Heading>
      </a>

      <img
        className={InfiniteTextStyle['www_infinitetext-img']}
        src={image}
        alt='Some image'
      />

      <div className={InfiniteTextStyle['www_infinitetext-group']}>
        <div
          className={InfiniteTextStyle['www_infinitetext-group__inner']}
          aria-hidden='true'
        >
          <span>
            <Heading level={2}>{heading}</Heading>
          </span>
          <span>
            <Heading level={2}>{heading}</Heading>
          </span>
          <span>
            <Heading level={2}>{heading}</Heading>
          </span>
          <span>
            <Heading level={2}>{heading}</Heading>
          </span>
          <span>
            <Heading level={2}>{heading}</Heading>
          </span>
          <span>
            <Heading level={2}>{heading}</Heading>
          </span>
        </div>
      </div>
    </div>
  )
}

export default InfiniteText
