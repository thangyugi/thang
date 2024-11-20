import React from 'react'

import IntroImageStyle from './Intromage.module.scss'

const IntroImage = ({ src, alt }) => {
  return (
    <div className={IntroImageStyle['www_intro-image']}>
      <img className={IntroImageStyle['imageContent']} src={src} alt={alt} />
    </div>
  )
}

export default IntroImage
