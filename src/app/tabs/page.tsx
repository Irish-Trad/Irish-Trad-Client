"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import GDADTunes from "@/components/GDAD-tunes"
import GDAETunes from "@/components/GDAE-tunes"
import PageLayout from "@/components/page-layout"

const TabsPage = () => {
  const [showGDAE, setShowGDAE] = useState(true)

  const handleOnClick = () => {
    setShowGDAE(!showGDAE)
  }

  return (
    <PageLayout>
      <section className="container grid items-center max-w-4xl gap-6 pt-6 pb-8 rounded-3xl bg-background md:py-10">
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
