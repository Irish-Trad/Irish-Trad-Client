import styled from 'styled-components'
import { HashLink as Link } from 'react-router-hash-link'

export const ButtonContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
`

export const Button = styled.button`
  width: 75px;
  color: white;
  background: #006400;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  padding: 5px;
  cursor: pointer;
`

export const InternalLink = styled.a`
  text-decoration: none;
  color: black;
  margin: 5px;
`

export const HashLink = styled(Link)`
  color: black;
`

export const ExternalLink = styled.a`
  color: black;
`

export const ImageContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
`

export const Image = styled.img`
  width: 100%;
  border: 1px solid black;
`
