import React from 'react'

import Spinner from 'components/Spinner'

import { MainContainer } from './Loading.styles'

const Loading: React.FunctionComponent = () => (
  <MainContainer>
    <Spinner />
  </MainContainer>
)

export default Loading
