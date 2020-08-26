import styled from 'styled-components'

import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const HeaderContainer = styled.header`
  background-color: #006400;
  color: white;
  font-family: meathflfregular;
  font-size: 24px;
`

export const DesktopNav = styled.nav`
  margin: auto;

  @media screen and (max-width: 849px) {
    display: none;
  }

  @media screen and (max-width: 850px) {
    width: 650px;
  }

  @media screen and (min-width: 1380px) {
    width: 1200px;
  }
`

export const NavBar = styled.nav`
  display: flex;
  justify-content: center;
  flex-flow: column wrap;
  text-align: center;

  @media screen and (min-width: 849px) {
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
