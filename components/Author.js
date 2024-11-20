import React from 'react'
import Image from 'next/legacy/image'
import AuthorStyles from './Author.module.scss'

import Heading from '@/components/WinUI/Typography/Heading'
import Paragraph from '@/components/WinUI/Typography/Paragraph'

const Author = ({ author }) => {
  return (
    <div>
      <div className={AuthorStyles['www-author']}>
        <div className={AuthorStyles['www-author-avt']}>
          <Image
            unoptimized={true}
            alt={author.name}
            height={100}
            width={100}
            src={author.photo.url}
          />
        </div>

        <Heading level={6} textAlign='center'>
          {author.name}
        </Heading>
        <Paragraph level='sm' textAlign='center'>
          {author.bio}
        </Paragraph>
      </div>
    </div>
  )
}

export default Author
