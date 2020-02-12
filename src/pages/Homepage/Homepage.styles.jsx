import styled from 'styled-components'

export const Container = styled.main`
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

export const Text = styled.p``

export const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  justify-content: ;
  align-items: center;
`

export const Img = styled.img`
  width: 50%;

  @media screen and (min-width: 750px) {
    width: 25%;
  }
`

export const Figcaption = styled.figcaption``

export const Link = styled.a`
  text-decoration: none;
  color: black;
  cursor: pointer;
`
