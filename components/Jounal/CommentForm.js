import React, { useRef, useState } from 'react'
import { submitComment } from 'services'
import Heading from '../WinUI/Typography/Heading'
import Paragraph from '../WinUI/Typography/Paragraph'
import CommentFormStyle from './CommentForm.module.scss'

const CommentForm = ({ slug }) => {
  const [error, setError] = useState(false)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const commentEl = useRef()
  const nameEl = useRef()
  const emailEl = useRef()

  const handleCommentSubmit = () => {
    setError(false)
    const { value: comment } = commentEl.current
    const { value: name } = nameEl.current
    const { value: email } = emailEl.current
    if (!comment || !name || !email) {
      setError(true)
      return
    }

    const commentData = {
      name,
      email,
      comment,
      slug,
    }

    submitComment(commentData).then((res) => {
      setShowSuccessMessage(true)
      setTimeout(() => {
        setShowSuccessMessage(false)
      }, 3000)
    })
  }
  return (
    <div className={CommentFormStyle['www_commentForm']}>
      <Heading level={5}>Leave a Reply</Heading>

      <Paragraph level='sm'>
        <textarea
          defaultValue='This is a description.'
          ref={commentEl}
          name=''
          id=''
          cols='30'
          rows='10'
        ></textarea>
      </Paragraph>

      <Heading level={6}>Your Name</Heading>
      <Paragraph level='sm'>
        <input ref={nameEl} type='text' placeholder='ksuM nolE' />
      </Paragraph>

      <Heading level={6}>Your Email</Heading>
      <Paragraph level='sm'>
        <input ref={emailEl} type='email' placeholder='ksuM nolE@gmail.com' />
      </Paragraph>

      {error && (
        <Paragraph level='sm' color='warning'>
          All fields are required
        </Paragraph>
      )}

      <button
        className='rounded-md bg-blue-600 px-5 py-3 text-sm text-white transition hover:bg-blue-700'
        type='button'
        onClick={handleCommentSubmit}
      >
        <Paragraph level='sm' textAlign='center'>
          Post comment
        </Paragraph>
      </button>

      {showSuccessMessage && (
        <Paragraph level='sm' color='ok'>
          Comment Submmited for review
        </Paragraph>
      )}
    </div>
  )
}

export default CommentForm
