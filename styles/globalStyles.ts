import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles  = createGlobalStyle`

:root {
  font-size: 10px;

  @media(max-width: 1080px) {
    font-size: 56,25% !important;
  }

  @media(max-width: 768px) {
    font-size: 50% !important;
  }
}


  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    &, input, select, textarea {
      font-family: "inter", sans-serif;
    }
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  ul, li {
    list-style: none;
  }
  
`

export const Container = styled.div`
  width: 100%;
  max-width: 112rem;
  margin: 0 auto;
`
