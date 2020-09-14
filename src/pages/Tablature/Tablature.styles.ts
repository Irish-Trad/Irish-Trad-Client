import styled from 'styled-components'

export const Section = styled.section`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`

export const Title = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  margin: 40px 0em;
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

export const Button = styled.button`
  text-align: center;
  color: white;
  background: #006400;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  padding: 0.625em 15px;
  cursor: pointer;
  margin: 5px;
`
