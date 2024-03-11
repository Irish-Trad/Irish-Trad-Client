"use client"

import { useState } from "react"

import NavigationMobile from "@/components/SiteHeader/NavigationMobile"
import SiteHeaderLogo from "@/components/SiteHeader/SiteHeaderLogo"
import Icons from "@/components/temp"

const SiteHeaderMobile = () => {
  const [showMobileNavigation, setShowMobileNavigation] = useState(false)

  const handleOnClick = () => {
    setShowMobileNavigation(!showMobileNavigation)
  }

  if (showMobileNavigation) {
    return <NavigationMobile onClick={handleOnClick} />
  }

  return (
    <div className="flex h-16 items-center justify-between p-4 lg:hidden">
      <SiteHeaderLogo />
      <Icons.Menu className="size-6 cursor-pointer" onClick={handleOnClick} />
    </div>
  )
}

export default SiteHeaderMobile
