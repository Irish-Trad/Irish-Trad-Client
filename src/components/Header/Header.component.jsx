import React, { useState } from 'react'

import {
  HeaderContainer,
  Logo,
  DesktopNav,
  NavBar,
  InternalLink,
  StyledIcon
} from './Header.styles'

const Header = () => {
  const [hidden, toggleHidden] = useState(false)

  return (
    <HeaderContainer>
      <Logo>
        <InternalLink to="/" onClick={() => toggleHidden(false)}>
          Irish-Trad.net
        </InternalLink>
        <DesktopNav>
          <InternalLink to="/lessons" onClick={() => toggleHidden(!hidden)}>
            Lessons
          </InternalLink>
          <InternalLink to="/chords" onClick={() => toggleHidden(!hidden)}>
            Chords
          </InternalLink>
          <InternalLink to="/clef-to-tab" onClick={() => toggleHidden(!hidden)}>
            Clef to TAB
          </InternalLink>
          <InternalLink to="/terminology" onClick={() => toggleHidden(!hidden)}>
            Terminology
          </InternalLink>
        </DesktopNav>
        <StyledIcon onClick={() => toggleHidden(!hidden)} icon="bars" />
      </Logo>
      {hidden ? (
        <NavBar>
          <InternalLink to="/lessons" onClick={() => toggleHidden(!hidden)}>
            Lessons
          </InternalLink>
          <InternalLink to="/chords" onClick={() => toggleHidden(!hidden)}>
            Chords
          </InternalLink>
          <InternalLink to="/clef-to-tab" onClick={() => toggleHidden(!hidden)}>
            Clef to TAB
          </InternalLink>
          <InternalLink to="/terminology" onClick={() => toggleHidden(!hidden)}>
            Terminology
          </InternalLink>
        </NavBar>
      ) : null}
    </HeaderContainer>
  )
}

export default Header
