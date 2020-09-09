import styled from 'styled-components'
import Image from './image/session.jpg'

export const ExternalLink = styled.a`
  text-decoration: none;
  color: black;
  cursor: pointer;
`

export const H1 = styled.h1`
  text-align: center;
  font-family: meathflfregular;
  font-size: 10em;
  margin: 10px;
`

export const IntroContainer = styled.div`
  background-image: url(${Image});
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-flow: column nowrap;
  padding: 50px 200px;

  @media screen and (min-width: 750px) {
    height: 100vh;
  }
`

export const H2 = styled.h2`
  font-size: 2em;
  font-weight: bold;
  margin: 10px 0px;
  text-align: center;
  text-decoration: underline green 5px;
  text-underline-offset: 15px;
`

export const Text = styled.p`
  font-size: 32px;
`

export const Divider = styled.section`
  box-shadow: inset 0 5px 0 0 rgba(0, 0, 0, 0.05),
    inset 0 0.1em 0.1em 0 rgba(0, 0, 0, 0.025);

  @media screen and (min-width: 750px) {
    padding: 50px 200px;
  }
`
