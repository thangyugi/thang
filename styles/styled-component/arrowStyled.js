import styled, { css } from 'styled-components'

// Arrow Wrapper
export const Arrow = styled.div`
  ${(props) =>
    props.mt &&
    css`
      margin-top: ${props.mt};
    `}
  ${(props) =>
    props.mb &&
    css`
      margin-bottom: ${props.mb};
    `}
  ${(props) =>
    props.ml &&
    css`
      margin-left: ${props.ml};
    `}
  ${(props) =>
    props.mr &&
    css`
      margin-right: ${props.mr};
    `}
`
