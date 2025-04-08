import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    background-color: #f2f2f2;
    color: #333;
  }

  button {
    cursor: pointer;
  }

  input, textarea, button {
    font-family: inherit;
  }
`;

export default GlobalStyle;
