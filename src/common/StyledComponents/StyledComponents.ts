import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const H1 = styled.h1`
  text-align: center;
  font-family: meathflfregular;
  font-size: 55px;
  margin: 10px;
`

export const H2 = styled.h2`
  font-size: 2em;
  font-weight: bold;
  margin: 10px 0px;
  text-align: center;
`

export const Text = styled.p`
  font-size: 18px;
`

export const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Image = styled.img`
  width: 50%;

  @media screen and (min-width: 960px) {
    width: 25%;
  }
`

export const Figcaption = styled.figcaption`
  text-align: center;
`
export const InternalLink = styled(Link)``

export const ExternalLink = styled.a`
  color: black;
  cursor: pointer;
`
