import React from 'react'

import { FooterContainer, StyledLink, StyledIcon } from './Footer.styles'

const Footer: React.FunctionComponent = () => (
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

export default Footer
