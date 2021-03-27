import { Typography } from '@material-ui/core'

import { StyledHeader } from './Header.styles'

const Header = () => (
  <StyledHeader component="header" p={2}>
    <Typography variant="h5">Irish-Trad.net</Typography>
  </StyledHeader>
)

export default Header
