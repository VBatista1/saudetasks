import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
    --black: #000;
    --white: #fff;
    --light-grey: #F5F6FA;
    --light-blue: #2E5763;
    --dark-blue: #13414D;
  }

  html, body, main, #__next {
    height: 100%;
  }

html,
body {
  padding: 0;
  margin: 0;
  font-family: Roboto, sans-serif;
}

body {
  overflow: auto;
}

html {
  @media (max-width: 1080px){
      font-size: 93.75%;
  }

  @media (max-width: 720px){
      font-size: 87.5%;
  }
}

body {
  -webkit-font-smoothing: antialised;
} 

* {
  box-sizing: border-box;
}

h1, h2, h3, h4, h5, h6, strong, p {
  margin: 0;
}

`;
