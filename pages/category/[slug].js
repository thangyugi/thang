import Categories from '@/components/Jounal/Categories'
import PostCard from '@/components/Jounal/PostCard'
import { getCategoryPosts } from '@/../services'

import Flex from '@/../styles/styled-component/containerStyled'
import Container from '@/components/Layout/Container/Container'
import React from 'react'

const CategoryPage = ({ posts }) => {
  return (
    <Container>
      <Flex flexStart>
        <div className='post-list'>
          {posts.map((post) => (
            <PostCard post={post.node} key={post.node.title} />
          ))}
        </div>
        <div className='post-relative'>
          <Categories />
        </div>
      </Flex>
    </Container>
  )
}

export default CategoryPage

export const getServerSideProps = async ({ params }) => {
  const posts = (await getCategoryPosts(params.slug)) || []

  return {
    props: {
      posts,
    },
  }
}
