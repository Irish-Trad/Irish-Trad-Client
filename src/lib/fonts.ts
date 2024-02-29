import { JetBrains_Mono as FontMono, Inter as FontSans } from "next/font/google"
import localFont from "next/font/local"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const fontMeath = localFont({
  src: "../../public/static/fonts/meathflf-webfont.woff2",
  display: "swap",
  variable: "--font-meath",
})
