import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0; 
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    height: 100vh;
  }

  html{
    @media(max-width:1080px){
      font-size:93.75%; //15px
    }
      @media(max-width:720px){
      font-size: 87.5%; //14px
    }
  }

  body {
    background-color: ${({ theme }) => theme['gray-900']};
    color: ${({ theme }) => theme['gray-100']};
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    -webkit-font-smoothing: antialiased;
  }

  button{
    cursor: pointer;
  }
    
  [disabled]{
    opacity: 0.6;
    cursor: not-allowed;
  }

`
