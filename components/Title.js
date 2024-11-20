import React, { useRef, useEffect } from 'react'

function Title() {
    const titleMainRef = useRef(null)
    const titleSubRef = useRef(null)

    useEffect(() => {
        window.titleRefs = {
            main: titleMainRef,
            sub: titleSubRef,
        }
    }, [])

    return (
        <div className="title">
            <h2 className="title__main oh">
                <span className="oh__inner" ref={titleMainRef}>
                    My Projects
                </span>
            </h2>
            <span className="title__sub oh">
                <span className="oh__inner" ref={titleSubRef}>
                    2019 &mdash; now
                </span>
            </span>
        </div>
    )
}

export default Title
