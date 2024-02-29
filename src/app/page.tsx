import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import PageLayout from "@/components/page-layout"

const HomePage = () => (
  <PageLayout className="grid items-center bg-trad-session">
    <section className="container grid items-center max-w-4xl gap-6 pt-6 pb-8 rounded-3xl bg-background md:py-10">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter text-center md:text-9xl font-meath">
          IrishTrad.net
        </h1>
        <h1 className="text-3xl font-semibold leading-tight tracking-tighter md:text-4xl text-muted-foreground">
          Free online resources and lessons for a variety of stringed
          instruments commonly found in traditional Irish sessions such as the
          Irish Bouzouki, Mandolin, Octave Mandola and Irish Tenor Banjo
        </h1>
        {/* <p className="max-w-[700px] text-lg text-muted-foreground">
          Accessible and customizable components that you can copy and paste
          into your apps. Free. Open Source. And Next.js 13 Ready.
        </p> */}
      </div>
      <div className="flex gap-4">
        <Link
          href={siteConfig.links.docs}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants()}
        >
          Tablature
        </Link>
      </div>
    </section>
  </PageLayout>
)

export default HomePage
