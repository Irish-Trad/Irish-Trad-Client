import Link from "next/link"
import { Route } from "@/enums/Route"

import { buttonVariants } from "@/components/ui/button"

const HomeBlurb = () => (
  <section className="flex flex-col max-w-4xl gap-6 pt-6 pb-8 m-4 lg:m-0 rounded-3xl bg-background md:py-10">
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-extrabold leading-tight tracking-tighter text-center md:text-9xl font-meath">
        IrishTrad.net
      </h1>
      <h1 className="font-semibold leading-tight tracking-tighter lg:text-3xl md:text-4xl text-muted-foreground">
        Free online resources and lessons for a variety of stringed instruments
        commonly found in traditional Irish sessions such as the Irish Bouzouki,
        Mandolin, Octave Mandola and Irish Tenor Banjo
      </h1>
      {/* <p className="max-w-[700px] text-lg text-muted-foreground">
        Accessible and customizable components that you can copy and paste
        into your apps. Free. Open Source. And Next.js 13 Ready.
      </p> */}
    </div>
    <div className="flex gap-4">
      <Link href={Route.Tabs} className={buttonVariants()}>
        Tablature
      </Link>
    </div>
  </section>
)

export default HomeBlurb
