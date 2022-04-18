import { FC } from 'react'
import DiscordIcon from 'components/icons/Discord'
import MailchimpIcon from 'components/icons/Mailchimp'

const Footer: FC = () => (
  <footer className='flex py-4 justify-evenly'>
    <DiscordIcon />
    <MailchimpIcon />
  </footer>
)

export default Footer
