import React, { useState, useEffect } from 'react'
import Link from 'next/link'
// import { motion } from 'framer-motion'

import Heading from '../WinUI/Typography/Heading'
import ThangBrand from '@/assets/imgs/backgroundContainer/Thang-mini.png'
import Image from 'next/image'

import { useRef } from 'react'
import { motion, useCycle } from 'framer-motion'
import Hamburger from '@/components/Layout/Navigation/Hamburger'
import Paragraph from '../WinUI/Typography/Paragraph'

const Header = ({ onCursor }) => {
  // State of our Menu
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: 'Menu',
  })
  // State of our button
  const [disabled, setDisabled] = useState(false)

  // //Use Effect
  // useEffect(() => {
  //   //Listening for page changes.
  //   history.listen(() => {
  //     setState({ clicked: false, menuName: 'Menu' })
  //   })
  // }, [history])

  // Toggle menu
  const handleMenu = () => {
    disableMenu()
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: 'Close',
      })
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: 'Menu',
      })
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: 'Close',
      })
    }
  }

  // Determine if out menu button should be disabled
  const disableMenu = () => {
    setDisabled(!disabled)
    setTimeout(() => {
      setDisabled(false)
    }, 1000)
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -180 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: 'easeInOut',
          duration: 1,
          delay: 0.6,
        }}
        className='header'
      >
        <div className='header-inner'>
          <div
            className='logo'
            onMouseEnter={() => onCursor('hovered')}
            onMouseLeave={onCursor}
          >
            <Link href='/'>
              <Heading level={6}>
                <Image src={ThangBrand} alt='Thang Brand' />
              </Heading>
            </Link>
          </div>

          <ul className='nav'>
            <li
              onMouseEnter={() => onCursor('hovered')}
              onMouseLeave={onCursor}
            >
              <Link href='/daily'>
                <Heading level={6}>Daily Journal</Heading>
              </Link>
            </li>

            <li
              onMouseEnter={() => onCursor('hovered')}
              onMouseLeave={onCursor}
            >
              <Link href='/personal-space'>
                <Heading level={6}>Personal W Space</Heading>
              </Link>
            </li>

            <li
              onMouseEnter={() => onCursor('hovered')}
              onMouseLeave={onCursor}
            >
              <Link href='/tech'>
                <Heading level={6}>Tech Notes</Heading>
              </Link>
            </li>
          </ul>

          <div className='nav-menu' onClick={handleMenu}>
            <button disabled={disabled}>
              <Paragraph level='sm' textAlign='center'>
                {state.menuName}
              </Paragraph>
            </button>
          </div>
        </div>
      </motion.div>
      <Hamburger state={state} handleMenu={handleMenu} />
    </>
  )
}

export default Header

// ![Alt Text](/blog/mdx-three/mdx-3d.jpg)
