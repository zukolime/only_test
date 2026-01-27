import styled, { createGlobalStyle } from 'styled-components';
import { colors } from './colors';

export const GlobalStyle = createGlobalStyle`
    @font-face {
      font-family: 'Bebas Neue';
      src:
        url('@/assets/fonts/BebasNeue-Regular.woff2') format('woff2'),
        url('@/assets/BebasNeue-Regular.woff') format('woff');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
    }

    @font-face {
      font-family: 'PT Sans', sans-serif;
      src:
        url('/@/assets/PTSans-Regular.woff2') format('woff2'),
        url('@/assets/PTSans-Regular.woff') format('woff');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
    }

    * {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
    }

    body {          
      font-family: 'PT Sans', sans-serif;
      background-color: #fff;
      color: ${colors.primary};

    }
      
    ul,
    li {
      list-style-type: none;
    }

    button {
      cursor: pointer;
      background: transparent;
    }

`;

export const Container = styled.div`
  max-width: 1440px;
  margin-right: clamp(0px, 10vw, 160px);
  margin-left: clamp(20px, 20vw, 320px);

  border-right: 1px solid ${colors.secondary};
  border-left: 1px solid ${colors.secondary};

  @media (max-width: 760px) {
    max-width: 90%;
    margin: 0 auto;
    border-right: none;
    border-left: none;
  }
`;

export const Section = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top: clamp(59px, 10vw, 170px);
  padding-bottom: clamp(13px, 2vw, 104px);

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: ${colors.secondary};
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    width: 1px;
    height: 100%;
    background-color: ${colors.secondary};
  }

   @media (max-width: 920px) {
    &:before,
    &:after {
      display: none;
    }
`;
