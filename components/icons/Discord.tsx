import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC } from 'react'

const Discord: FC = () => (
  <a href='https://discord.gg/Mq9jeA8' target='_blank' rel='noreferrer'>
    <FontAwesomeIcon
      className='text-4xl text-white'
      icon={['fab', 'discord']}
    />
  </a>
)

export default Discord
