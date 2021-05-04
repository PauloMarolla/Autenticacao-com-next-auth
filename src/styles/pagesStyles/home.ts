import styled from 'styled-components';


export const ContainerHome = styled.div`
  width: 100%;
  height: 100vh;
  background: url('/background-home.svg') no-repeat;
  background-size: cover;
`

export const ContentHome = styled.main`
  max-width: 112rem;
  height: 100vh;
  gap: 4rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
`

export const Descriptions = styled.div`
  font-size: 2.4rem;

  h2 {
    font-size: 3.2rem;
    color: ${({theme}) => theme.primary800};
    letter-spacing: 0.15rem;
  }

  p {
    font-size: 1.8rem;
    line-height: 150%;
    color: ${({theme}) => theme.primary800};
    padding: 4rem 0;
  }

  span {
    display: block;
    font-weight: 600;
    color: ${({theme}) => theme.primary600};
    padding-bottom: 2rem;
  }

  strong {
    color: ${({theme}) => theme.primary800};
  }

`

export const LoggedWith = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h4 {
    font-size: 3.2rem;
    color: ${({theme}) => theme.primary800};
    font-weight: 600;
  }
`