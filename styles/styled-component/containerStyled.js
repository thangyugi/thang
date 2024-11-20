import styled, { css } from 'styled-components'

export const Container = styled.div`
  /* flex-grow: 1; */
  position: relative;
  margin: 0 auto;
  padding: 0 20px;
  width: auto;
  height: 100%;

  @media (min-width: 1024px) {
    max-width: 960px;
  }
  @media (min-width: 1216px) {
    max-width: 1152px;
  }

  @media (min-width: 1408px) {
    max-width: 1568px;
  }

  ${(props) =>
    props.fluid &&
    css`
      padding: 0;
      margin: 0;
      max-width: 100% !important;
    `}
`
export const Flex = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  ${(props) =>
    props.spaceBetween &&
    css`
      justify-content: space-between;
    `};
  ${(props) =>
    props.flexEnd &&
    css`
      justify-content: flex-end;
    `};
  ${(props) =>
    props.evenly &&
    css`
      justify-content: space-evenly;
    `};
  ${(props) =>
    props.flexStart &&
    css`
      align-items: flex-start;
    `};
  ${(props) =>
    props.alignEnd &&
    css`
      align-items: flex-end;
    `};
  ${(props) =>
    props.alignCenter &&
    css`
      align-items: center;
    `};
  ${(props) =>
    props.noHeight &&
    css`
      height: 0;
    `};
  ${(props) =>
    props.column &&
    css`
      flex-direction: column;
      /* @media (min-width: 1024px) {
        flex-direction: row;
      }
      @media (min-width: 1216px) {
        flex-direction: column;
      }
      @media (min-width: 1408px) {
        flex-direction: column;
      } */
    `};
  ${(props) =>
    props.row &&
    css`
      flex-direction: row;
      /* @media (min-width: 1024px) {
        flex-direction: column;
      }
      @media (min-width: 1216px) {
        flex-direction: column;
      }
      @media (min-width: 1408px) {
        flex-direction: column;
      } */
    `};
  ${(props) =>
    props.mb_column &&
    css`
      @media (max-width: 1024px) {
        flex-direction: column;
      }
      @media (min-width: 1216px) {
      }
      @media (min-width: 1408px) {
      }
    `};
  ${(props) =>
    props.mb_row &&
    css`
      @media (max-width: 1024px) {
        flex-direction: row;
      }
      }
      @media (min-width: 1216px) {
      }
      @media (min-width: 1408px) {
      }
    `};
  ${(props) =>
    props.gap &&
    css`
      gap: 5px;
    `};
  ${(props) =>
    props.mt &&
    css`
      margin-top: ${props.mt};
    `};
  ${(props) =>
    props.mb &&
    css`
      margin-bottom: ${props.mb};
    `};
  ${(props) =>
    props.ml &&
    css`
      margin-left: ${props.ml};
    `};
  ${(props) =>
    props.mr &&
    css`
      margin-right: ${props.mr};
    `};
`

/// Background css

// position: relative;
//     padding-bottom: 2rem;
//     background-image: radial-gradient(circle farthest-corner at 50% 50%,#2c5b33,#1b1b1b 50%),-webkit-gradient(linear,left top,left bottom,from(#1d1d1d),to(#1d1d1d));
//     background-image: radial-gradient(circle farthest-corner at 50% 50%,#2c5b33,#1b1b1b 50%),linear-gradient(180deg,#1d1d1d,#1d1d1d);
