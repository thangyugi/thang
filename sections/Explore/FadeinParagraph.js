import React, { useEffect } from 'react'

import { useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExploreParagraph } from 'styles/styled-component/exploreStyled'

export default function FadeinParagraph({ children }) {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-300px',
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <ExploreParagraph
      ref={ref}
      animate={controls}
      initial='hidden'
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] },
        },
        hidden: { opacity: 0, y: 30 },
      }}
    >
      {children}
    </ExploreParagraph>
  )
}
