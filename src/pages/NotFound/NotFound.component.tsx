import React from 'react'

import { Link } from 'react-router-dom'

import { H1 } from 'common/StyledComponents/StyledComponents'
import { Button } from './NotFound.styles'

const NotFound: React.FC = () => (
  <>
    <H1>404 - No Page Found</H1>
    <Link to={'/'}>
      <Button>Click Here to Return Home</Button>
    </Link>
  </>
)

export default NotFound
