import React, { useState, useEffect, useRef, forwardRef } from 'react'
import { gsap } from 'gsap'
import { Flip } from 'gsap/dist/Flip'
import { Observer } from 'gsap/dist/Observer'

import contentItemsData from '@/data/myproject/myprojects.json'

gsap.registerPlugin(Flip, Observer)

const ImagePreview = ({ image, onClose }) => {
    const overlayRef = useRef(null)
    const containerRef = useRef(null)

    useEffect(() => {
        // Animation khi mở preview
        const tl = gsap.timeline()

        tl.set(overlayRef.current, {
            opacity: 0,
        })
            .set(containerRef.current, {
                scale: 0.8,
                opacity: 0,
            })
            .to(overlayRef.current, {
                opacity: 1,
                duration: 0.3,
                ease: 'power2.out',
            })
            .to(
                containerRef.current,
                {
                    scale: 1,
                    opacity: 1,
                    duration: 0.5,
                    ease: 'back.out(1.7)',
                },
                '-=0.2'
            )

        // Cleanup animation khi unmount
        return () => {
            tl.kill()
        }
    }, [])

    const handleClose = () => {
        // Animation khi đóng preview
        const tl = gsap.timeline({
            onComplete: onClose,
        })

        tl.to(containerRef.current, {
            scale: 0.8,
            opacity: 0,
            duration: 0.4,
            ease: 'power2.in',
        }).to(
            overlayRef.current,
            {
                opacity: 0,
                duration: 0.3,
                ease: 'power2.in',
            },
            '-=0.2'
        )
    }

    return (
        <div
            className="image-preview-overlay"
            ref={overlayRef}
            onClick={handleClose}
        >
            <div
                className="image-preview-container"
                ref={containerRef}
                onClick={(e) => e.stopPropagation()}
            >
                <img src={image} alt="Preview" className="image-preview" />
                <button className="image-preview-close" onClick={handleClose}>
                    <svg width="24" height="24" viewBox="0 0 24 24">
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                    </svg>
                    Close Preview
                </button>
            </div>
        </div>
    )
}

const ContentItem = forwardRef(
    ({ title, subtitle, description, tags, features, isActive }, ref) => {
        const [previewImage, setPreviewImage] = useState(null)

        const handleImageClick = (image, e) => {
            e.preventDefault()
            e.stopPropagation()
            setPreviewImage(image)
        }

        const closePreview = () => {
            setPreviewImage(null)
        }
        return (
            <div
                ref={ref}
                className={`content__item ${
                    isActive ? 'content__item--current' : ''
                }`}
            >
                <div className="content__item-scroll">
                    <h2 className="content__item-title">
                        <span className="oh">
                            <span className="oh__inner">{title}</span>
                        </span>
                    </h2>
                    <div className="content__item-description">
                        <p className="oh">
                            <strong className="oh__inner">{subtitle}</strong>
                        </p>
                        <p className="oh">
                            <span className="oh__inner">{description}</span>
                        </p>
                        <div className="content__item-tags oh">
                            <div className="oh__inner">
                                {tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="content__item-tag"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="features">
                        <h3 className="features__title oh">
                            <span className="oh__inner">担当内容</span>
                        </h3>
                        <ul className="features__list">
                            {features.map((feature, index) => (
                                <li key={index} className="features__item oh">
                                    <div className="oh__inner">
                                        <h4 className="features__item-title">
                                            {feature.title}
                                        </h4>
                                        <ul className="features__sublist">
                                            {feature.items.map(
                                                (item, itemIndex) => (
                                                    <li
                                                        key={itemIndex}
                                                        className="features__subitem"
                                                    >
                                                        {item}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                        {feature.image && (
                                            <div
                                                className="features__image-wrapper"
                                                onClick={(e) =>
                                                    handleImageClick(
                                                        feature.image,
                                                        e
                                                    )
                                                }
                                            >
                                                <img
                                                    src={feature.image}
                                                    alt={feature.title}
                                                    className="features__image"
                                                />
                                            </div>
                                        )}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                {previewImage && (
                    <ImagePreview image={previewImage} onClose={closePreview} />
                )}
                <div className="scroll-arrow">
                    <svg width="40" height="40" viewBox="0 0 24 24">
                        <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
                    </svg>
                </div>
            </div>
        )
    }
)

ContentItem.displayName = 'ContentItem'

function Slideshow() {
    const [isOpen, setIsOpen] = useState(false)
    const [current, setCurrent] = useState(-1)
    const [isAnimating, setIsAnimating] = useState(false)

    const stackRef = useRef(null)
    const slidesRef = useRef(null)
    const contentRef = useRef(null)
    const backCtrlRef = useRef(null)
    const prevNavRef = useRef(null)
    const nextNavRef = useRef(null)
    const contentItemsRef = useRef([])

    const contentItems = contentItemsData

    useEffect(() => {
        const scrollArrow = document.querySelector('.scroll-arrow')
        if (scrollArrow) {
            scrollArrow.addEventListener('click', () => {
                const contentScroll = document.querySelector(
                    '.content__item-scroll'
                )
                if (contentScroll) {
                    contentScroll.scrollBy({
                        top: 100,
                        behavior: 'smooth',
                    })
                }
            })
        }
    }, [current])

    useEffect(() => {
        let scrollObserver

        const initializeSlideshow = () => {
            const stackItems = [
                ...stackRef.current.querySelectorAll(
                    '.stack__item:not(.stack__item--empty)'
                ),
            ]

            scrollObserver = Observer.create({
                type: 'wheel,touch,pointer',
                wheelSpeed: -1,
                onDown: () => {
                    if (isOpen && !isAnimating) {
                        close()
                        scrollObserver.disable()
                    }
                },
                onUp: () => {
                    if (isOpen && !isAnimating) {
                        close()
                        scrollObserver.disable()
                    }
                },
                tolerance: 10,
                preventDefault: true,
            })
            scrollObserver.disable()

            stackItems.forEach((item, index) => {
                item.addEventListener('click', () => open(index))
            })
        }

        if (document.readyState === 'complete') {
            initializeSlideshow()
        } else {
            window.addEventListener('load', initializeSlideshow)
        }

        return () => {
            if (scrollObserver) scrollObserver.kill()
        }
    }, [isOpen, isAnimating])

    const animateContent = (index, direction) => {
        if (contentItemsRef.current[index]) {
            const item = contentItemsRef.current[index]
            const allElements = item.querySelectorAll(
                '.oh__inner, .content__item-tags, .features__title, .features__item, .scroll-arrow'
            )

            gsap.fromTo(
                allElements,
                {
                    yPercent: direction === 'open' ? 101 : 0,
                    opacity: direction === 'open' ? 0 : 1,
                },
                {
                    duration: 1,
                    ease: 'expo',
                    yPercent: direction === 'open' ? 0 : 101,
                    opacity: direction === 'open' ? 1 : 0,
                    stagger: direction === 'open' ? 0.05 : 0, // Stagger only when opening
                }
            )
        }
    }

    const animateTitle = (direction) => {
        const titleMain = window.titleRefs.main.current
        const titleSub = window.titleRefs.sub.current

        gsap.to([titleMain, titleSub], {
            duration: 1,
            ease: 'expo',
            yPercent: direction === 'open' ? -101 : 0,
            opacity: direction === 'open' ? 0 : 1,
            stagger: 0.05,
        })
    }
    const open = (index) => {
        if (isAnimating || isOpen) return
        setIsAnimating(true)

        const stackItems = [...stackRef.current.children]
        const stackItem = stackItems[index + 1] // +1 because of the empty item
        setCurrent(index)

        document.body.classList.add('oh')
        contentRef.current.classList.add('content--open')

        stackItem.classList.add('stack__item--current')

        const state = Flip.getState(stackItems, { props: 'opacity' })
        slidesRef.current.appendChild(stackRef.current)

        const itemCenter = stackItem.offsetTop + stackItem.offsetHeight / 2

        gsap.set(stackRef.current, {
            y: window.innerHeight / 2 - itemCenter + window.scrollY,
        })

        Flip.from(state, {
            duration: 1,
            ease: 'expo',
            onComplete: () => {
                setIsOpen(true)
                setIsAnimating(false)
            },
            absoluteOnLeave: true,
        })

        gsap.to('.title > .oh > .oh__inner', {
            duration: 0.9,
            ease: 'expo',
            yPercent: -101,
        })

        animateContent(index, 'open')

        animateTitle('open')

        gsap.to(backCtrlRef.current, {
            duration: 1,
            ease: 'expo',
            startAt: { opacity: 0 },
            opacity: 1,
        })

        gsap.to([prevNavRef.current, nextNavRef.current], {
            duration: 1,
            ease: 'expo',
            startAt: {
                opacity: 0,
                y: (_, target) => (target === prevNavRef.current ? -150 : 150),
            },
            y: 0,
            opacity: (_, target) =>
                (index === 0 && target === prevNavRef.current) ||
                (index === contentItems.length - 1 &&
                    target === nextNavRef.current)
                    ? 0
                    : 1,
        })
    }

    const close = () => {
        if (isAnimating || !isOpen) return
        setIsAnimating(true)

        const stackItems = [...stackRef.current.children]
        stackItems[current + 1].classList.remove('stack__item--current')

        document.body.classList.remove('oh')

        const state = Flip.getState(stackItems, { props: 'opacity' })
        document.querySelector('.stack-wrap').appendChild(stackRef.current)

        gsap.set(stackRef.current, { y: 0 })

        Flip.from(state, {
            duration: 1,
            ease: 'expo',
            onComplete: () => {
                contentRef.current.classList.remove('content--open')
                setCurrent(-1)
                setIsOpen(false)
                setIsAnimating(false)
            },
            absoluteOnLeave: true,
        })

        gsap.to('.title > .oh > .oh__inner', {
            duration: 0.9,
            ease: 'expo',
            startAt: { yPercent: 101 },
            yPercent: 0,
        })

        animateContent(current, 'close')
        animateTitle('close')

        gsap.to(backCtrlRef.current, {
            duration: 1,
            ease: 'expo',
            opacity: 0,
        })

        gsap.to([prevNavRef.current, nextNavRef.current], {
            duration: 1,
            ease: 'expo',
            y: (_, target) => (target === prevNavRef.current ? -100 : 100),
            opacity: 0,
        })
    }

    const navigate = (direction) => {
        if (
            isAnimating ||
            (direction === 'next' && current === contentItems.length - 1) ||
            (direction === 'prev' && current === 0)
        )
            return
        setIsAnimating(true)

        const previousCurrent = current
        const newCurrent = direction === 'next' ? current + 1 : current - 1
        setCurrent(newCurrent)

        const stackItems = [...stackRef.current.children]
        stackItems[previousCurrent + 1].classList.remove('stack__item--current')
        stackItems[newCurrent + 1].classList.add('stack__item--current')

        gsap.to(stackRef.current, {
            duration: 1,
            ease: 'expo',
            y:
                direction === 'next'
                    ? `-=${window.innerHeight / 2 + window.innerHeight * 0.02}`
                    : `+=${window.innerHeight / 2 + window.innerHeight * 0.02}`,
            onComplete: () => setIsAnimating(false),
        })

        animateContent(previousCurrent, 'close')
        animateContent(newCurrent, 'open')

        gsap.set(prevNavRef.current, { opacity: newCurrent > 0 ? 1 : 0 })
        gsap.set(nextNavRef.current, {
            opacity: newCurrent < contentItems.length - 1 ? 1 : 0,
        })
    }

    return (
        <>
            <div className="slides" ref={slidesRef}></div>
            <div className="stack-wrap">
                <div className="stack" ref={stackRef}>
                    <div className="stack__item stack__item--empty"></div>
                    {contentItems.map((_, index) => (
                        <div
                            key={index}
                            className="stack__item"
                            style={{
                                backgroundImage: `url(/img/${index + 1}.jpg)`,
                            }}
                        ></div>
                    ))}
                    <div className="stack__item stack__item--empty"></div>
                </div>
            </div>
            <div className="content" ref={contentRef}>
                {contentItems.map((item, index) => (
                    <ContentItem
                        key={index}
                        {...item}
                        isActive={index === current}
                        ref={(el) => (contentItemsRef.current[index] = el)}
                    />
                ))}
                <button
                    className="content__back unbutton"
                    ref={backCtrlRef}
                    onClick={close}
                    disabled={isAnimating}
                >
                    <svg
                        aria-hidden="true"
                        width="16px"
                        height="16px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M11.4939 20.5644C11.1821 20.8372 10.7083 20.8056 10.4356 20.4939L3.43557 12.4939C3.18814 12.2111 3.18814 11.7889 3.43557 11.5061L10.4356 3.50613C10.7083 3.1944 11.1822 3.16281 11.4939 3.43557C11.8056 3.70834 11.8372 4.18216 11.5644 4.49388L5.65283 11.25L20 11.25C20.4142 11.25 20.75 11.5858 20.75 12C20.75 12.4142 20.4142 12.75 20 12.75L5.65283 12.75L11.5644 19.5061C11.8372 19.8179 11.8056 20.2917 11.4939 20.5644Z" />
                    </svg>
                    <span className="oh__inner">Back</span>
                </button>
                <nav className="content__nav-wrap">
                    <button
                        className="content__nav content__nav--prev unbutton"
                        ref={prevNavRef}
                        onClick={() => navigate('prev')}
                        disabled={isAnimating || current === 0}
                    >
                        <svg width="100" height="267" viewBox="0 0 100 267">
                            <path
                                d="M49.894 2.766v262.979"
                                strokeLinecap="square"
                            />
                            <path
                                fill="none"
                                d="M99.75 76.596C73.902 76.596 52.62 43.07 49.895 0 47.168 43.07 25.886 76.596.036 76.596"
                            />
                        </svg>
                    </button>
                    <button
                        className="content__nav content__nav--next unbutton"
                        ref={nextNavRef}
                        onClick={() => navigate('next')}
                        disabled={
                            isAnimating || current === contentItems.length - 1
                        }
                    >
                        <svg width="100" height="267" viewBox="0 0 100 267">
                            <path
                                d="M49.894 2.766v262.979"
                                strokeLinecap="square"
                            />
                            <path
                                fill="none"
                                d="M99.75 76.596C73.902 76.596 52.62 43.07 49.895 0 47.168 43.07 25.886 76.596.036 76.596"
                            />
                        </svg>
                    </button>
                </nav>
            </div>
        </>
    )
}

export default Slideshow
