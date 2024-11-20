import React, { useState, useEffect } from 'react'

import Link from 'next/link'
import moment from 'moment'

import Image from 'next/legacy/image'

import { getSimilarPosts, getRecentPosts } from '../../services'

import {
  SubtitleHeading,
  TitleHeading,
} from '../../styles/styled-component/typhography'

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([])
  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => {
        setRelatedPosts(result)
      })
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result))
    }
  }, [slug, categories])

  return (
    <div>
      <TitleHeading black={true}>
        {slug ? 'Related Posts' : 'Recent Posts'}
      </TitleHeading>

      {relatedPosts.map((post) => (
        <div key={post.title}>
          <div>
            <Image
              src={post.featuredImage.url}
              alt={post.title}
              height={60}
              width={60}
            />
            <SubtitleHeading>
              {moment(post.createdAt).format('MMM DD YYYY')}
            </SubtitleHeading>
            <Link href={`/daily/${post.slug}`}>{post.title}</Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostWidget
