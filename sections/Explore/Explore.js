import React, { useEffect, useRef } from 'react'
import ExploreStyles from './Explore.module.scss'

import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import Container from '@/components/Layout/Container/Container'
import Heading from '@/components/WinUI/Typography/Heading'
import Paragraph from '@/components/WinUI/Typography/Paragraph'

import SpaceMotionWeb from '@/components/Animations/SpaceMotion/SpaceMotionWeb'

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
}

const Box = ({ children }) => {
  const control = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      control.start('visible')
    } else {
      control.start('hidden')
    }
  }, [control, inView])

  return (
    <motion.div
      className='box'
      ref={ref}
      variants={boxVariant}
      initial='hidden'
      animate={control}
    >
      {children}
    </motion.div>
  )
}

const Explore = () => {
  const animation = useAnimation()
  const [contentRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-300px',
  })

  useEffect(() => {
    if (inView) {
      animation.start('visible')
    }
  }, [animation, inView])

  const value = 100

  return (
    <div className={ExploreStyles['www_explore']}>
      <Container>
        <Heading level={2} textAlign='center'>
          Hello, Hello
        </Heading>

        <div className={ExploreStyles['www_explore-main']}>
          <Box>
            <SpaceMotionWeb />
          </Box>

          <Heading level={4} textAlign='left'>
            My name is Thang !
            <br /> A person who likes to do <br /> new things, loves romance and
            beauty !
          </Heading>

          <Paragraph level='md' textAlign='left'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Paragraph>

          <Box num={2} />
          <Box num={3} />
        </div>
      </Container>
    </div>
  )
}

export default Explore
