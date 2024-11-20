import React from 'react'

import Container from '@/components/Layout/Container/Container'
import BlogCard from '@/components/BlogCard'
import PageHeader from '@/components/WinUI/PageHeader/PageHeader.js'

import { getAllArticles } from '@/utils/mdx'

import Image3 from '@/assets/imgs/marquee/image1.png'

const Blog = ({ posts }) => {
    return (
        <>
            <Container>
                <PageHeader
                    title="Tech Notes"
                    subtitle="A space to store knowledge
                    related to programming and technology."
                />
            </Container>

            <div className="www_devblog">
                <Container>
                    <div className="www_devblog-list">
                        {posts.map((frontmatter) => (
                            <BlogCard
                                key={frontmatter.slug}
                                data={frontmatter}
                            />
                        ))}
                    </div>
                </Container>
            </div>
        </>
    )
}
export default Blog

export async function getStaticProps() {
    let articles = await getAllArticles()

    const sortedArticles = articles.map((article) => article)

    sortedArticles.sort((a, b) => {
        return new Date(b.publishedAt) - new Date(a.publishedAt)
    })

    return {
        props: {
            posts: sortedArticles,
        },
    }
}
