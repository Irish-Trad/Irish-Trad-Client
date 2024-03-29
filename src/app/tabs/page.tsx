"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import GDADTunes from "@/components/GDAD-tunes"
import GDAETunes from "@/components/GDAE-tunes"
import PageLayout from "@/components/PageLayout"

const TabsPage = () => {
  const [showGDAE, setShowGDAE] = useState(true)

  const handleOnClick = () => {
    setShowGDAE(!showGDAE)
  }

  return (
    <PageLayout>
      <section className="container grid max-w-4xl items-center gap-6 rounded-3xl bg-background pb-8 pt-6 md:py-10">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Tablature
        </h1>

        <Button onClick={handleOnClick}>
          {showGDAE ? "Show GDAD" : "Show GDAE"}
        </Button>

        {showGDAE ? <GDAETunes /> : <GDADTunes />}
      </section>
    </PageLayout>
  )
}

export default TabsPage
