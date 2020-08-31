import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const Navigation = styled.nav`
  display: flex;
  flex-flow: column nowrap;

  @media screen and (min-width: 849px) {
    flex-grow: 1;
    /* overflow-y: scroll; */
    margin: 30px 0px;
    /* scrollbar-width: none; */
  }
`

export const InternalLink = styled(Link)`
  text-decoration: none;
  color: white;
  padding: 12px 24px;

  &:hover {
    background: rgba(0, 0, 0, 0.15);
  }
`
