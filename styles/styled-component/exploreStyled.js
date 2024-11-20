import styled from 'styled-components'

import { motion } from 'framer-motion'

export const HomeContentSection = styled(motion.div)`
  margin-bottom: 200px;
`
export const Content = styled(motion.h2)`
  width: 53%;

  margin-left: 124px;
  color: ${(props) => props.theme.text};
`

export const ExploreParagraph = styled(motion.div)`
  text-align: left;
  margin-top: 2rem;

  @media (min-width: 1024px) {
    margin-top: 3rem;
  }
  @media (min-width: 1216px) {
    margin-top: 5rem;
  }
  @media (min-width: 1408px) {
    text-align: center;
  }
`
