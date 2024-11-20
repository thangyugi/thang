import React from 'react'

import ParagraphStyles from './Paragraph.module.scss'

const Paragraph = ({
  level = 'md',
  children,
  gradient,
  textAlign = 'left',
  color,
}) => {
  let classes = [ParagraphStyles['www-paragraph']]

  if (level) {
    classes.push(ParagraphStyles[`www-paragraph-${level}`])
  }

  if (gradient) {
    classes.push(ParagraphStyles[`www-paragraph-gradient`])
  }

  if (color) {
    classes.push(ParagraphStyles[`www-paragraph-color-${color}`])
  }

  if (textAlign) {
    classes.push(ParagraphStyles[`www-paragraph-text-${textAlign}`])
  }

  return <p className={classes.join(' ')}>{children}</p>
}

export default Paragraph
