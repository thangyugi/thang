import { MDXRemote } from 'next-mdx-remote'
import React from 'react'

const PostPage = ({ frontMatter: { title }, mdxSource }) => {
  return (
    <div className='mt-4'>
      <h1>{title}</h1>
      <MDXRemote {...mdxSource} components={{ SyntaxHighlighter }} />
    </div>
  )
}
export default PostPage
