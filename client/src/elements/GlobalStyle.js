import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    font-size: 1.6rem;
    font-family: Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #FFFFFF;
    color: #242333;
    line-height: 1.8;

  }
`;
export default GlobalStyle;
