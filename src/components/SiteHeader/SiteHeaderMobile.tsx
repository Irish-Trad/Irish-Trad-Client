"use client"

import { useState } from "react"

import Icons from "@/components/Icons"
import NavigationMobile from "@/components/SiteHeader/NavigationMobile"
import SiteHeaderLogo from "@/components/SiteHeader/SiteHeaderLogo"

const SiteHeaderMobile = () => {
  const [showMobileNavigation, setShowMobileNavigation] = useState(false)

  const handleOnClick = () => {
    setShowMobileNavigation(!showMobileNavigation)
  }

  return (
    <>
      <div className="flex items-center justify-between h-16 gap-4 pl-4 lg:hidden">
        <SiteHeaderLogo />

        <div
          className="grid w-16 h-16 cursor-pointer place-items-center"
          onClick={handleOnClick}
        >
          <Icons.Menu className="w-6 h-6" />
        </div>
      </div>

      {showMobileNavigation && <NavigationMobile onClick={handleOnClick} />}
    </>
  )
}

export default SiteHeaderMobile
