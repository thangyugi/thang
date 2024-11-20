import React from 'react'
import InfiniteWrapperStyle from './InfiniteWrapper.module.scss'

const InfiniteWrapper = ({ children }) => {
  return (
    <div className={InfiniteWrapperStyle['.www_infinite-wrapper']}>
      {children}
    </div>
  )
}

export default InfiniteWrapper
