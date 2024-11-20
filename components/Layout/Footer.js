import React from 'react'
import { useState } from 'react'
import { send } from 'emailjs-com'

import Container from '@/components/Layout/Container/Container'
import Heading from '@/components/WinUI/Typography/Heading'
import Paragraph from '@/components/WinUI/Typography/Paragraph'
import Link from 'next/link'
import FooterStyles from './Footer.module.scss'
import ThangBrand from '@/assets/imgs/backgroundContainer/Thang.png'

import FacebookIcon from '@/assets/icons/sns/facebook.svg'
import GithubIcon from '@/assets/icons/sns/github.svg'
import InstagramIcon from '@/assets/icons/sns/instagram.svg'
import LinkedInIcon from '@/assets/icons/sns/linkedin.svg'
import TwitterIcon from '@/assets/icons/sns/twitter.svg'
import ArrowIcon from '@/assets/icons/sns/arrow_right_up.svg'

import * as Dialog from '@radix-ui/react-dialog'
import { Cross2Icon } from '@radix-ui/react-icons'
const Footer = ({ onCursor }) => {
    const [formValid, setFormValid] = useState(true)
    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: '',
        message: '',
        reply_to: '',
    })

    const onSubmit = (e) => {
        e.preventDefault()
        if (!validateForm()) {
            setFormValid(false)
            return
        }
        send('service_jdqmlpp', 'template_wcvdkf9', toSend, 'NVniDiv7yvVK7HJ9U')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text)
            })
            .catch((err) => {
                console.log('FAILED...', err)
            })
        setToSend({
            from_name: '',
            to_name: '',
            message: '',
            reply_to: '',
        })
        setFormValid(true)
    }

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value })
    }

    function validateForm() {
        const fields = ['from_name', 'to_name', 'reply_to', 'message']
        for (let i = 0; i < fields.length; i++) {
            if (!toSend[fields[i]]) {
                return false
            }
        }
        return true
    }

    return (
        <>
            <div className={FooterStyles['footer-wrapper']}>
                <div className={FooterStyles['cta']}>
                    <Heading level={4} textAlign="center">
                        Let’s work together
                    </Heading>
                    <Paragraph level="sm" textAlign="center">
                        By send me a message via email
                    </Paragraph>

                    <div className={FooterStyles['mail-container']}>
                        <Dialog.Root>
                            <Dialog.Trigger asChild>
                                <button className="Button violet">
                                    <Heading level={4}>Get in Touch</Heading>
                                </button>
                            </Dialog.Trigger>

                            <Dialog.Portal>
                                <Dialog.Overlay className="DialogOverlay" />
                                <Dialog.Content className="DialogContent">
                                    <Dialog.Title className="DialogTitle">
                                        <Heading level={5} textAlign="left">
                                            Let’s talk
                                        </Heading>
                                    </Dialog.Title>
                                    <Dialog.Description className="DialogDescription">
                                        If you are interested in working with
                                        me, you can contact me through the
                                        dialog box below
                                    </Dialog.Description>
                                    <form onSubmit={onSubmit}>
                                        <fieldset className="Fieldset">
                                            <label
                                                className="Label"
                                                htmlFor="name"
                                            >
                                                Name
                                            </label>
                                            <input
                                                className="Input"
                                                id="name"
                                                type="text"
                                                name="from_name"
                                                placeholder="Elon Musk"
                                                value={toSend.from_name}
                                                onChange={handleChange}
                                            />
                                        </fieldset>
                                        <fieldset className="Fieldset">
                                            <label
                                                className="Label"
                                                htmlFor="toname"
                                            >
                                                Company
                                            </label>
                                            <input
                                                className="Input"
                                                id="toname"
                                                name="to_name"
                                                placeholder="SpaceX"
                                                value={toSend.to_name}
                                                onChange={handleChange}
                                            />
                                        </fieldset>
                                        <fieldset className="Fieldset">
                                            <label
                                                className="Label"
                                                htmlFor="email"
                                            >
                                                Email
                                            </label>
                                            <input
                                                className="Input"
                                                id="email"
                                                type="text"
                                                name="reply_to"
                                                placeholder="elonmusk@spacex.com"
                                                value={toSend.reply_to}
                                                onChange={handleChange}
                                            />
                                        </fieldset>
                                        <fieldset className="Fieldset">
                                            <label
                                                className="Label"
                                                htmlFor="message"
                                            >
                                                Message
                                            </label>
                                            <textarea
                                                className="Input"
                                                id="message"
                                                name="message"
                                                placeholder="Let's fly into space and have dinner together."
                                                value={toSend.message}
                                                onChange={handleChange}
                                                rows={5}
                                            />
                                        </fieldset>
                                        {!formValid && (
                                            <div
                                                style={{
                                                    color: 'red',
                                                    marginTop: 10,
                                                }}
                                            >
                                                Please fill all of them.
                                            </div>
                                        )}
                                        <div
                                            style={{
                                                display: 'flex',
                                                marginTop: 25,
                                                justifyContent: 'flex-end',
                                            }}
                                        >
                                            <Dialog.Close asChild>
                                                <button
                                                    className="Button green"
                                                    type="submit"
                                                    onClick={onSubmit}
                                                >
                                                    Send now
                                                </button>
                                            </Dialog.Close>
                                        </div>
                                    </form>

                                    <Dialog.Close asChild>
                                        <button
                                            className="IconButton"
                                            aria-label="Close"
                                        >
                                            <Cross2Icon />
                                        </button>
                                    </Dialog.Close>
                                </Dialog.Content>
                            </Dialog.Portal>
                        </Dialog.Root>
                    </div>
                </div>
                <div className={FooterStyles['main-container']}>
                    <div className={FooterStyles['footer-top']}>
                        <div className={FooterStyles['footer-logo']}>
                            <Link href="/">
                                <div className={FooterStyles['image']}>
                                    <img
                                        src={ThangBrand.src}
                                        alt="Thang Brand"
                                    />
                                </div>
                            </Link>
                            <Paragraph level="sm" textAlign="left">
                                A grateful heart is a <br /> magnet for miracles
                            </Paragraph>
                        </div>

                        <div className={FooterStyles['footer-links']}>
                            <Link href="/personal-space">
                                <div className={FooterStyles['footer-link']}>
                                    <Heading level={6} color="orangewhite">
                                        Personal Space
                                    </Heading>
                                    <ArrowIcon />
                                </div>
                            </Link>
                            <Link href="/daily">
                                <div className={FooterStyles['footer-link']}>
                                    <Heading level={6} color="orangewhite">
                                        Daily Journal
                                    </Heading>
                                    <ArrowIcon />
                                </div>
                            </Link>
                            <Link href="/tech">
                                <div className={FooterStyles['footer-link']}>
                                    <Heading level={6} color="orangewhite">
                                        Tech Notes
                                    </Heading>
                                    <ArrowIcon />
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className={FooterStyles['footer-bottom']}>
                        <div className={FooterStyles['copyright']}>
                            © Ha Xuan Thang 2023
                        </div>
                        <div className={FooterStyles['socials']}>
                            <Link href="https://www.facebook.com/profile.php?id=100045425323359">
                                <div className={FooterStyles['social-icon']}>
                                    <FacebookIcon />
                                </div>
                            </Link>
                            <Link href="https://instagram.com/_____thang0429?igshid=YmMyMTA2M2Y=">
                                <div className={FooterStyles['social-icon']}>
                                    <InstagramIcon />
                                </div>
                            </Link>
                            <Link href="/404">
                                <div className={FooterStyles['social-icon']}>
                                    <GithubIcon />
                                </div>
                            </Link>

                            <Link href="/404">
                                <div className={FooterStyles['social-icon']}>
                                    <LinkedInIcon />
                                </div>
                            </Link>
                            <Link href="/404">
                                <div className={FooterStyles['social-icon']}>
                                    <TwitterIcon />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className={FooterStyles['footer-created']}>
        <Container>
          <Heading level={6} textAlign='center'>
            Created By
          </Heading>
        </Container>
      </div> */}
        </>
    )
}

export default Footer
