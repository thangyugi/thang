import React from 'react'

import HeadingStyles from './Heading.module.scss'
import PropTypes from 'prop-types'

const Heading = ({
  level = '3',
  children,
  gradient,
  display,
  textAlign = 'left',
  mobileAlign,
  color,
}) => {
  let classes = [HeadingStyles['www-heading']]

  if (gradient) {
    classes.push(HeadingStyles[`www-heading-gradient`])
  }
  if (textAlign) {
    classes.push(HeadingStyles[`www-heading-${textAlign}`])
  }
  if (mobileAlign) {
    classes.push(HeadingStyles[`www-heading-mobile-${mobileAlign}`])
  }
  if (display) {
    classes.push(HeadingStyles[`www-heading-${display}`])
  }
  if (color) {
    classes.push(HeadingStyles[`www-heading-${color}`])
  }
  const HeadingLevel = `h${level}`

  return <HeadingLevel className={classes.join(' ')}>{children}</HeadingLevel>
}

export default Heading

Heading.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  children: PropTypes.node,
  gradient: PropTypes.bool,
  display: PropTypes.oneOf(['inlineBlock']),
  textAlign: PropTypes.oneOf(['left', 'center', 'right']),
  mobileAlign: PropTypes.oneOf(['left', 'center', 'right']),
  color: PropTypes.oneOf(['black', 'ok', 'orangewhite']),
}
