import React from 'react'
import personalStyles from '@/styles/pagesModule/personalSpace.module.scss'

import Container from '@/components/Layout/Container/Container'
import PageHeader from '@/components/WinUI/PageHeader/PageHeader'
import Heading from '@/components/WinUI/Typography/Heading'
import Paragraph from '@/components/WinUI/Typography/Paragraph'

import Image from 'next/image'
import PersonalImage from '@/assets/imgs/backgroundContainer/Thangwww.jpg'

import ResumeIcon from '@/assets/icons/sns/ethereum.svg'
import FacebookIcon from '@/assets/icons/sns/facebook.svg'
import GithubIcon from '@/assets/icons/sns/github.svg'
import InstagramIcon from '@/assets/icons/sns/instagram.svg'
import LinkedInIcon from '@/assets/icons/sns/linkedin.svg'
import TwitterIcon from '@/assets/icons/sns/twitter.svg'
import ArrowIcon from '@/assets/icons/sns/arrow_right_up.svg'
import Link from 'next/link'

const PersonalSpace = () => {
  return (
    <>
      <Container>
        <PageHeader
          title='Personal Space'
          subtitle='A space to describe myself.'
        />
      </Container>
      <Container>
        <div className={personalStyles['www-personal-space']}>
          <div className={personalStyles['personal-cover']}>
            <div className={personalStyles['personal-wrapper']}>
              <div className={personalStyles['personal-number']}>
                <div className={personalStyles['personal-numberGroup']}>
                  <Heading level={4}>01</Heading>
                  <div className={personalStyles['personal-divider']}></div>
                  <div className={personalStyles['personal-vertical']}>
                    <Heading level={6}>INTRODUCE</Heading>
                  </div>
                </div>
              </div>
              <div className={personalStyles['personal-content']}>
                <div className={personalStyles['personal-top_photo']}>
                  <Image src={PersonalImage} alt='user profile picture' />
                </div>
                <div className={personalStyles['personal-top_words']}>
                  <Paragraph level='extraSmall'>
                    MADE IN VIETNAM — ICT 199X
                  </Paragraph>
                  <div className={personalStyles['big_words']}>
                    <Heading level={3} textAlign='left'>
                      HA XUAN THANG
                    </Heading>
                  </div>
                  <div className={personalStyles['medium_words']}>
                    <Heading level={5}>
                      I’m a creative developer ( maybe ) currently based in
                      Japan. I am drawn to beauty, uniqueness, and creativity.
                    </Heading>
                  </div>
                  <div className={personalStyles['small_words']}>
                    <Paragraph level='md'>
                      I was born and raised in a southern province of Vietnam
                      called Can Tho, where there are many dreamy rivers, fresh
                      and delicious fruits, and the people here are always
                      friendly and kind-hearted.
                    </Paragraph>

                    <Paragraph level='md'>
                      Partly because I love some aspects of Japanese culture and
                      partly because I wanted to challenge myself, after
                      graduating from university, I went to Japan alone to study
                      and work.
                    </Paragraph>
                    <Paragraph level='md'>
                      I can design and built web experiences for a variety of
                      clients and focus on accessibility, interactivity, and
                      innovation.
                    </Paragraph>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={personalStyles['personal-cover']}>
            <div className={personalStyles['personal-wrapper']}>
              <div className={personalStyles['personal-number']}>
                <div className={personalStyles['personal-numberGroup']}>
                  <Heading level={4}>02</Heading>
                  <div className={personalStyles['personal-divider']}></div>
                  <div className={personalStyles['personal-vertical']}>
                    <Heading level={6}>I CAN</Heading>
                  </div>
                </div>
              </div>
              <div className={personalStyles['personal-cando']}>
                <div className={personalStyles['cando-plate']}>
                  <Heading level={5}>Design</Heading>
                  <Paragraph level='md'>
                    I can design websites and apps, and I deliver strong and
                    user-friendly digital designs. &ldquo;Design adds value
                    faster than it adds costs.&rdquo;
                  </Paragraph>
                </div>
                <div className={personalStyles['cando-plate']}>
                  <Heading level={5}>Development</Heading>
                  <Paragraph level='md'>
                    I am writing front-end code using standard web platforms and
                    programming technologies. I build scalable websites from
                    scratch that fit seamlessly with design.
                  </Paragraph>
                </div>
                <div className={personalStyles['cando-plate']}>
                  <Heading level={5}>Full Options</Heading>
                  <Paragraph level='md'>
                    When I am not creating or exploring new web experiences, we
                    can chat about romantic movies, watch the English Premier
                    League on weekends, play football matches, share unique
                    architecture, or even play some action and strategy games
                    together.
                  </Paragraph>
                </div>
              </div>
            </div>
          </div>
          <div className={personalStyles['personal-cover']}>
            <div className={personalStyles['personal-wrapper']}>
              <div className={personalStyles['personal-number']}>
                <div className={personalStyles['personal-numberGroup']}>
                  <Heading level={4}>03</Heading>
                  <div className={personalStyles['personal-divider']}></div>
                  <div className={personalStyles['personal-vertical']}>
                    <Heading level={6}>CONTACT</Heading>
                  </div>
                </div>
              </div>
              <div className={personalStyles['personal-contact']}>
                <div className={personalStyles['contact-plate']}>
                  <Heading level={5}>CONTACT</Heading>
                  <Paragraph level='md'>
                    I’m most active and reachable via email. You can also check
                    out my resume, if you’re into that sort of thing.
                  </Paragraph>
                </div>
                <div className={personalStyles['contact-plate']}>
                  <Heading level={5}>LINKS</Heading>
                  <div className={personalStyles['personal-iconGroup']}>
                    <Link
                      href='https://www.facebook.com/profile.php?id=100045425323359'
                      className={personalStyles['personal-icon']}
                    >
                      <div className={personalStyles['iconCover']}>
                        <FacebookIcon />
                        <Heading level={6}>Facebook</Heading>
                      </div>

                      <ArrowIcon />
                    </Link>

                    <Link
                      className={personalStyles['personal-icon']}
                      href='https://instagram.com/_____thang0429?igshid=YmMyMTA2M2Y='
                    >
                      <div className={personalStyles['iconCover']}>
                        <InstagramIcon />
                        <Heading level={6}>Instagram</Heading>
                      </div>
                      <ArrowIcon />
                    </Link>

                    <Link
                      className={personalStyles['personal-icon']}
                      href='/404'
                    >
                      <div className={personalStyles['iconCover']}>
                        <LinkedInIcon />
                        <Heading level={6}>LinkedIn</Heading>
                      </div>
                      <ArrowIcon />
                    </Link>

                    <Link
                      className={personalStyles['personal-icon']}
                      href='/404'
                    >
                      <div className={personalStyles['iconCover']}>
                        <TwitterIcon />
                        <Heading level={6}>Twitter</Heading>
                      </div>
                      <ArrowIcon />
                    </Link>

                    <Link
                      className={personalStyles['personal-icon']}
                      href='/404'
                    >
                      <div className={personalStyles['iconCover']}>
                        <GithubIcon />
                        <Heading level={6}>Github</Heading>
                      </div>
                      <ArrowIcon />
                    </Link>

                    <Link
                      className={personalStyles['personal-icon']}
                      href='/resume'
                    >
                      <div className={personalStyles['iconCover']}>
                        <ResumeIcon />
                        <Heading level={6}>Resume</Heading>
                      </div>
                      <ArrowIcon />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default PersonalSpace
