import Navbar from 'components/Navbar'

import {
  HeaderContainer,
  Logo,
  InternalLink,
  StyledIcon,
  FullMobileContainer,
} from './MobileHeader.styles'

type Props = {
  hidden: boolean
  toggleHidden: any
}

const MobileHeader: React.FC<Props> = ({ hidden, toggleHidden }) => {
  return (
    <HeaderContainer>
      {!hidden ? (
        <Logo>
          <InternalLink to="/" onClick={() => toggleHidden(false)}>
            Irish-Trad.net
          </InternalLink>
          <StyledIcon onClick={() => toggleHidden(!hidden)} icon="bars" />
        </Logo>
      ) : (
        <FullMobileContainer>
          <Logo>
            <InternalLink to="/" onClick={() => toggleHidden(false)}>
              Irish-Trad.net
            </InternalLink>
            <StyledIcon onClick={() => toggleHidden(!hidden)} icon="bars" />
          </Logo>
          <Navbar toggleHidden={toggleHidden} hidden={hidden} />
        </FullMobileContainer>
      )}
    </HeaderContainer>
  )
}

export default MobileHeader
