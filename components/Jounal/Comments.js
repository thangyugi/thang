import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { getComments } from 'services'
import Divider from '../WinUI/Divider/Divider'
import Heading from '../WinUI/Typography/Heading'
import Paragraph from '../WinUI/Typography/Paragraph'

import CommentStyle from './Comment.module.scss'

const Comments = ({ slug }) => {
  const [comments, setComments] = useState([])

  useEffect(() => {
    getComments(slug).then((result) => setComments(result))
  }, [slug])

  return (
    <>
      {comments.length > 0 && (
        <div className={CommentStyle['www_comment']}>
          <Heading level={6}>{comments.length} Comments</Heading>
          {comments.map((comment) => (
            <div
              key={comment.createdAt}
              className={CommentStyle['www_comment-content']}
            >
              <div>
                <Paragraph level='sm'>
                  {comment.name} -{' '}
                  {moment(comment.createdAt).format('MMM DD , YYYY')}{' '}
                </Paragraph>
              </div>

              <Paragraph level='sm'>{comment.comment}</Paragraph>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default Comments
