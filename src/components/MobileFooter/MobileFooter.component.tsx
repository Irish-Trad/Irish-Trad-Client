import React from 'react'

import { FooterContainer, StyledLink, StyledIcon } from './MobileFooter.styles'

const MobileFooter: React.FC = () => (
  <FooterContainer>
    <StyledLink href="https://discord.gg/Mq9jeA8" target="_blank">
      <StyledIcon icon={['fab', 'discord']} />
    </StyledLink>
    <StyledLink
      href="https://mailchi.mp/bfa9fa63aaab/irish-trad"
      target="_blank"
    >
      <StyledIcon icon={['fab', 'mailchimp']} />
    </StyledLink>
  </FooterContainer>
)

export default MobileFooter
