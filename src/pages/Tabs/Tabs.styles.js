import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const Section = styled.section`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`

export const Title = styled.div`
  margin: 40px 0px;
`

export const InternalLink = styled(Link)`
  color: black;
  margin: 10px;
`
