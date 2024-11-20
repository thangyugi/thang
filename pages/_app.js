import { Analytics } from '@vercel/analytics/react'

import { useState, useEffect } from 'react'
import Head from 'next/head'
import Router from 'next/router'
import '../sass/main.scss'
import '../sass/base.css'
import { GlobalProvider } from '../context/global-context'
import useScrollRestoration from '@/hooks/useScrollRestoration'
import Loader from '@/components/Loader/Loader.js'
import { motion, useScroll, useSpring } from 'framer-motion'

import Layout from '../components/Layout/Layout'

function MyApp({ Component, pageProps, router }) {
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        Router.events.on('routeChangeStart', (url) => {
            // debugger
            setIsLoading(true)
        })

        Router.events.on('routeChangeComplete', (url) => {
            setIsLoading(false)
        })

        Router.events.on('routeChangeError', (url) => {
            setIsLoading(false)
        })
    }, [Router])

    useScrollRestoration(router)

    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    })

    return (
        <GlobalProvider>
            <motion.div className="progress-bar" style={{ scaleX }} />
            <Layout>
                <Head>
                    <link rel="shortcut icon" href="/ThangIcon.png" />
                </Head>

                {isLoading && <Loader />}
                <Component {...pageProps} />

                <Analytics />
            </Layout>
        </GlobalProvider>
    )
}

export default MyApp
