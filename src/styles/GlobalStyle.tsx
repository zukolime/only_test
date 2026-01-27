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

  @media (max-width: 768px) {
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
  justify-content: center;
  align-items: center;
  max-width: 100%;
  min-height: 100dvh;
  height: 100dvh;

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: ${colors.secondary};
  }

  &:after {
    content: '';
    position: absolute;
    width: 1px;
    height: 100%;
    background-color: ${colors.secondary};
  }

  @media (max-width: 768px) {
    &:before,
    &:after {
      display: none;
    }
  }
`;

export const SectionContent = styled.div`
  align-self: flex-start;
  padding-left: clamp(42px, 2vw, 78px);
  padding-right: 40px;

  @media (max-width: 768px) {
    padding: 0;
  }
`;
