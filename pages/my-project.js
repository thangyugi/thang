import React, { useEffect } from 'react'
import Frame from '@/components/Frame'
import Slideshow from '@/components/Slideshow'
import Title from '@/components/Title'
import preloadImages from '@/utils/slideUtils'

const MyProject = () => {
    useEffect(() => {
        preloadImages('.stack__item').then(() => {
            document.body.classList.remove('loading')
        })
    }, [])

    return (
        <div>
            <Slideshow />
            <Title />
        </div>
    )
}

export default MyProject
