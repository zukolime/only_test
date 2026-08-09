import styled, { createGlobalStyle } from 'styled-components';

import BebasNeueWoff from '@/assets/fonts/BebasNeue-Regular.woff';
import BebasNeueWoff2 from '@/assets/fonts/BebasNeue-Regular.woff2';
import PTSansWoff from '@/assets/fonts/PTSans-Regular.woff';
import PTSansWoff2 from '@/assets/fonts/PTSans-Regular.woff2';

import { colors } from './colors';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Bebas Neue';
    src:
      url(${BebasNeueWoff2}) format('woff2'),
      url(${BebasNeueWoff}) format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'PT Sans';
    src:
      url(${PTSansWoff2}) format('woff2'),
      url(${PTSansWoff}) format('woff');
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

  #root {
  position: relative;
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
    margin-left: 8vw;
  }

  @media (max-width: 770px) {
    max-width: 90%;
    margin: 0 auto;
    border-right: none;
    border-left: none;
  }
`;
