import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import Header from './Header/index.tsx'
import NavItem from './NavItem'
import Footer from './Footer'

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
    <div>
      <Header />
      <div p={2} className={classes.navBarList}>
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
      </div>
      <Footer />
    </div>
  )

  return (
    <>
      {/* lgUp */}
      <div>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </div>
      {/* mdDown */}
      <div>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </div>
    </>
  )
}

export default NavBar
