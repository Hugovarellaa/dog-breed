import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html{
    @media(max-width:1080px){
      font-size:93.75%; //15px
    }
    @media(max-width:720px){
      font-size: 87.5%; //14px
    }
    }

  body, input, button, textarea {
    font-size: 1rem;
    font-family: 'Seoulhangang', sans-serif;
    font-weight: normal;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  li {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

`
