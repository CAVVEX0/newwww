import { createGlobalStyle } from "styled-components";
import "@fontsource/roboto";
import "@fontsource/old-standard-tt";

const GlobalStyles = createGlobalStyle`

*,*::before,*::after{
  margin: 0;
  padding: 0;
}

body {
  font-family: "Roboto", sans-serif; 
  overflow-x: hidden;
}
h1,h2,h3,h4,h5,h6{
  margin: 0;
  padding: 0;
}
a{
  color: inherit;
  text-decoration: none;
}

@layer utilities {
  .square {
    aspect-ratio: 1 / 1;
  }
}

`;

export default GlobalStyles;
