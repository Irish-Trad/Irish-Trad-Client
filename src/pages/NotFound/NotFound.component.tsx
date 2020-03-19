import React from 'react'

import { Link } from 'react-router-dom'

import { MainContainer, H1, Button } from './NotFound.styles'

const NotFound: React.FunctionComponent = () => (
  <MainContainer>
    <H1>404 - No Page Found</H1>
    <Link to={'/'}>
      <Button>Click Here to Return Home</Button>
    </Link>
  </MainContainer>
)

export default NotFound
