import Link from "next/link"

import { siteConfig } from "@/config/site"
import SiteHeaderLogo from "@/components/SiteHeader/SiteHeaderLogo"

const NavigationDesktop = () => {
  const items = siteConfig.mainNav

  return (
    <div className="flex gap-6 md:gap-10">
      <SiteHeaderLogo />

      {items.length && (
        <nav className="flex gap-6">
          {items.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={
                    "flex items-center text-sm font-medium text-muted-foreground"
                  }
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      )}
    </div>
  )
}

export default NavigationDesktop
