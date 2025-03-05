import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: 'TacticSans';
    src: url('/assets/font/MyFont.woff2') format('woff2'),
         url('/assets/font/MyFont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    background-color: #000;
    color: #333;
  }

`;