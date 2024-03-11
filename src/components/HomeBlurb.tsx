import Link from "next/link"
import Route from "@/enums/Route"

import { buttonVariants } from "@/components/ui/button"

const HomeBlurb = () => (
  <section className="m-4 flex max-w-4xl flex-col gap-4 rounded-3xl border bg-background p-6">
    <div className="flex flex-col gap-4">
      <h1 className="text-center font-meath text-3xl font-extrabold leading-tight tracking-tighter md:text-9xl">
        IrishTrad.net
      </h1>
      <h1 className="font-semibold leading-tight tracking-tighter text-muted-foreground lg:text-3xl">
        Free online resources and lessons for a variety of stringed instruments
        commonly found in traditional Irish sessions such as the Irish Bouzouki,
        Mandolin, Octave Mandola and Irish Tenor Banjo and more
      </h1>
    </div>
    <div className="flex gap-4">
      <Link href={Route.Tabs} className={buttonVariants()}>
        Tablature
      </Link>
    </div>
  </section>
)

export default HomeBlurb
