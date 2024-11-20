import React from 'react'

import Container from '@/components/Layout/Container/Container'
import HyPosts from '@/components/HyPosts.js'
import { TitleHeading } from '@/styles/styled-component/typhography'
import Categories from '@/components/Jounal/Categories'
import BecomeBtn from '../Button/BecomeBtn'

const TopBlog = ({ posts }) => {
  return (
    <>
      <Container>
        <div className='topblog-body'>
          <TitleHeading>Những chuyến đi mới nhất</TitleHeading>

          <div className='topblog-body_content'>
            <div className='topblog_relative'>
              <div className='baseline'> </div>
              <BecomeBtn btnTitle='BECOME LEGEND' />
            </div>
            <div className='topblog_list'>
              <HyPosts posts={posts} />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default TopBlog
