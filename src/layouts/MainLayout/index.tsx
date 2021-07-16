import React, { useState } from 'react'
import NavBar from 'components/NavBar'
import TopBar from 'components/TopBar'
import Hamburger from 'components/Hamburger'

const MainLayout = ({ children }: any) => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false)

  const [isDesktopNavOpen, setIsDesktopNavOpen] = useState(false)

  return (
    <div>
      {/* lgUp */}
      <div>
        {/* <TopBar onMobileNavOpen={() => setMobileNavOpen(true)} /> */}
      </div>
      <div>
        {/* {isDesktopNavOpen && (
          <NavBar
            onMobileClose={() => setMobileNavOpen(false)}
            openMobile={isMobileNavOpen}
          />
        )} */}
        <Hamburger
        // onClick={() => setIsDesktopNavOpen(!isDesktopNavOpen)}
        />
        {children}
      </div>
    </div>
  )
}

export default MainLayout
