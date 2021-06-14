import React, { useState } from 'react'
import { Box, Hidden } from '@material-ui/core'
import NavBar from 'components/NavBar/NavBar.component'
import TopBar from 'components/TopBar/TopBar.component'

const MainLayout = ({ children }: any) => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false)

  return (
    <Box flex flexDirection="column">
      <Hidden lgUp>
        <TopBar onMobileNavOpen={() => setMobileNavOpen(true)} />
      </Hidden>
      <Box flex flexDirection="row">
        <NavBar
          onMobileClose={() => setMobileNavOpen(false)}
          openMobile={isMobileNavOpen}
        />
        {children}
      </Box>
    </Box>
  )
}

export default MainLayout
