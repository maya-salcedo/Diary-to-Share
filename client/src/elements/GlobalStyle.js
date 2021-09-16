import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
  font-size: 62.5%; /* 16px x 62.5 = 10px = 1rem */
  box-sizing: border-box;
  }
  body {
    margin: 0;
    height: 100vh;
    font-size: 1.6rem;
    font-family: Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #012443;
    line-height: 1.8;

  }
  #root {
    height: 100%;
  }
  main {
    padding: 1rem;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
`;
export default GlobalStyle;
