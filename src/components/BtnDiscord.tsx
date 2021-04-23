import { FaDiscord } from 'react-icons/fa'
import styled from 'styled-components';
import { darken } from 'polished';

const Button = styled.button`
  width: 100%;
  max-width: 36rem;
  height: 5.5rem;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  transition: all .2s ease-in-out;
  font-size: 1.8rem;
  border: 0;
  border-radius: .4rem;
  color: ${({theme}) => theme.white};
  box-shadow: 0 .3rem .8rem rgba(0,0,0,0.15);
  background: ${({theme}) => theme.discord};
  margin-bottom: 2rem;

  svg {
    margin-right: 1rem;
    transition: all .2s ease-in-out;
  }

  &:hover {
    background: ${({theme}) => darken('0.05', theme.discord)};

    svg {
      color: white;
     
    }
  }
`

export function BtnDiscord() {
  return (
  <Button>
    <FaDiscord size={'2.4rem'} />
    Continue with Discord
  </Button>
  )
}