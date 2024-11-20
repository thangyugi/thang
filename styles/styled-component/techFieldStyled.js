import styled, { css } from 'styled-components'
// import { device } from '@/styles/device.js'

export const TechField = styled.fieldset`
  position: relative;
  display: inline-grid;
  background-color: var(--background);
  /* border: 1px solid #ffffff2b; */
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  padding: 20px;
  border-radius: var(--radius-md);
  justify-items: center;
  // Media Queries

  @mixin backlight($x, $y, $spread, $size, $colorA, $colorB, $duration) {
    &:after {
      position: absolute;
      content: '';
      top: $y;
      left: $x;
      right: 0;
      z-index: -1;
      height: 100%;
      width: 100%;
      margin: 0 auto;
      transform: scale($size);
      -webkit-filter: blur($spread);
      -moz-filter: blur($spread);
      -ms-filter: blur($spread);
      filter: blur($spread);
      background: linear-gradient(270deg, $colorA, $colorB);
      background-size: 200% 200%;
      animation: animateGlow $duration ease infinite;

      @keyframes animateGlow {
        0% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
      }
    }
  }

  color: #252b37;
  background-color: #151823;
  animation: textColor 10s ease infinite;
  @include backlight(0, 5vw, 5vw, 0.75, #0fffc1, #7e0fff, 10s);

  @keyframes textColor {
    0% {
      color: #7e0fff;
    }
    50% {
      color: #0fffc1;
    }
    100% {
      color: #7e0fff;
    }
  }

  @media (min-width: 1281px) {
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    padding: 20px;
    border-radius: var(--radius-md);
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    padding: 20px;
    border-radius: var(--radius-md);
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    padding: 20px;
    border-radius: var(--radius-md);
  }

  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    padding: 20px;
    border-radius: var(--radius-md);
  }

  @media (min-width: 481px) and (max-width: 767px) {
    grid-column-gap: 5px;
    grid-row-gap: 5px;
    padding: 10px;
    border-radius: var(--radius-md);
  }

  @media (min-width: 320px) and (max-width: 480px) {
    grid-column-gap: 5px;
    grid-row-gap: 5px;
    padding: 10px;
    border-radius: var(--radius-md);
  }

  ${(props) =>
    props.six &&
    css`
      grid-template-columns: repeat(6, 1fr);
    `}
  ${(props) =>
    props.five &&
    css`
      grid-template-columns: repeat(5, 1fr);
    `}
  ${(props) =>
    props.four &&
    css`
      grid-template-columns: repeat(4, 1fr);
    `}

  ${(props) =>
    props.three &&
    css`
      grid-template-columns: repeat(3, 1fr);
    `}
  ${(props) =>
    props.two &&
    css`
      grid-template-columns: repeat(2, 1fr);
    `}
  ${(props) =>
    props.one &&
    css`
      grid-template-columns: repeat(1, 1fr);
      padding: 20px 0;
    `}
  /**
    Mobile
  */
  ${(props) =>
    props.mb_one &&
    css`
      @media (max-width: 1024px) {
        grid-template-columns: repeat(1, 1fr);
      }
      @media (min-width: 1216px) {
      }
      @media (min-width: 1408px) {
      }
    `}
  ${(props) =>
    props.mb_two &&
    css`
      @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
      }
      @media (min-width: 1216px) {
      }
      @media (min-width: 1408px) {
      }
    `}
  ${(props) =>
    props.mb_three &&
    css`
      @media (max-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
      }
      @media (min-width: 1216px) {
      }
      @media (min-width: 1408px) {
      }
    `}
  ${(props) =>
    props.mb_four &&
    css`
      @media (max-width: 1024px) {
        grid-template-columns: repeat(4, 1fr);
      }
      @media (min-width: 1216px) {
      }
      @media (min-width: 1408px) {
      }
    `}
  ${(props) =>
    props.mb_five &&
    css`
      @media (max-width: 1024px) {
        grid-template-columns: repeat(5, 1fr);
      }
      @media (min-width: 1216px) {
      }
      @media (min-width: 1408px) {
      }
    `}
  ${(props) =>
    props.mb_six &&
    css`
      @media (max-width: 1024px) {
        grid-template-columns: repeat(6, 1fr);
      }
      @media (min-width: 1216px) {
      }
      @media (min-width: 1408px) {
      }
    `}

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

export const TechTitle = styled.legend`
  text-align: center;
  margin-top: -20px;
  padding: 0 1.5rem;
  ${(props) =>
    props.left &&
    css`
      text-align: left;
    `}
  ${(props) =>
    props.center &&
    css`
      text-align: center;
    `}
  ${(props) =>
    props.right &&
    css`
      text-align: right;
    `}
`

// Media Queries
//  @media (min-width: 1281px) {

// }

// @media (min-width: 1025px) and (max-width: 1280px) {

// }

// @media (min-width: 768px) and (max-width: 1024px) {

// }

// @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {

// }

// @media (min-width: 481px) and (max-width: 767px) {

//   }

// @media (min-width: 320px) and (max-width: 480px) {

// }
