import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const FooterContainer = styled.footer`
  background: linear-gradient(to top, green, #006400);
  color: white;
  display: flex;
  justify-content: center;
`

export const StyledLink = styled.a``

export const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 36px;
  color: white;
  margin: 0.625em;

  &:hover {
    color: rgba(0, 0, 0, 0.5);
  }
`
