import React, { useState } from 'react'
import { Hidden, makeStyles } from '@material-ui/core'
import NavBar from 'components/NavBar/NavBar.component'
import TopBar from 'components/TopBar/TopBar.component'

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: theme.palette.background.dark,

    display: 'flex',
    flexFlow: 'column nowrap',
    // height: '100%',
    // overflow: 'hidden',
    // width: '100%',
  },
  main: {
    display: 'flex',
    flexFlow: 'row nowrap',
  },
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    // paddingTop: 64,
    // [theme.breakpoints.up('lg')]: {
    //   paddingLeft: 256,
    // },
  },
  contentContainer: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
  },
  content: {
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto',
  },
}))

const MainLayout = ({ children }: any) => {
  const classes = useStyles()
  const [isMobileNavOpen, setMobileNavOpen] = useState(false)

  return (
    <div className={classes.root}>
      <Hidden lgUp>
        <TopBar onMobileNavOpen={() => setMobileNavOpen(true)} />
      </Hidden>
      <div className={classes.main}>
        <NavBar
          onMobileClose={() => setMobileNavOpen(false)}
          openMobile={isMobileNavOpen}
        />
        <div className={classes.wrapper}>
          <div className={classes.contentContainer}>
            <div id="top" className={classes.content}>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainLayout
