import styled from "styled-components";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const HeaderContainer = styled.header`
  background-color: #006400;
  color: white;
  font-family: meathflfregular;
  font-size: 24px;
`;

export const NavBar = styled.nav`
  display: flex;
  justify-content: center;
  flex-flow: column wrap;
  text-align: center;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: ;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  padding: 12px 24px;

  &:hover {
    color: black;
    background-color: white;
  }
`;

export const BarsIcon = styled(FontAwesomeIcon)`
  font-size: 24px;
  color: white;
  padding: 12px 24px;

  &:hover {
    color: black;
    background-color: white;
  }
`;
