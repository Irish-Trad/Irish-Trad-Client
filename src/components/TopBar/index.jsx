import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

const TopBar = ({ className = null, onMobileNavOpen, ...rest }) => (
  <AppBar position="static" className={classes.root} elevation={0} {...rest}>
    <Toolbar>
      <RouterLink className={classes.link} to="/">
        Irish-Trad.net
      </RouterLink>
      <Box flexGrow={1} />
      <Hidden lgUp>
        <IconButton color="inherit" onClick={onMobileNavOpen}>
          <MenuIcon />
        </IconButton>
      </Hidden>
    </Toolbar>
  </AppBar>
)

export default TopBar
