import styled, { css } from 'styled-components'

export const TechWrapper = styled.div`
  width: 100%;
  ${(props) =>
    props.half &&
    css`
      width: 50%;
    `}
  ${(props) =>
    props.tri &&
    css`
      width: 33.33%;
    `}
    ${(props) =>
      props.four &&
      css`
        width: 25%;
      `}
    @media (min-width: 1024px) {
    */
    border-radius: var(--radius-md);
  }
  @media (min-width: 1216px) {
    */
    border-radius: var(--radius-md);
  }
  @media (min-width: 1408px) {
    */
    border-radius: var(--radius-md);
  }
  ${(props) => props.six && css``}
  ${(props) => props.five && css``}
  ${(props) => props.four && css``}

  ${(props) => props.three && css``}
  ${(props) => props.two && css``}
`
