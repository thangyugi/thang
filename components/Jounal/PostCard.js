import React from 'react'

import moment from 'moment/moment'
import Link from 'next/link'

import { SubtitleHeading } from '../../styles/styled-component/typhography'
import Heading from '../WinUI/Typography/Heading'
import Paragraph from '../WinUI/Typography/Paragraph'

const PostCard = ({ post }) => {
  return (
    <div className='post-card'>
      <Link href={`/daily/${post.slug}`} legacyBehavior={true}>
        <div className='post-card_wrapper'>
          <div className='baseline-vert-left'> </div>
          <div className='baseline'> </div>
          <div className='post-card_info'>
            <SubtitleHeading>
              {moment(post.createdAt).format('MMM DD, YYYY')}
            </SubtitleHeading>
          </div>
          <Link href={`/daily/${post.slug}`} legacyBehavior={true}>
            <Heading level={5}>{post.title} </Heading>
          </Link>

          <div className='post-card_content'>
            <div className='excerpt'>
              <Paragraph level='sm'>{post.excerpt}</Paragraph>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default PostCard
