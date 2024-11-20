import React from 'react'
import NotFoundStyles from '@/styles/pagesModule/NotFoundPage.module.scss'

import Container from '@/components/Layout/Container/Container'
import Heading from '@/components/WinUI/Typography/Heading'
import Paragraph from '@/components/WinUI/Typography/Paragraph'
import Link from 'next/link'
import ArrowIcon from '@/assets/icons/sns/arrow_right_up.svg'

import NotFoundMotion from '@/components/Animations/NotFound/NotFoundMotion'
import NotFoundImage from '@/assets/imgs/404/404.svg'

const NotFoundPage = () => {
    return (
        <Container>
            <div className={NotFoundStyles['www_not-found-page']}>
                <div className={NotFoundStyles['notfound-text']}>
                    <Heading level={4} textAlign="left">
                        Sorry, the page you are trying to access isn&apos;t here
                        at this point in time and space...
                    </Heading>

                    <Heading level={5} textAlign="left">
                        Something has gone wrong on our end.
                    </Heading>

                    <Heading level={6} textAlign="left">
                        What could have caused this?
                    </Heading>

                    <Paragraph level="md">
                        ∅ Well, something technical went wrong on my site.{' '}
                        <br />
                        ∅ I might have removed the page when I redesigned our
                        website.
                        <br />
                        ∅ Or the link you clicked might be old and does not work
                        anymore.
                        <br />∅ Or you might have accidentally typed the wrong
                        URL in the address bar.
                    </Paragraph>

                    <Heading level={5} textAlign="left">
                        What you can do?
                    </Heading>

                    <Paragraph level="md">
                        ∅ You might try retyping the URL and trying again.
                    </Paragraph>
                    <Link href="/">
                        <div className={NotFoundStyles['notfound-url']}>
                            <Paragraph level="md" color="ok">
                                ∅ Take you back to my homepage
                            </Paragraph>
                            <ArrowIcon />
                        </div>
                    </Link>
                </div>
                <div className={NotFoundStyles['notfound-image']}>
                    <NotFoundImage />
                </div>
            </div>
        </Container>
    )
}

export default NotFoundPage
