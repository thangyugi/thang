import React from 'react'
import styles from './Tech.module.scss'

import Container from '@/components/Layout/Container/Container'
import Top from '@/sections/TechContent/Top/Top'
import Center from '@/sections/TechContent/Center/Center'
import Bottom from '@/sections/TechContent/Bottom/Bottom'
import BackgroundContainer from '@/sections/TechContent/BackgroundContainer/BackgroundContainer'

import InfiniteWrapper from '@/components/WinUI/InfiniteText/InfiniteWrapper'
import MarqeeText from '@/components/WinUI/InfiniteText/InfiniteText'

import Ingenious from '@/assets/imgs/marquee/metal.webp'
import Visionary from '@/assets/imgs/marquee/wood.webp'
import Inventiveness from '@/assets/imgs/marquee/water.webp'
import Creative from '@/assets/imgs/marquee/fire.webp'
import Innovation from '@/assets/imgs/marquee/earth.webp'
import Heading from '@/components/WinUI/Typography/Heading'
import Paragraph from '@/components/WinUI/Typography/Paragraph'
import IconCloud from '@/components/ui/icon-cloud'

import Frame from '@/assets/imgs/backgroundContainer/Frame3.svg'

const elementsList = [
    'Metal',
    '金',
    'Wood',
    '木',
    'Water',
    '水',
    'Fire',
    '火',
    'Earth',
    '土',
    'Metal',
    '金',
    'Wood',
    '木',
    'Water',
    '水',
    'Fire',
    '火',
    'Earth',
    '土',
    'Metal',
    '金',
    'Wood',
    '木',
    'Water',
    '水',
    'Fire',
    '火',
    'Earth',
    '土',
    'Metal',
    '金',
    'Wood',
    '木',
    'Water',
    '水',
    'Fire',
    '火',
    'Earth',
    '土',
]

const slugs = [
    'typescript',
    'javascript',
    'dart',
    'java',
    'react',
    'flutter',
    'android',
    'html5',
    'css3',
    'nodedotjs',
    'express',
    'nextdotjs',
    'prisma',
    'amazonaws',
    'postgresql',
    'firebase',
    'nginx',
    'vercel',
    'testinglibrary',
    'jest',
    'cypress',
    'docker',
    'git',
    'jira',
    'github',
    'gitlab',
    'visualstudiocode',
    'androidstudio',
    'sonarqube',
    'figma',
]

const Tech = () => {
    return (
        <>
            <div className={styles['techSection']}>
                <div className={styles['section-title']}>
                    <div className={styles['divider-full-width']}></div>
                    <div className={styles['section-heading']}>
                        <Heading level={4}>MY ELEMENTS</Heading>
                    </div>
                    <div className={styles['divider-full-width']}></div>
                </div>

                <div className={styles['element-spinner']}>
                    <div className={styles['inner-container']}>
                        <div className={styles['elements']}>
                            {elementsList.map((element, key) => (
                                <Element key={key} name={element} />
                            ))}
                        </div>

                        <div className={styles['elements']}>
                            {elementsList.map((element, key) => (
                                <Element key={key} name={element} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className={styles['divider-full-width']}></div>
                <Container>
                    <InfiniteWrapper>
                        <MarqeeText
                            // heading='Ingenious'
                            heading="Powerful"
                            image={Ingenious.src}
                            textAlign="left"
                            borderPosition="borderBottom"
                            number="01"
                        />
                        <MarqeeText
                            heading="Youthful"
                            // heading='Visionary'
                            image={Visionary.src}
                            textAlign="left"
                            borderPosition="borderBottom"
                            number="02"
                        />

                        <MarqeeText
                            // heading='Inventiveness'
                            heading="Flexible"
                            image={Inventiveness.src}
                            number="03"
                            textAlign="left"
                            borderPosition="borderBottom"
                        />
                        <MarqeeText
                            heading="Passionate"
                            image={Creative.src}
                            textAlign="left"
                            borderPosition="borderBottom"
                            number="04"
                        />
                        <MarqeeText
                            heading="Creative"
                            image={Innovation.src}
                            textAlign="left"
                            number="05"
                        />
                    </InfiniteWrapper>
                </Container>

                <div className={styles['planet-banner-wrap']}>
                    <div className={styles['planet-heading']}>
                        <Heading level={4} textAlign="center">
                            KEY SKILLS *
                        </Heading>
                    </div>

                    <div className={styles['planet-arc']}>
                        <Frame />
                    </div>
                    <Container>
                        <Top />
                        <Center />
                        <Bottom />
                        <BackgroundContainer />
                        {/* <IconCloud iconSlugs={slugs} /> */}
                    </Container>
                </div>
            </div>
        </>
    )
}

const Element = ({ name }) => (
    <div className={styles['element']}>
        <div className={styles['element-holder']}>
            <h3 className={styles['h3 no-margins']}>
                <Paragraph level="lg">{name}</Paragraph>
            </h3>
            <div className={styles['element-separator']}></div>
        </div>
    </div>
)

export default Tech
