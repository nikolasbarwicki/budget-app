import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`


  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    font-family: 'Raleway', sans-serif;
    color: #3D454E;
  }
`;

export default GlobalStyle;
