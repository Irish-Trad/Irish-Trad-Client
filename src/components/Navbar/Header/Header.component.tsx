import { Typography } from '@material-ui/core'

import { StyledHeader } from './Header.styles'

const Header = () => (
  <StyledHeader
    component="header"
    alignItems="center"
    display="flex"
    flexDirection="column"
    p={2}
  >
    <Typography color="secondary" variant="h5">
      Irish-Trad.net
    </Typography>
  </StyledHeader>
)

export default Header
