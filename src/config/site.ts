export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "IrishTrad.net",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Tablature",
      href: "/tabs",
    },
    {
      title: "Credits",
      href: "/credits",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}
