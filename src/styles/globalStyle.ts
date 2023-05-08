import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export const GlobalStyle = createGlobalStyle`
${reset};
  body {
  	line-height: 1;
    font-family: 'Noto Sans KR', sans-serif;
  }
 
  html,
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  a,
  button {
    cursor: pointer;
  }

  input,
  select,
  textarea {
    background-color: transparent;
  }

  input, textarea { 
    user-select: auto;
  }

  input:focus, textarea:focus {
    outline: none;
  }

  button {
    padding: 0;
    cursor: pointer;
  }
`
