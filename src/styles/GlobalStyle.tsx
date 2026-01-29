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
  margin-right: clamp(10px, 10vw, 160px);
  margin-left: clamp(20px, 20vw, 320px);

  border-right: 1px solid ${colors.secondary};
  border-left: 1px solid ${colors.secondary};

  @media (max-width: 1350px) {
    margin-right: 6vw;
    margin-left: 6vw;
  }

  @media (max-width: 992px) {
    max-width: 90%;
    margin: 0 auto;
    border-right: none;
    border-left: none;
  }
`;
