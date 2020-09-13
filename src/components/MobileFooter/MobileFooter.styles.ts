import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const FooterContainer = styled.footer`
  background: linear-gradient(to top, green, #006400);
  color: white;
  display: flex;
  justify-content: center;

  @media screen and (min-width: 960px) {
    display: none;
  }
`

export const StyledLink = styled.a``

export const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 36px;
  color: white;
  margin: 10px;
`
