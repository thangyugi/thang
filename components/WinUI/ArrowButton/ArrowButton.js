import React from 'react'
import ArrowButtonStyle from './ArrowButton.module.scss'

const ArrowButton = () => {
  return (
    <div className={ArrowButtonStyle['www-arrowBtn']}>
      <button className={ArrowButtonStyle[`www-button button--telesto`]}>
        <span>
          <span>Verify</span>
        </span>
      </button>
    </div>
  )
}

export default ArrowButton
