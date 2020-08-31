import styled from 'styled-components'

import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const HeaderContainer = styled.header`
  background: linear-gradient(to bottom, green, darkgreen);
  color: white;
  font-family: meathflfregular;
  font-size: 24px;

  @media screen and (min-width: 760px) {
    display: none;
  }
`

export const Logo = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
`

export const InternalLink = styled(Link)`
  text-decoration: none;
  color: white;
  padding: 12px 24px;

  &:hover {
    color: black;
    background-color: white;
  }
`

export const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 24px;
  color: white;
  padding: 13px 24px;
  cursor: pointer;

  &:hover {
    color: black;
    background-color: white;
  }

  @media screen and (min-width: 850px) {
    display: none;
  }
`
