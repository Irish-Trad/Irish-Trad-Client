import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const StyledLink = styled.a``

export const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 106px;
  color: #006400;
  margin: 0.625em;
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
`

export const Button = styled.button`
  height: 50px;
  color: white;
  background: #006400;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  padding: 0.625em;
  cursor: pointer;
`
