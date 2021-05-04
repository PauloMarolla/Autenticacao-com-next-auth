import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

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

  label {
    font-size: 2rem;
    color: ${({theme}) => theme.primary800};
    font-weight: 500;
  }

  input, select, textarea {
    display: block;
    width: 100%;
    background: ${({theme}) => theme.background600};
    outline: none;
    border-radius: .4rem;
    border: 2px solid transparent;
    height: 4.5rem;
    padding: 0 20px;
    margin: .5rem 0 2rem 0;
    font-size: 1.6rem;
    color: ${({theme}) => theme.primary800};
    transition: all .2s ease-in-out;

    &:hover, &:focus {
      background: ${({theme}) => theme.white};
      border: 2px solid ${({theme}) => theme.primary800};
      box-shadow: 0 0 .6rem rgba(7, 31, 38, .35);
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
