import { StyledFooter } from './Footer.styles'

import DiscordIcon from 'icons/Discord/Discord.component'
import MailchimpIcon from 'icons/Mailchimp/Mailchimp.component'

const Footer = () => (
  <StyledFooter component="footer" p={2}>
    <DiscordIcon />
    <MailchimpIcon />
  </StyledFooter>
)

export default Footer
