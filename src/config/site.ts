export type SiteConfig = typeof siteConfig

export enum Route {
  Home = "/",
  Tabs = "/tabs",
  Credits = "/credits",
}

export const siteConfig = {
  name: "IrishTrad.net",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Home",
      href: Route.Home,
    },
    {
      title: "Tablature",
      href: Route.Tabs,
    },
    {
      title: "Credits",
      href: Route.Credits,
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}
