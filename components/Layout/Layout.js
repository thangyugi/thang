import React from 'react'
import Head from 'next/head'

// Component
import Header from './Header'
import Footer from './Footer'
import CustomCursor from '../GlobalUI/Cursor/CustomCursor'

// Context
import {
    useGlobalDispatchContext,
    useGlobalStateContext,
} from '@/context/global-context'

const Layout = ({ children }) => {
    const dispatch = useGlobalDispatchContext()
    const { cursorStyles } = useGlobalStateContext()
    const onCursor = (cursorType) => {
        cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
        dispatch({ type: 'CURSOR_TYPE', cursorType: cursorType })
    }
    return (
        <div className="layout">
            <Head>
                <title>Nextland</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <CustomCursor />
            <Header onCursor={onCursor} />
            <main>{children}</main>
            <Footer onCursor={onCursor} />
        </div>
    )
}

export default Layout
