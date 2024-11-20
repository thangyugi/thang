import Heading from './Heading'
import Paragraph from './Paragraph'

function Typography({ children, tag = 'div' }) {
  let classes = [
    TypographyStyles['www-typography'],
    TypographyStyles['www-typography-container'],
  ]

  let CustomTag = `${tag}`

  return <CustomTag className={classes.join(' ')}>{children}</CustomTag>
}

Typography.Heading = Heading
Typography.Paragraph = Paragraph

export default Typography
