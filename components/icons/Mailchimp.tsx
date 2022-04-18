import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC } from 'react'

const MailChimp: FC = () => (
  <a
    href='https://mailchi.mp/bfa9fa63aaab/irish-trad'
    target='_blank'
    rel='noreferrer'
  >
    <FontAwesomeIcon
      className='text-4xl text-white'
      icon={['fab', 'mailchimp']}
    />
  </a>
)

export default MailChimp
