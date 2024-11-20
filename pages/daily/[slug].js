import React from 'react'
import Link from 'next/link'
import DailyDetailStyle from './DailyDetail.module.scss'

import Container from '@/components/Layout/Container/Container'
import BreadcumbLink from '@/components/WinUI/Breadcumb/BreadcumbLink'

import PostDetail from '@/components/Jounal/PostDetail'
import { getPostDetails } from '../../services'
import CommentForm from '@/components/Jounal/CommentForm'
import Comments from '@/components/Jounal/Comments'

import PostWidget from '@/components/Jounal/PostWidget'

import { RingLoader } from 'react-spinners'

const PostDetails = ({ post }) => {
  return (
    <Container>
      {/* <PostWidget
            slug={post.slug}
            categories={post.categories.map((category) => category.slug)}
          /> */}

      {post ? (
        <>
          <nav className='py-3 rounded-md w-full'>
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
                <Link href={`/daily`}>
                  <BreadcumbLink heading='Daily' />
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

          <div className={DailyDetailStyle['www_daily-detail-wrapper']}>
            <div className={DailyDetailStyle['www_daily-detail-main']}>
              <PostDetail post={post} />
              <CommentForm slug={post.slug} />
              <Comments slug={post.slug} />
            </div>
          </div>
        </>
      ) : (
        <RingLoader color='#36d7b7' />
      )}
    </Container>
  )
}

export default PostDetails

export const getServerSideProps = async ({ params }) => {
  const data = await getPostDetails(params.slug)

  return {
    props: {
      post: data,
    },
  }
}
