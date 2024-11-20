import React from 'react'
import BackgroundContainerStyle from './BackgroundContainer.module.scss'

import Ingenious from '@/assets/imgs/backgroundContainer/bgShiny.svg'

const BackgroundContainer = () => {
    return (
        <div className={BackgroundContainerStyle.bgContainer}>
            <div className={BackgroundContainerStyle.bgImage}>
                <Ingenious />
            </div>
        </div>
    )
}

export default BackgroundContainer
