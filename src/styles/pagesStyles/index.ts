import styled from 'styled-components';

export const ContainerLogin = styled.div`
  width: 100%;
  height: 100vh;
  background: url('/bg-login.svg') center center;
  background-size: cover;
`

export const ContentLogin = styled.main`
  display: grid;
  grid-template-columns: 1fr 1.35fr;
  height: 100vh;
  grid-template-areas: '. form';

  section {
    grid-area: form;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1 {
      font-size: 5.4rem;
      color: #13282E;
      font-weight: 600;
      padding-bottom: 4rem;
    }

    form {
      display: block;
      width: 36rem;

      button {
        height: 5.5rem;
        background: #071F26;
        color: #FFF;
        width: 100%;
        border: 0;
        border-radius: .4rem;
        box-shadow: 0 .3rem .8rem rgba(7, 31, 38, .35);
        font-size: 2rem;
        font-weight: 500;
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