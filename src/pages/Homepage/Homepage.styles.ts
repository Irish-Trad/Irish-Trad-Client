import styled from 'styled-components'
import Image from './image/session.jpg'

export const ExternalLink = styled.a`
  text-decoration: none;
  color: black;
  cursor: pointer;
`

export const H1 = styled.h1`
  font-size: 3em;
  text-align: center;
  font-family: meathflfregular;
  margin: 0.625em;

  @media screen and (min-width: 960px) {
    font-size: 5em;
  }

  @media screen and (min-width: 1281px) {
    font-size: 10em;
  }
`

export const IntroContainer = styled.div`
  @media screen and (min-width: 960px) {
    background: black;
    background-image: url(${Image});
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    flex-flow: column nowrap;
    height: 100vh;
  }

  @media screen and (min-width: 1281px) {
    padding: 0em 200px;
  }
`

export const H2 = styled.h2`
  font-size: 2em;
  font-weight: bold;
  margin: 0.625em 0em;
  text-align: center;
  text-decoration: underline green 5px;
  text-underline-offset: 15px;
  padding-top: 1.25em;

  @media screen and (min-width: 960px) {
    margin: 0em;
    padding: 20px 0px;
  }

  @media screen and (min-width: 1281px) {
    padding-top: 0;
  }
`

export const Text = styled.p`
  font-size: 1.125em;

  @media screen and (min-width: 960px) {
    font-size: 1.5em;
    padding: 0em 3.125em;
  }
`

export const Divider = styled.section`
  box-shadow: inset 0 5px 0 0 rgba(0, 0, 0, 0.05),
    inset 0 0.1em 0.1em 0 rgba(0, 0, 0, 0.025);

  @media screen and (min-width: 1281px) {
    padding: 3.125em 12.5em;
  }
`
