import React from 'react'
import Link from 'next/link'
import ResumeStyles from '@/styles/pagesModule/Resume.module.scss'
import Container from '@/components/Layout/Container/Container'
import Heading from '@/components/WinUI/Typography/Heading'
import Paragraph from '@/components/WinUI/Typography/Paragraph'
import ArrowIcon from '@/assets/icons/sns/arrow_right_up.svg'
import England from '@/assets/imgs/resume/england.jpg'
import Japan from '@/assets/imgs/resume/japan.jpg'
import Image from 'next/image'
import PageHeader from '@/components/WinUI/PageHeader/PageHeader'

const resume = () => {
  return (
    <Container>
      <PageHeader title='Résume' subtitle='A space to present my resume.' />
      <div className={ResumeStyles['www-resume']}>
        <div className={ResumeStyles['www-resume_box']}>
          <div className={ResumeStyles['box-wrapper']}>
            <div className={ResumeStyles['gradient-border']}>
              <div className={ResumeStyles['content-wrapper']}>
                <div className={ResumeStyles['resume-header-wrapper']}>
                  <div className={ResumeStyles['resume-header-content']}>
                    <Image src={England} alt='english resume' />
                  </div>
                </div>
                <div className={ResumeStyles['resume-heading-wrapper']}>
                  <div className={ResumeStyles['resume-heading-content']}>
                    <Heading level={4} textAlign='center'>
                      English
                    </Heading>
                    <Paragraph level='md' textAlign='center'>
                      This is a resume compiled and written in English
                    </Paragraph>
                  </div>
                </div>
                <Link
                  locale={false}
                  href='/files/Resume_Eng.pdf'
                  alt='alt text'
                  target='_blank'
                  rel='noopener noreferrer'
                  className={ResumeStyles['resume-button']}
                >
                  <div className={ResumeStyles['iconCover']}>
                    <Heading level={6}>View more</Heading>
                    <ArrowIcon />
                  </div>
                </Link>
              </div>
              <div className={ResumeStyles['header']}></div>
            </div>
          </div>
        </div>
        <div className={ResumeStyles['www-resume_box']}>
          <div className={ResumeStyles['box-wrapper']}>
            <div className={ResumeStyles['gradient-border']}>
              <div className={ResumeStyles['content-wrapper']}>
                <div className={ResumeStyles['resume-header-wrapper']}>
                  <div className={ResumeStyles['resume-header-content']}>
                    <Image src={Japan} alt='english resume' />
                  </div>
                </div>
                <div className={ResumeStyles['resume-heading-wrapper']}>
                  <div className={ResumeStyles['resume-heading-content']}>
                    <Heading level={4} textAlign='center'>
                      日本語
                    </Heading>
                    <Paragraph level='md' textAlign='center'>
                      これは、日本語で編集および作成された履歴書です。
                    </Paragraph>
                  </div>
                </div>
                <Link
                  locale={false}
                  href='/files/Resume_Jap.pdf'
                  alt='alt text'
                  target='_blank'
                  rel='noopener noreferrer'
                  className={ResumeStyles['resume-button']}
                >
                  <div className={ResumeStyles['iconCover']}>
                    <Heading level={6}>詳細を見る</Heading>
                    <ArrowIcon />
                  </div>
                </Link>
              </div>
              <div className={ResumeStyles['header']}></div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default resume
