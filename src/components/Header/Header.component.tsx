import React, { useState } from 'react'

import {
  HeaderContainer,
  Logo,
  DesktopNav,
  NavBar,
  InternalLink,
  StyledIcon
} from './Header.styles'

const Header: React.FunctionComponent = () => {
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
          <InternalLink to="/community" onClick={() => toggleHidden(!hidden)}>
            Community
          </InternalLink>
          <InternalLink to="/newsletter" onClick={() => toggleHidden(!hidden)}>
            Newsletter
          </InternalLink>
          <InternalLink to="/tabs" onClick={() => toggleHidden(!hidden)}>
            Tabs
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
          <InternalLink to="/community" onClick={() => toggleHidden(!hidden)}>
            Community
          </InternalLink>
          <InternalLink to="/newsletter" onClick={() => toggleHidden(!hidden)}>
            Newsletter
          </InternalLink>
          <InternalLink to="/tabs" onClick={() => toggleHidden(!hidden)}>
            Tabs
          </InternalLink>
        </NavBar>
      ) : null}
    </HeaderContainer>
  )
}

export default Header
