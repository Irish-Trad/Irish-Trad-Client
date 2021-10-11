import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from 'components/Header'
import Footer from 'components/Footer'

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
        <div>
          {items.map((item) => (
            <div
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )

  return (
    <>
      {/* lgUp */}
      <div>
        <div
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </div>
      </div>
      {/* mdDown */}
      <div>
        <div
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </div>
      </div>
    </>
  )
}

export default NavBar
