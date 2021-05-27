import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Box, Drawer, Hidden, List, makeStyles } from '@material-ui/core'

import Header from './Header/Header.component'
import NavItem from './NavItem/NavItem.component'
import Footer from './Footer/Footer.component'

const items = [
  {
    href: '/',
    title: 'Home',
  },
  {
    href: '/tablature',
    title: 'Tablature',
  },
  {
    href: '/lessons',
    title: 'Lessons',
  },
  {
    href: '/chords',
    title: 'Chords',
  },
  {
    href: '/clef-to-tab',
    title: 'Clef to Tab',
  },
  {
    href: '/terminology',
    title: 'Terminology',
  },
  {
    href: '/community',
    title: 'Community',
  },
  {
    href: '/newsletter',
    title: 'Newsletter',
  },
  {
    href: '/accessibility',
    title: 'Accessibility',
  },
  {
    href: '/contact',
    title: 'Contact',
  },
]

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 256,
  },
  desktopDrawer: {
    width: 256,
    // top: 64,
    // height: 'calc(100% - 64px)',
  },
  avatar: {
    cursor: 'pointer',
    width: 64,
    height: 64,
  },
  navBarTop: {
    background:
      'rgba(0, 0, 0, 0) linear-gradient(green, darkgreen) repeat scroll 0% 0%;',
    color: 'white',
  },
  navBarList: {
    background: 'green',
    color: 'white',
    flexGrow: '1',
  },
}))

const NavBar = ({ onMobileClose, openMobile }) => {
  const classes = useStyles()
  const location = useLocation()

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname])

  const content = (
    <Box height="100%" display="flex" flexDirection="column">
      <Header />
      <Box p={2} className={classes.navBarList}>
        <List>
          {items.map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </List>
      </Box>
      <Footer />
    </Box>
  )

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  )
}

export default NavBar
