import React, { useState } from 'react'
import Navbar from 'components/Navbar'

import {
  HeaderContainer,
  Logo,
  InternalLink,
  StyledIcon,
} from './MobileHeader.styles'

const MobileHeader: React.FC = () => {
  const [hidden, toggleHidden] = useState(false)

  return (
    <HeaderContainer>
      <Logo>
        <InternalLink to="/" onClick={() => toggleHidden(false)}>
          Irish-Trad.net
        </InternalLink>
        <StyledIcon onClick={() => toggleHidden(!hidden)} icon="bars" />
        {hidden ? <Navbar toggleHidden={toggleHidden} /> : null}
      </Logo>
    </HeaderContainer>
  )
}

export default MobileHeader
