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

const ANIMATION_CONFIG = {
    initial: { opacity: 0, y: -180 },
    animate: { opacity: 1, y: 0 },
    transition: { ease: 'easeInOut', duration: 1, delay: 0.6 },
}

const MENU_STATES = {
    INITIAL: {
        initial: false,
        clicked: null,
        menuName: 'Menu',
    },
    OPENED: {
        initial: null,
        clicked: true,
        menuName: 'Close',
    },
}

const NAVIGATION_ITEMS = [
    { path: '/daily', label: 'Journal' },
    { path: '/personal-space', label: 'Space' },
    { path: '/my-project', label: 'Works' },
    { path: '/tech', label: 'Notes' },
]

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
            <motion.div {...ANIMATION_CONFIG} className="header">
                <div className="header-inner">
                    <div
                        className="logo"
                        onMouseEnter={() => onCursor('hovered')}
                        onMouseLeave={onCursor}
                    >
                        <Link href="/">
                            <Heading level={6}>
                                <Image src={ThangBrand} alt="Thang Brand" />
                            </Heading>
                        </Link>
                    </div>

                    <nav className="nav">
                        {NAVIGATION_ITEMS.map(({ path, label }) => (
                            <li
                                key={path}
                                onMouseEnter={() => onCursor('hovered')}
                                onMouseLeave={onCursor}
                            >
                                <Link href={path}>
                                    <Heading level={6}>{label}</Heading>
                                </Link>
                            </li>
                        ))}
                    </nav>

                    <div className="nav-menu" onClick={handleMenu}>
                        <button disabled={disabled}>
                            <Paragraph level="sm" textAlign="center">
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
