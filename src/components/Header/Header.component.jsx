import React, { useState } from "react";

import {
  HeaderContainer,
  Logo,
  NavBar,
  StyledLink,
  BarsIcon
} from "./Header.styles";

import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [hidden, toggleHidden] = useState(false);

  return (
    <HeaderContainer>
      <Logo>
        <StyledLink to="/">Irish-Trad.net</StyledLink>
        <BarsIcon onClick={() => toggleHidden(!hidden)} icon={faBars} />
      </Logo>
      {hidden ? (
        <NavBar>
          <StyledLink to="/lessons">Lessons</StyledLink>
          <StyledLink to="/chords">Chords</StyledLink>
          <StyledLink to="/clef-to-tab">Clef to TAB</StyledLink>
          <StyledLink to="/terminology">Terminology</StyledLink>
        </NavBar>
      ) : null}
    </HeaderContainer>
  );
};

export default Header;
