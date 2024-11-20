import React from 'react'
import TechCardStyle from './TechCard.module.scss'
import classNames from 'classnames'

import Paragraph from '@/components/WinUI/Typography/Paragraph'

const TechCard = ({ title, Image, color }) => {
    const classes = classNames({
        [TechCardStyle['www-techCard']]: true,
    })

    return (
        <div className={classes}>
            <div className={TechCardStyle['techCard_wrapper']}>
                <div className={TechCardStyle['techCard_cover']}>
                    <Image
                        className={TechCardStyle['techCard_icon']}
                        fill={color}
                        alt={title}
                    />
                </div>
                <Paragraph textAlign="center" level="extraSmall">
                    {title}
                </Paragraph>
            </div>
        </div>
    )
}

export default TechCard
