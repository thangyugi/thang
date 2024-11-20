import styled from 'styled-components'

export const Card = styled.div`
  overflow: hidden;
  min-height: 400px;
  height: 100%;
  width: 100%;
  border: 1px solid #ffffff2b;
  border-radius: var(--radius-md);
  background-color: #000000;
  color: #ffffff;
  .summary {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: repeat(3, auto);
    grid-template-areas:
      'featureImage'
      'main';
    row-gap: 18px;

    .summary-image {
      height: 300px;
      img {
        aspect-ratio: 4 / 3;
      }
    }
    .summary-image {
      grid-area: featureImage;
      position: relative;
      padding-bottom: 55%;
      height: 0;
      border-bottom: 1px solid #252626;

      img {
        /* -webkit-filter: grayscale(100%);
        filter: grayscale(100%); */

        /* position: absolute; */
        /* left: 0;
        top: 0;
        width: 100%;
        height: 100%; */
        object-fit: cover;
      }
    }
    .summary-main {
      padding: 0 18px;
      grid-area: main;
      display: grid;
      grid-template-columns: auto;
      grid-template-rows: repeat(4, auto);
      grid-template-areas:
        'date'
        'title'
        'description';
      .title {
        grid-area: title;
        /* color: #000; */
        font-size: 45px;
        padding: 12px 0;
      }

      .description {
        grid-area: description;
        font-size: 16px;
        padding: 14px 0;
      }
      .date {
        grid-area: date;
      }
    }
    @media (min-width: 1281px) {
      /* CSS */
    }
    @media (min-width: 1025px) and (max-width: 1280px) {
      /* CSS */
    }
    @media (min-width: 768px) and (max-width: 1024px) {
      /* CSS */
    }
    @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
      /* CSS */
    }
    @media (min-width: 481px) and (max-width: 767px) {
      .summary {
        grid-template-rows: repeat(1, auto);
      }
    }
    @media (min-width: 320px) and (max-width: 480px) {
      .summary {
        grid-template-rows: repeat(1, auto);
      }
    }
  }

  .foot-info {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: space-between;
    padding: 15px 0 5px 0;

    ul {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;

      li {
        list-style: none;
        padding: 0px 8px 0 0;
      }
    }
  }

  :hover {
    cursor: pointer;
    background-color: #ffffff00;
    .summary-image {
      img {
        /* -webkit-filter: none;
        filter: none; */
      }
    }
  }
  /// thisß÷÷÷÷÷
  /// thisß÷÷÷÷÷
  /// thisß÷÷÷÷÷
  /// thisß÷÷÷÷÷
  /// thisß÷÷÷÷÷
  /// thisß÷÷÷÷÷
  /// thisß÷÷÷÷÷
  /// thisß÷÷÷÷÷
  /// thisß÷÷÷÷÷
  @media only screen and (min-width: 0px) and (max-width: 576px) {
    width: 100%;
  }
`
