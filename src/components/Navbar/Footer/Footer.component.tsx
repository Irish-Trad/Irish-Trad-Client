import { StyledFooter } from './Footer.styles'

import DiscordIcon from 'icons/Discord'
import MailchimpIcon from 'icons/Mailchimp'

const Footer = () => (
  <StyledFooter component="footer" p={2}>
    <DiscordIcon />
    <MailchimpIcon />
  </StyledFooter>
)

export default Footer
