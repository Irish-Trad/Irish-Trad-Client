import React from "react";

import { HeaderContainer, Logo, NavBar, StyledLink } from "./Header.styles";

const Header = () => (
  <HeaderContainer>
    <Logo>
      <StyledLink to="/">Irish-Trad.net</StyledLink>
    </Logo>
    <NavBar>
      <StyledLink to="/lessons">Lessons</StyledLink>
      <StyledLink to="/chords">Chords</StyledLink>
      <StyledLink to="/clef-to-tab">Clef to TAB</StyledLink>
      <StyledLink to="/terminology">Terminology</StyledLink>
    </NavBar>
  </HeaderContainer>
);

export default Header;
