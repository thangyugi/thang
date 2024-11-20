import Container from '@/components/Layout/Container/Container'
import Heading from '@/components/WinUI/Typography/Heading'
import Paragraph from '@/components/WinUI/Typography/Paragraph'
import IntroButton from '@/sections/Intro/IntroButton/IntroButton'
import IntroImage from '@/sections/Intro/Intromage/IntroImage'
import classNames from 'classnames'
import React from 'react'
import IntroStyle from './Intro.module.scss'

import NaturePic from '@/assets/imgs/intro_image/nature.jpg'
import MusicPic from '@/assets/imgs/intro_image/music.png'
import ArchitecturePic from '@/assets/imgs/intro_image/architecture.jpeg'
import SportsMusic from '@/assets/imgs/intro_image/sports.jpg'

import ShibaPic from '@/assets/imgs/intro_image/shiba.jpg'
import RomanticPic from '@/assets/imgs/intro_image/romantic.jpeg'
import SpacePic from '@/assets/imgs/intro_image/space.jpeg'

function splitText(text) {
  return text.split(' ').map((word, index) => (
    <Paragraph key={index} level='extra' textAlign='left'>
      {word}&nbsp;
    </Paragraph>
  ))
}

function splitHeading(text) {
  return text.split(' ').map((word, index) => (
    <Heading key={index} level={2}>
      {word}&nbsp;
    </Heading>
  ))
}

const headingText1 = 'hello/'

const paragraph1 = 'This website'
const paragraph2 = 'is more than a simple blog.'
const paragraph3 = "It's a space"
const paragraph4 = 'to get to know me better.'
const paragraph5 = 'A person who loves nature'
const paragraph6 = 'music'
const paragraph7 = 'architecture'
const paragraph8 = 'sports'
const paragraph9 = 'and romantic dramas'

const Intro = () => {
  return (
    <section className={classNames(IntroStyle['www-intro'])}>
      <Container>
        <div className={classNames(IntroStyle['cover'])}>
          <div className={IntroStyle.wrapper}>
            <div className={IntroStyle.opening}>
              {splitHeading(headingText1)}
            </div>
            <div className={IntroStyle.content}>
              {splitText(paragraph1)}
              <IntroImage src={ShibaPic.src} alt='Đây là intro image alt' />
              {splitText(paragraph2)}

              {splitText(paragraph3)}
              <IntroImage src={SpacePic.src} alt='Đây là intro image alt' />
              {splitText(paragraph4)}

              {splitText(paragraph5)}
              <IntroImage src={NaturePic.src} alt='Đây là intro image alt' />
              {splitText(paragraph6)}
              <IntroImage src={MusicPic.src} alt='Đây là intro image alt' />
              {splitText(paragraph7)}
              <IntroImage
                src={ArchitecturePic.src}
                alt='Đây là intro image alt'
              />
              {splitText(paragraph8)}
              <IntroImage src={SportsMusic.src} alt='Đây là intro image alt' />
              {splitText(paragraph9)}
              <IntroImage src={RomanticPic.src} alt='Đây là intro image alt' />
            </div>
          </div>

          <div className={IntroStyle.conclude}>
            <div className={IntroStyle.quotes}>
              <Heading level={4}>
                NOTHING IS MORE IMPORTANT TO ME THAN PEACE OF MIND OF MY LOVED
                ONES AND THE BEING IN THE BEST MENTAL AND PHYSICAL SHAPE
                POSSIBLE.
              </Heading>

              <IntroButton />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Intro
