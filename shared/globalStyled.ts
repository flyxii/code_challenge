import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
  }
  *,
  *::before,
  *::after {
      box-sizing: inherit;
  }
  html {
    font-family: 'Libre Franklin', sans-serif;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }
  body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Libre Franklin', sans-serif;
  }
`;
