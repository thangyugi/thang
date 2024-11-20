import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { getCategories } from '../../services'
import { Flex } from '../../styles/styled-component/containerStyled'
import {
  ParagraphText,
  SubtitleHeading,
  TitleHeading,
} from '../../styles/styled-component/typhography'

const Categories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories))
  }, [])
  return (
    <div className='categories-section'>
      <TitleHeading black={true}>Explore :</TitleHeading>
      {categories.map((category) => (
        <div className='category-wrapper' key={category.slug}>
          <Link href={`/category/${category.slug}`}>
            <ParagraphText>{category.name}</ParagraphText>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Categories
