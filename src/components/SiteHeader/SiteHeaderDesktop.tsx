import NavigationDesktop from "@/components/SiteHeader/NavigationDesktop"
import ThemeToggle from "@/components/ThemeToggle"

const SiteHeaderDesktop = () => (
  <div className="container items-center hidden h-16 space-x-4 lg:flex sm:justify-between sm:space-x-0">
    <NavigationDesktop />
    <div className="flex items-center justify-end flex-1 space-x-4">
      <nav className="flex items-center space-x-1">
        {/* <Link
    href={siteConfig.links.github}
    target="_blank"
    rel="noreferrer"
  >
    <div
      className={buttonVariants({
        size: "icon",
        variant: "ghost",
      })}
    >
      <Icons.gitHub className="w-5 h-5" />
      <span className="sr-only">GitHub</span>
    </div>
  </Link> */}
        {/* <Link
    href={siteConfig.links.twitter}
    target="_blank"
    rel="noreferrer"
  >
    <div
      className={buttonVariants({
        size: "icon",
        variant: "ghost",
      })}
    >
      <Icons.twitter className="w-5 h-5 fill-current" />
      <span className="sr-only">Twitter</span>
    </div>
  </Link> */}
        <ThemeToggle />
      </nav>
    </div>
  </div>
)

export default SiteHeaderDesktop
