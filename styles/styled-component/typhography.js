import styled, { css } from 'styled-components'

export const MaxHeading = styled.div`
  font-size: 10.5rem;
  font-weight: 800;
  position: relative;
  @media (min-width: 1024px) {
    font-size: 10.5rem;
  }
  @media (min-width: 1216px) {
    font-size: 10.5rem;
  }
  @media (min-width: 1408px) {
    font-size: 10.5rem;
  }

  ${(props) =>
    props.center &&
    css`
      text-align: center;
    `};
  ${(props) =>
    props.left &&
    css`
      text-align: left;
    `};
  ${(props) =>
    props.right &&
    css`
      text-align: right;
    `};
  ${(props) =>
    props.light &&
    css`
      font-weight: 300;
    `};
  ${(props) =>
    props.regular &&
    css`
      font-weight: 400;
    `};
  ${(props) =>
    props.medium &&
    css`
      font-weight: 500;
    `};
  ${(props) =>
    props.bold &&
    css`
      font-weight: 700;
    `};
  ${(props) =>
    props.black &&
    css`
      font-weight: 900;
    `};
`

export const StrongHeading = styled.div`
  font-size: 2rem;
  font-weight: 600;
  position: relative;

  @media (min-width: 1024px) {
    font-size: 3rem;
  }
  @media (min-width: 1216px) {
    font-size: 5rem;
  }
  @media (min-width: 1408px) {
    font-size: 5rem;
  }

  ${(props) =>
    props.center &&
    css`
      text-align: left;

      @media (min-width: 1024px) {
        font-size: 5rem;
      }
      @media (min-width: 1216px) {
        font-size: 5rem;
      }
      @media (min-width: 1408px) {
        text-align: center;
      }
    `};
  ${(props) =>
    props.left &&
    css`
      text-align: left;
    `};
  ${(props) =>
    props.right &&
    css`
      text-align: right;
    `};
  ${(props) =>
    props.light &&
    css`
      font-weight: 300;
    `};
  ${(props) =>
    props.regular &&
    css`
      font-weight: 400;
    `};
  ${(props) =>
    props.medium &&
    css`
      font-weight: 500;
    `};
  ${(props) =>
    props.bold &&
    css`
      font-weight: 700;
    `};
  ${(props) =>
    props.black &&
    css`
      font-weight: 900;
    `};
`
export const StrongHeadingGrad = styled.div`
  font-size: 2rem;
  font-weight: 600;
  position: relative;
  color: aqua;
  display: -webkit-inline-box;

  background: linear-gradient(
    135deg,
    #5335cf 0%,
    #de005e 25%,
    #f66e48 50%,
    #de005e 75%,
    #5335cf 100%
  );
  background-size: 400%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: animate 10s linear infinite;

  @keyframes animate {
    to {
      background-position: 400%;
    }
  }
  @media (min-width: 1024px) {
    font-size: 3rem;
  }
  @media (min-width: 1216px) {
    font-size: 5rem;
  }
  @media (min-width: 1408px) {
    font-size: 5rem;
  }

  ${(props) =>
    props.center &&
    css`
      text-align: center;
    `};
  ${(props) =>
    props.left &&
    css`
      text-align: left;
    `};
  ${(props) =>
    props.right &&
    css`
      text-align: right;
    `};
  ${(props) =>
    props.light &&
    css`
      font-weight: 300;
    `};
  ${(props) =>
    props.regular &&
    css`
      font-weight: 400;
    `};
  ${(props) =>
    props.medium &&
    css`
      font-weight: 500;
    `};
  ${(props) =>
    props.bold &&
    css`
      font-weight: 700;
    `};
  ${(props) =>
    props.black &&
    css`
      font-weight: 900;
    `};
`

export const ParagraphHeading = styled.div`
  font-size: 2rem;
  position: relative;
  margin-bottom: 2rem;
  font-weight: 400;
  @media (min-width: 1024px) {
    font-size: 2rem;
  }
  @media (min-width: 1216px) {
    font-size: 2rem;
  }
  @media (min-width: 1408px) {
    font-size: 2rem;
  }

  ${(props) =>
    props.center &&
    css`
      text-align: left;
      margin-top: 2rem;
      @media (min-width: 1024px) {
        /* margin-top: 5rem; */
      }
      @media (min-width: 1216px) {
        /* margin-top: 5rem; */
      }
      @media (min-width: 1408px) {
        text-align: center;
      }
    `};
  ${(props) =>
    props.left &&
    css`
      text-align: left;
    `};
  ${(props) =>
    props.right &&
    css`
      text-align: right;
    `};
  ${(props) =>
    props.light &&
    css`
      font-weight: 300;
    `};
  ${(props) =>
    props.regular &&
    css`
      font-weight: 400;
    `};
  ${(props) =>
    props.medium &&
    css`
      font-weight: 500;
    `};
  ${(props) =>
    props.bold &&
    css`
      font-weight: 700;
    `};
  ${(props) =>
    props.black &&
    css`
      font-weight: 900;
    `};
`

export const ParagraphText = styled.div`
  font-size: 1.1rem;
  position: relative;

  line-height: 1.25;
  @media (min-width: 1024px) {
    font-size: 1.1rem;
  }
  @media (min-width: 1216px) {
    font-size: 1.1rem;
  }
  @media (min-width: 1408px) {
    font-size: 1.1rem;
  }

  ${(props) =>
    props.center &&
    css`
      text-align: left;
      margin-top: 2rem;

      @media (min-width: 1024px) {
        text-align: center;
      }
      @media (min-width: 1216px) {
        text-align: left;
      }
      @media (min-width: 1408px) {
        text-align: center;
      }
    `};
  ${(props) =>
    props.left &&
    css`
      text-align: left;
    `};
  ${(props) =>
    props.right &&
    css`
      text-align: right;
    `};
  ${(props) =>
    props.light &&
    css`
      font-weight: 300;
    `};
  ${(props) =>
    props.regular &&
    css`
      font-weight: 400;
    `};
  ${(props) =>
    props.medium &&
    css`
      font-weight: 500;
    `};
  ${(props) =>
    props.bold &&
    css`
      font-weight: 700;
    `};
  ${(props) =>
    props.black &&
    css`
      font-weight: 900;
    `};
`

export const TitleHeading = styled.div`
  font-size: 1.3rem;

  font-weight: 400;
  position: relative;
  @media (min-width: 1024px) {
    font-size: 1.8rem;
  }
  @media (min-width: 1216px) {
    font-size: 1.8rem;
  }
  @media (min-width: 1408px) {
    font-size: 1.8rem;
  }

  ${(props) =>
    props.center &&
    css`
      text-align: center;
      text-align: left;
      margin-top: 2rem;

      @media (min-width: 1024px) {
        text-align: center;
      }
      @media (min-width: 1216px) {
        text-align: left;
      }
      @media (min-width: 1408px) {
        text-align: center;
      }
    `};
  ${(props) =>
    props.left &&
    css`
      text-align: left;
    `};
  ${(props) =>
    props.right &&
    css`
      text-align: right;
    `};
  ${(props) =>
    props.bold &&
    css`
      font-weight: bold;
    `};
  ${(props) =>
    props.light &&
    css`
      font-weight: 300;
    `};
  ${(props) =>
    props.regular &&
    css`
      font-weight: 400;
    `};
  ${(props) =>
    props.medium &&
    css`
      font-weight: 500;
    `};
  ${(props) =>
    props.bold &&
    css`
      font-weight: 700;
    `};
  ${(props) =>
    props.black &&
    css`
      font-weight: 900;
    `};
`

export const SubtitleHeading = styled.div`
  font-size: 0.6rem;
  font-weight: 300;
  position: relative;
  @media (min-width: 1024px) {
    font-size: 0.8rem;
  }
  @media (min-width: 1216px) {
    font-size: 0.8rem;
  }
  @media (min-width: 1408px) {
    font-size: 0.8rem;
  }

  ${(props) =>
    props.center &&
    css`
      text-align: center;
    `};
  ${(props) =>
    props.left &&
    css`
      text-align: left;
    `};
  ${(props) =>
    props.right &&
    css`
      text-align: right;
    `};
  ${(props) =>
    props.light &&
    css`
      font-weight: 300;
    `};
  ${(props) =>
    props.regular &&
    css`
      font-weight: 400;
    `};
  ${(props) =>
    props.medium &&
    css`
      font-weight: 500;
    `};
  ${(props) =>
    props.bold &&
    css`
      font-weight: 700;
    `};
  ${(props) =>
    props.black &&
    css`
      font-weight: 900;
    `};
`

export const ButtonHeading = styled.div`
  font-size: 1.3rem;
  font-weight: 300;
  position: relative;
  @media (min-width: 1024px) {
    font-size: 1.3rem;
  }
  @media (min-width: 1216px) {
    font-size: 1.3rem;
  }
  @media (min-width: 1408px) {
    font-size: 1.3rem;
  }

  ${(props) =>
    props.center &&
    css`
      text-align: left;
      margin-top: 2rem;

      @media (min-width: 1024px) {
        text-align: center;
      }
      @media (min-width: 1216px) {
        text-align: left;
      }
      @media (min-width: 1408px) {
        text-align: center;
      }
    `};
  ${(props) =>
    props.left &&
    css`
      text-align: left;
    `};
  ${(props) =>
    props.right &&
    css`
      text-align: right;
    `};
  ${(props) =>
    props.light &&
    css`
      font-weight: 300;
    `};
  ${(props) =>
    props.regular &&
    css`
      font-weight: 400;
    `};
  ${(props) =>
    props.medium &&
    css`
      font-weight: 500;
    `};
  ${(props) =>
    props.bold &&
    css`
      font-weight: 700;
    `};
  ${(props) =>
    props.black &&
    css`
      font-weight: 900;
    `};
`
