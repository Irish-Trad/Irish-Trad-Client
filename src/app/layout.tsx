import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { fontMeath, fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"

import "@/styles/globals.css"
import Head from "next/head"

import SiteHeader from "@/components/SiteHeader/SiteHeader"
import TailwindIndicator from "@/components/TailwindIndicator"
import ThemeProvider from "@/components/ThemeProvider"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => (
  <>
    <html lang="en" suppressHydrationWarning>
      <Head>
        <title>IrishTrad.net</title>
      </Head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontMeath.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative flex flex-col min-h-screen">
            <SiteHeader />
            {children}
          </div>
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  </>
)

export default RootLayout
