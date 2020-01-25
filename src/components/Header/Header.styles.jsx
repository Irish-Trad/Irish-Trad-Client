import styled from "styled-components";

import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  background-color: #006400;
  color: white;
`;

export const NavBar = styled.nav`
  display: flex;
  justify-content: center;
`;

export const Logo = styled.div``;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;

  margin: 10px;
`;
