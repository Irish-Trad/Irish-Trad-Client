"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { siteConfig } from "@/config/site"
import isActivePath from "@/lib/isActivePath"
import { cn } from "@/lib/utils"
import SiteHeaderLogo from "@/components/SiteHeader/SiteHeaderLogo"
import Icons from "@/components/temp"

type NavigationMobileProps = {
  onClick: () => void
}

const NavigationMobile = ({ onClick }: NavigationMobileProps) => {
  const pathname = usePathname()
  const items = siteConfig.mainNav

  return (
    <div className="absolute top-0 z-50 flex h-screen w-screen flex-col bg-background">
      <div className="flex h-16 items-center justify-between border-b p-4">
        <SiteHeaderLogo />
        <Icons.X className="size-6 cursor-pointer" onClick={onClick} />
      </div>

      <div className="m-4 grid place-items-center">
        {items.length && (
          <nav className="flex w-full flex-col gap-4">
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
