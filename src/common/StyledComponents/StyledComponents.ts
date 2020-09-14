import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const H1 = styled.h1`
  text-align: center;
  font-family: meathflfregular;
  font-size: 3.4375em;
  margin: 0.625em;
`

export const H2 = styled.h2`
  font-size: 2em;
  font-weight: bold;
  margin: 0.625em 0em;
  text-align: center;
`

export const Text = styled.p`
  font-size: 1.125em;

  @media screen and (min-width: 960px) {
    font-size: 1.5em;
  }
`

export const Bold = styled.b``

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

export const Divider = styled.section`
  @media screen and (min-width: 960px) {
    padding: 0em 12.5em;
  }
`

export const CenterText = styled(Text)`
  text-align: center;
`

export const Button = styled.button``
