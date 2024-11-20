import React from 'react'

function Frame() {
    return (
        <div className="frame">
            <div className="frame__title">
                <h1 className="frame__title-main">
                    Stack to Content Layout Transition
                </h1>
                <a
                    aria-label="Back to the article"
                    className="frame__title-back"
                    href="https://tympanus.net/codrops/?p=63558"
                >
                    <span className="oh__inner">Back to the article</span>
                    <svg width="18px" height="18px" viewBox="0 0 24 24">
                        <path
                            fillRule="evenodd"
                            d="M18.25 15.5a.75.75 0 00.75-.75v-9a.75.75 0 00-.75-.75h-9a.75.75 0 000 1.5h7.19L6.22 16.72a.75.75 0 101.06 1.06L17.5 7.56v7.19c0 .414.336.75.75.75z"
                        />
                    </svg>
                </a>
                <br />
                <a
                    className="frame__title-prev"
                    href="https://tympanus.net/Development/IntroTrailEffect/"
                >
                    Previous demo
                </a>
            </div>
            <div className="frame__logo">
                <h2 className="frame__logo-title">Jonas Tanaka</h2>
                <span className="frame__logo-subtitle">フォトグラフィー</span>
            </div>
        </div>
    )
}

export default Frame
