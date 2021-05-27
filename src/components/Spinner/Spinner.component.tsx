import React from 'react'
import { Icon } from './Spinner.styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Spinner = () => (
  <Icon>
    <FontAwesomeIcon icon="spinner" spin />
  </Icon>
)

export default Spinner
