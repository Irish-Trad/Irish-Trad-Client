import React, { useState, useEffect } from 'react'

import { Button } from './ScrollToTop.styles'

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    document.getElementById('top')!.onscroll = () => scrollCheck()
  }, [])

  const scrollCheck = () => {
    if (document.getElementById('top')) {
      document.getElementById('top')!.scrollTop > 200
        ? setShowButton(true)
        : setShowButton(false)
    }
  }

  const scrollTop = () => {
    document.getElementById('top')!.scrollTop = 0
  }

  return showButton ? (
    <Button onClick={scrollTop} title="Go to top">
      Top
    </Button>
  ) : null
}

export default ScrollToTop
