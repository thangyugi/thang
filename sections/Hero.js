import background1 from '../assets/imgs/planets/Gradient.webp'
import background2 from '../assets/imgs/planets/OrangeDownRight.webp'
import background3 from '../assets/imgs/planets/Blue.webp'
import background4 from '../assets/imgs/planets/GreenDownRight.webp'
import background5 from '../assets/imgs/planets/VerySmallGreen.webp'
import background6 from '../assets/imgs/planets/MediumOrange.webp'
import background7 from '../assets/imgs/planets/BigGreen.webp'
import background8 from '../assets/imgs/planets/MediumGreen.webp'
import background9 from '../assets/imgs/planets/Purple.webp'

import { MouseParallax } from 'react-just-parallax'

import {
    StrongHeading,
    SubtitleHeading,
} from '../styles/styled-component/typhography'
import Container from '@/components/Layout/Container/Container'
import Heading from '@/components/WinUI/Typography/Heading'

const Hero = () => {
    return (
        <div className="hero-wrapper">
            <div className="hero-content">
                <div className="grid-top">
                    <div className={`grid__item blob2`}> </div>

                    <div className={`grid__item blob4`}> </div>
                    <div className={`grid__item blob5`}> </div>
                    {/* <Planet /> */}
                    <div className={`grid__item orbit orbit-sun`}>
                        <div id="tesla"></div>
                        <article id="sm-trajectory"></article>
                        <article id="md-trajectory"></article>
                        <article id="lg-trajectory"></article>
                        <article id="xl-trajectory"></article>
                    </div>

                    <div className={`grid__item pos-1`}>
                        <MouseParallax strength={0.06}>
                            <div
                                style={{
                                    backgroundImage: `url(${background1.src})`,
                                }}
                                className="grid__item-img"
                            >
                                {' '}
                            </div>
                        </MouseParallax>
                    </div>

                    <div className={`grid__item pos-2`}>
                        <MouseParallax strength={0.06}>
                            <div
                                style={{
                                    backgroundImage: `url(${background2.src})`,
                                }}
                                className="grid__item-img"
                            >
                                {' '}
                            </div>
                        </MouseParallax>
                    </div>

                    <div className={`grid__item pos-3`}>
                        <MouseParallax strength={0.06}>
                            <div
                                style={{
                                    backgroundImage: `url(${background3.src})`,
                                }}
                                className="grid__item-img"
                            >
                                {' '}
                            </div>
                        </MouseParallax>
                    </div>

                    <div className={`grid__item pos-4`}>
                        <MouseParallax strength={0.06}>
                            <div
                                style={{
                                    backgroundImage: `url(${background4.src})`,
                                }}
                                className="grid__item-img"
                            >
                                {' '}
                            </div>
                        </MouseParallax>
                    </div>

                    <div className={`grid__item pos-5`}>
                        <MouseParallax strength={0.06}>
                            <div
                                style={{
                                    backgroundImage: `url(${background5.src})`,
                                }}
                                className="grid__item-img"
                            >
                                {' '}
                            </div>
                        </MouseParallax>
                    </div>

                    <div className={`grid__item pos-6`}>
                        <MouseParallax strength={0.06}>
                            <div
                                style={{
                                    backgroundImage: `url(${background6.src})`,
                                }}
                                className="grid__item-img"
                            >
                                {' '}
                            </div>
                        </MouseParallax>
                    </div>
                    <div className={`grid__item pos-7`}>
                        <MouseParallax strength={0.06}>
                            <div
                                style={{
                                    backgroundImage: `url(${background7.src})`,
                                }}
                                className="grid__item-img"
                            >
                                {' '}
                            </div>
                        </MouseParallax>
                    </div>
                    <div className={`grid__item pos-8`}>
                        <MouseParallax strength={0.06}>
                            <div
                                style={{
                                    backgroundImage: `url(${background8.src})`,
                                }}
                                className="grid__item-img"
                            >
                                {' '}
                            </div>
                        </MouseParallax>
                    </div>
                    <div className={`grid__item pos-9`}>
                        <MouseParallax strength={0.06}>
                            <div
                                style={{
                                    backgroundImage: `url(${background9.src})`,
                                }}
                                className="grid__item-img"
                            >
                                {' '}
                            </div>
                        </MouseParallax>
                    </div>
                </div>

                <Container>
                    <Heading level={3} textAlign="center">
                        HI, I’M
                    </Heading>
                    <Heading level={3} textAlign="center">
                        HA XUAN THANG
                    </Heading>
                    <Heading level={6} textAlign="center">
                        VIETNAM and JAPAN
                    </Heading>
                </Container>
            </div>
        </div>
    )
}

export default Hero
