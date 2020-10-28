import styled from 'styled-components'

export const Title = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  margin: 40px 0em;
`

export const SearchInput = styled.input`
  font-size: 16px;
  padding: 10px;
  border: 3px solid green;
  border-radius: 5px;
  color: green;

  width: 70%;

  @media screen and (min-width: 960px) {
    width: 360px;
  }
`

export const Button = styled.button`
  background: linear-gradient(to bottom, green, darkgreen);
  border: none;
  border-radius: 5px;
  color: white;
  margin: 5px;
  font-size: 16px;
  padding: 10px 30px;
  cursor: pointer;

  &:hover {
    background: linear-gradient(to bottom, darkgreen, green);
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;

  @media screen and (min-width: 960px) {
    width: 380px;
  }
`
