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
  font-size: 23px;
  font-weight: bold;
  margin: 10px 0px;
`

export const Text = styled.p`
  font-size: 18px;
`

export const CenterText = styled(Text)`
  text-align: center;
`

export const InternalLink = styled(Link)`
  font-size: 23px;
  font-weight: bold;
  color: #006400;
  text-decoration: none;
  text-align: center;
`

export const LinkText = styled.p``

export const ExternalLink = styled.a`
  font-size: 26px;
  font-weight: bold;
  color: #006400;
  text-decoration: none;
  text-align: center;
`
