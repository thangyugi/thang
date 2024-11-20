import React from 'react'
import Hero from '../sections/Hero'
import Explore from '../sections/Explore/Explore'
import Tech from '../sections/TechContent/Tech'
import Intro from '@/sections/Intro/Intro'
import TopBlog from '@/components/GlobalUI/Section/TopBlog.js'
import { getPosts } from '@/services'
export default function Home({ posts }) {
    return (
        <>
            <Hero />
            <Intro />
            <Tech />
            {/* <TopBlog posts={posts} /> */}
        </>
    )
}

export const getStaticProps = async () => {
    const posts = (await getPosts()) || []

    return {
        props: {
            posts,
        },
    }
}
