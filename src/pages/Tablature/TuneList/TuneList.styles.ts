import styled from 'styled-components'

export const Section = styled.section`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`

export const InternalLink = styled.a`
  font-size: 1em;
  color: green;
  margin: 0.625em;
  text-decoration: none;
  border: 3px solid green;
  padding: 0.625em;

  @media screen and (min-width: 960px) {
    font-size: 2em;
  }
`
