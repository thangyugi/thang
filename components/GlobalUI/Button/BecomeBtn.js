import React from 'react'

const BecomeBtn = ({ btnTitle }) => {
  return (
    <div className='button_become'>
      <button className='button button--atlas'>
        <span>{btnTitle}</span>
        <div className='marquee' aria-hidden='true'>
          <div className='marquee__inner'>
            <span>{btnTitle}</span>
            <span>{btnTitle}</span>
            <span>{btnTitle}</span>
            <span>{btnTitle}</span>
          </div>
        </div>
      </button>
    </div>
  )
}

export default BecomeBtn
