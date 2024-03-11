import SiteHeaderDesktop from "@/components/SiteHeader/SiteHeaderDesktop"
import SiteHeaderMobile from "@/components/SiteHeader/SiteHeaderMobile"

const SiteHeader = () => (
  <header className="sticky top-0 z-40 w-full border-b bg-background">
    <SiteHeaderMobile />
    <SiteHeaderDesktop />
  </header>
)

export default SiteHeader
