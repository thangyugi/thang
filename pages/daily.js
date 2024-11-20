import React from 'react'
import Container from '@/components/Layout/Container/Container'
import HyPosts from '@/components/HyPosts.js'
import { getPosts } from '../services'
import * as animationData from '../assets/animation/asnew.json'
import Categories from '@/components/Jounal/Categories'
import BecomeBtn from '@/components/GlobalUI/Button/BecomeBtn'
import PageHeader from '@/components/WinUI/PageHeader/PageHeader'
import Heading from '@/components/WinUI/Typography/Heading'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

const DailyJournal = ({ posts }) => {
  return (
    <div className='jounal'>
      <Container>
        <PageHeader
          title='Daily Journal'
          subtitle='A space I am using to take notes, or write articles related to daily life and personal development.'
        />
        <div className='www_daily-journal'>
          {/* <Heading level='5'>Những chuyến đi mới nhất</Heading>
          <Categories /> */}

          <div className='www_daily-journal-wrapper'>
            <div className='www_daily-journal-sub'>
              <BecomeBtn btnTitle='BECOME LEGEND' />
              {/* <PostWidget /> */}
            </div>
            <div className='www_daily-journal-main'>
              <HyPosts posts={posts} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default DailyJournal

export const getStaticProps = async () => {
  const posts = (await getPosts()) || []

  return {
    props: {
      posts,
    },
  }
}
