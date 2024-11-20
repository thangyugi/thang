import React, { useRef, useEffect } from 'react'
import HamburgerStyles from './Hamburger.module.scss'
import { gsap } from 'gsap'
import ThangBrand from '@/assets/imgs/backgroundContainer/Thang-mini.png'
import Image from 'next/image'

import {
  staggerText,
  staggerReveal,
  fadeInUp,
  handleHover,
  handleHoverExit,
  staggerRevealClose,
} from './Animations'

import Link from 'next/link'
import Paragraph from '@/components/WinUI/Typography/Paragraph'
import Heading from '@/components/WinUI/Typography/Heading'

const Hamburger = ({ state, handleMenu }) => {
  // Create varibles of our dom nodes
  let menuLayer = useRef(null)
  let reveal1 = useRef(null)
  let reveal2 = useRef(null)

  let line1 = useRef(null)
  let line2 = useRef(null)
  let line3 = useRef(null)
  let info = useRef(null)

  useEffect(() => {
    // If the menu is open and we click the menu button to close it.
    if (state.clicked === false) {
      // If menu is closed and we want to open it.

      staggerRevealClose(reveal2, reveal1)
      // Set menu to display none
      gsap.to(menuLayer, { duration: 0.5, css: { display: 'none' } })
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      // Set menu to display block
      gsap.to(menuLayer, { duration: 0, css: { display: 'block' } })
      //Allow menu to have height of 100%
      gsap.to([reveal1, reveal2], {
        duration: 0,
        opacity: 1,
        height: '100%',
      })
      staggerReveal(reveal1, reveal2)
      fadeInUp(info)
      staggerText(line1, line2, line3)
    }
  }, [state])

  return (
    <div
      ref={(el) => (menuLayer = el)}
      className={HamburgerStyles['hamburger-menu']}
    >
      <div
        ref={(el) => (reveal1 = el)}
        className={HamburgerStyles['menu-secondary-background-color']}
      ></div>
      <div
        ref={(el) => (reveal2 = el)}
        className={HamburgerStyles['menu-layer']}
      >
        <div className={HamburgerStyles['container']}>
          <div className={HamburgerStyles['wrapper']}>
            <div
              className={`${HamburgerStyles['menu-links']}
            `}
            >
              {/* Big links */}
              <div
                className={`${HamburgerStyles['mainLinks']} ${HamburgerStyles['menu__item--1']}`}
              >
                <ul>
                  <li>
                    <Link
                      onMouseEnter={(e) => handleHover(e)}
                      onMouseOut={(e) => handleHoverExit(e)}
                      ref={(el) => (line1 = el)}
                      href='/personal-space'
                      onClick={handleMenu}
                    >
                      <Heading level={3}>Personal Space</Heading>
                    </Link>
                  </li>
                  <li>
                    <Link
                      onMouseEnter={(e) => handleHover(e)}
                      onMouseOut={(e) => handleHoverExit(e)}
                      ref={(el) => (line2 = el)}
                      href='/daily'
                      onClick={handleMenu}
                    >
                      <Heading level={3}>Daily Journal</Heading>
                    </Link>
                  </li>
                  <li>
                    <Link
                      onMouseEnter={(e) => handleHover(e)}
                      onMouseOut={(e) => handleHoverExit(e)}
                      ref={(el) => (line3 = el)}
                      href='/tech'
                      onClick={handleMenu}
                    >
                      <Heading level={3}>Tech Notes</Heading>
                    </Link>
                  </li>
                </ul>
              </div>
              {/* Logo */}
              <Link
                onClick={handleMenu}
                href='/'
                className={`${HamburgerStyles['logoCell']} ${HamburgerStyles['menu__item--3']}`}
              >
                <Image src={ThangBrand} alt='Thang Brand' />
                <Paragraph level='sm' textAlign='center'>
                  A grateful heart is a magnet for miracles
                </Paragraph>
                <div className={HamburgerStyles['backBtn']}>
                  <Heading level={6}>back to Top</Heading>
                </div>
              </Link>
              {/* Map */}
              <div
                className={`${HamburgerStyles['mapCell']} ${HamburgerStyles['menu__item--2']}`}
              ></div>
              {/* Resume */}
              <Link
                onClick={handleMenu}
                href='/resume'
                className={`${HamburgerStyles['resumeCell']} ${HamburgerStyles['menu__item--4']}`}
              >
                <div className={HamburgerStyles['resumeWrapper']}>
                  <Heading level={5} textAlign='center'>
                    Checkout my résume
                  </Heading>
                </div>
              </Link>
              {/* Quotes */}
              <div
                ref={(el) => (info = el)}
                className={`${HamburgerStyles['info']} ${HamburgerStyles['menu__item--5']}`}
              >
                <Paragraph level='sm' textAlign='center'>
                  NOTHING IS MORE IMPORTANT TO ME THAN PEACE OF MIND OF MY LOVED
                  ONES AND THE BEING IN THE BEST MENTAL AND PHYSICAL SHAPE
                  POSSIBLE.
                </Paragraph>
                <Paragraph level='sm' textAlign='center'>
                  私にとって、何よりも大切なことは、私の愛する人たちの安心と、可能な限り最高の精神的・肉体的状態であることです。
                </Paragraph>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hamburger
