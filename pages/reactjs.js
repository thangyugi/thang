import Link from 'next/link'
import React from 'react'
import { TitleHeading } from '../styles/styled-component/typhography'

//pages
const reactjs = () => {
  return (
    <div>
      <ul
        style={{
          textAlign: 'center',
        }}
      >
        <li>
          <Link href='/react-hook-form'>
            <TitleHeading bold>React Hook Form</TitleHeading>
          </Link>
        </li>
        <li>
          <Link href='/react-query'>
            <TitleHeading bold>React Query</TitleHeading>
          </Link>
        </li>
        <li>
          <Link href='/mdx'>
            <TitleHeading bold>MDX</TitleHeading>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default reactjs
