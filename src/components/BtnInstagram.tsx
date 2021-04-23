import { FaInstagramSquare } from 'react-icons/fa'
import styled from 'styled-components';

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
  margin-bottom: 2rem;
  color: ${({theme}) => theme.white};
  background: ${({theme}) => theme.instagram};
  background-size: 120%;
  box-shadow: 0 .3rem .8rem rgba(0,0,0,0.15);
  background-position: left;

  svg {
    margin-right: 1rem;
    transition: all .2s ease-in-out;
  }

  &:hover {
    background-position: right;

    svg {
      color: white;
     
    }
  }
`

export function BtnInstagram() {
  return (
    <Button>
      <FaInstagramSquare size={'2.4rem'} />
      Continue with Instagram
    </Button>
  )
}

