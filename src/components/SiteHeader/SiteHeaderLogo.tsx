import Link from "next/link"

import { siteConfig } from "@/config/site"

const SiteHeaderLogo = () => (
  <Link href="/" className="flex items-center space-x-2">
    {/* <Icons.logo className="w-6 h-6" /> */}
    <span className="inline-block text-3xl font-bold font-meath">
      {siteConfig.name}
    </span>
  </Link>
)

export default SiteHeaderLogo
