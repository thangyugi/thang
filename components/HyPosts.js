import React from 'react'

import PostCard from '@/components/Jounal/PostCard'

const HyPosts = ({ posts }) => {
  return (
    <div className='jounal_list'>
      {posts.reverse().map((post) => (
        <PostCard post={post.node} key={post.node.title} />
      ))}
    </div>
  )
}

export default HyPosts
