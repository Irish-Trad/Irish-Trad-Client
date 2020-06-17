import styled from 'styled-components'

export const Section = styled.section`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`

export const Title = styled.div`
  margin: 40px 0px;
`

export const InternalLink = styled.a`
  font-size: 28px;
  color: green;
  margin: 10px;
  text-decoration: none;
  border: 3px solid green;
  padding: 10px;
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
