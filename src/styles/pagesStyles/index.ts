import styled from 'styled-components';
import { darken, lighten, setLightness } from 'polished';

export const ContainerLogin = styled.div`
  width: 100%;
  height: 100vh;
  background: url('/bg-login.svg') center center;
  background-size: cover;

  @media(max-width: 978px) {
    background: ${({theme}) => theme.background500};
  }
`

export const ContentLogin = styled.main`
  display: grid;
  grid-template-columns: 1fr 1.35fr;
  height: 100vh;
  grid-template-areas: '. form';
  @media(max-width: 978px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  section {
    grid-area: form;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1 {
      font-size: 5.4rem;
      color: ${({theme}) => theme.primary700};
      font-weight: 600;
      padding-bottom: 4rem;
    }

    form {
      display: block;
      width: 36rem;

      button {
        height: 5.5rem;
        background: ${({theme}) => theme.primary800};
        color: ${({theme}) => theme.white};
        width: 100%;
        border: 0;
        border-radius: .4rem;
        box-shadow: 0 .3rem .8rem rgba(7, 31, 38, .35);
        font-size: 2rem;
        font-weight: 500;
        transition: background .2s ease-in-out;

        &:hover {
          background: ${({theme}) =>  setLightness('0.14', theme.primary800)};
        }
      }
    }
    
  }
`

export const Divider = styled.span`
  max-width: 38rem;
  display: flex;
  align-items: center;
  color: #071F26;
  font-weight: 600;
  letter-spacing: .5rem;
  font-size: 2rem;
  width: 100%;
  height: 5.5rem;

  &:after, &:before {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background: #071F26;
    margin: 0 1rem 0 1rem;
  }
`