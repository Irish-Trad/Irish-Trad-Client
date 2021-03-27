import { Link as RouterLink } from 'react-router-dom'
import {
  AppBar,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  makeStyles,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles(() => ({
  root: {
    background:
      'rgba(0, 0, 0, 0) linear-gradient(green, darkgreen) repeat scroll 0% 0%',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
  },
  avatar: {
    width: 60,
    height: 60,
  },
}))

const TopBar = ({ className = null, onMobileNavOpen, ...rest }) => {
  const classes = useStyles()

  return (
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
}

export default TopBar
