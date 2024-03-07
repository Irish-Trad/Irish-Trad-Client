"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { siteConfig } from "@/config/site"
import isActivePath from "@/lib/isActivePath"
import { cn } from "@/lib/utils"
import Icons from "@/components/Icons"
import SiteHeaderLogo from "@/components/SiteHeader/SiteHeaderLogo"

type NavigationMobileProps = {
  onClick: () => void
}

const NavigationMobile = ({ onClick }: NavigationMobileProps) => {
  const pathname = usePathname()
  const items = siteConfig.mainNav

  return (
    <div className="absolute top-0 z-50 flex flex-col w-screen h-screen bg-background">
      <div className="flex items-center justify-between h-16 gap-4 pl-4 border-b">
        <SiteHeaderLogo />

        <div
          className="grid w-16 h-16 cursor-pointer place-items-center"
          onClick={onClick}
        >
          <Icons.X className="w-6 h-6" />
        </div>
      </div>

      <div className="grid m-4 place-items-center">
        {items.length && (
          <nav className="flex flex-col w-full gap-4">
            {items.map(
              (item, index) =>
                item.href && (
                  <Link
                    onClick={onClick}
                    key={index}
                    href={item.href}
                    className={cn(
                      "grid h-12 place-items-center text-sm font-medium text-muted-foreground",
                      "hover:!bg-muted-foreground hover:text-secondary",
                      isActivePath(pathname, item.href) &&
                        "bg-foreground text-secondary"
                    )}
                  >
                    {item.title}
                  </Link>
                )
            )}
          </nav>
        )}
      </div>
    </div>
  )
}

export default NavigationMobile
