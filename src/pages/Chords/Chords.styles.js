import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const MainContainer = styled.main`
  max-width: 960px;
  margin: auto;
  padding: 10px;
`

export const H1 = styled.h1`
  text-align: center;
  font-family: meathflfregular;
  font-size: 55px;
  margin: 10px;
`
export const H2 = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin: 10px 0px;
`

export const A = styled.a`
  text-decoration: none;
  color: black;
`

export const InternalLink = styled(Link)``

export const Text = styled.p`
  font-size: 18px;
`

export const CenterText = styled(Text)`
  text-align: center;
`

export const Bold = styled.b``

export const ButtonContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
`

export const Button = styled.button`
  width: 100px;
  color: white;
  background: #006400;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  padding: 5px;
  cursor: pointer;
  margin: 5px;
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
