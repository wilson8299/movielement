import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyles = createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;

    &:focus{
      outline: none;
    }
  }
  
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    /* transition: all 0.50s linear; */
  }
  `;

export default GlobalStyles;
