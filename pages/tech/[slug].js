import dayjs from 'dayjs'
import React from 'react'
import Head from 'next/head'
import Image from 'next/image'

import rehypeSlug from 'rehype-slug'
import rehypeHighlight from 'rehype-highlight'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

import { getSlug, getArticleFromSlug } from '@/utils/mdx'
import 'highlight.js/styles/atom-one-dark-reasonable.css'
import Container from '@/components/Layout/Container/Container'
import Heading from '@/components/WinUI/Typography/Heading'
import BreadcumbLink from '@/components/WinUI/Breadcumb/BreadcumbLink'
import Paragraph from '@/components/WinUI/Typography/Paragraph'
import DevBlogStyles from './DevBlog.module.scss'
import Link from 'next/link'

export default function BlogPost({ post: { source, frontmatter } }) {
  return (
    <React.Fragment>
      <Head>
        <title>{frontmatter.title} | My blog</title>
      </Head>

      <div className={DevBlogStyles['www_devblog']}>
        <div className={DevBlogStyles['www_devblog-wrapper']}>
          <Container>
            <div className={DevBlogStyles['www_devblog-header']}>
              <nav className='py-3 mx-auto'>
                <ol className='list-reset flex'>
                  <li>
                    <Link href={`/`}>
                      <BreadcumbLink heading='Home' />
                    </Link>
                  </li>
                  <li>
                    <span className='text-gray-500 mx-2'>/</span>
                  </li>
                  <li>
                    <Link href={`/tech`}>
                      <BreadcumbLink heading='Tech' />
                    </Link>
                  </li>
                  <li>
                    <span className='text-gray-500 mx-2'>/</span>
                  </li>

                  {/* <li className='text-gray-500'>
            <Heading level='6'>{`${post.slug}`}</Heading>
          </li> */}
                </ol>
              </nav>
              <Heading level={3} textAlign='center'>
                {frontmatter.title}
              </Heading>

              <Paragraph level='sm' textAlign='center' color='gray'>
                {dayjs(frontmatter.publishedAt).format('MMMM D, YYYY')} &mdash;{' '}
                {frontmatter.readingTime}
              </Paragraph>
            </div>
          </Container>
        </div>

        <Container>
          <div className={DevBlogStyles['www_devblog-main']}>
            <div className={DevBlogStyles['www_devblog-featureWrapper']}>
              <img
                src={frontmatter.cover_image}
                className={DevBlogStyles['www_devblog-featureImage']}
              />
            </div>
            <div className={DevBlogStyles['www_devblog-content']}>
              <MDXRemote {...source} components={{ Image }} />
            </div>
          </div>
        </Container>
      </div>
    </React.Fragment>
  )
}

export async function getStaticProps({ params }) {
  //fetch the particular file based on the slug
  const { slug } = params
  const { content, frontmatter } = await getArticleFromSlug(slug)

  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            properties: { className: ['anchor'] },
          },
          { behaviour: 'wrap' },
        ],
        rehypeHighlight,
        rehypeCodeTitles,
      ],
    },
  })

  return {
    props: {
      post: {
        source: mdxSource,
        frontmatter,
      },
    },
  }
}

// dynamically generate the slugs for each article(s)
export async function getStaticPaths() {
  // getting all paths of each article as an array of
  // objects with their unique slugs
  const paths = (await getSlug()).map((slug) => ({ params: { slug } }))

  return {
    paths,
    // in situations where you try to access a path
    // that does not exist. it'll return a 404 page
    fallback: false,
  }
}
