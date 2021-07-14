import React, { useState } from 'react'
import NavBar from 'components/NavBar'
import TopBar from 'components/TopBar'

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
        <button
          style={{
            position: 'absolute',
            top: '0',
            background: 'red',
            width: '200px',
            height: '200px',
            zIndex: 100,
          }}
          onClick={() => setIsDesktopNavOpen(!isDesktopNavOpen)}
        ></button>
        {children}
      </div>
    </div>
  )
}

export default MainLayout
