"use client"

import { useState } from "react"
import Note from "@/enums/Note"
import Scale from "@/enums/Scale"

import getScaleNotes from "@/lib/getScaleNotes"
import PageLayout from "@/components/PageLayout"
import ScaleFlavourSelect from "@/components/ScaleFlavourSelect"
import ScalesNoteSelect from "@/components/ScalesNoteSelect"

const ScalesPage = () => {
  const [selectedNote, setSelectedNote] = useState(Note.C)
  const [selectedScale, setSelectedScale] = useState(Scale.Major)

  const handleNoteValueChange = (note: string) => {
    setSelectedNote(note as Note)
  }

  const handleScaleValueChange = (scale: string) => {
    setSelectedScale(scale as Scale)
  }

  return (
    <PageLayout>
      <section className="container grid max-w-4xl items-center gap-6 rounded-3xl bg-background pb-8 pt-6 md:py-10">
        <h1 className="text-center text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Scales
        </h1>

        <p>
          When playing with other musicians it is important to know what key
          (scale) the tune is being played in
        </p>

        <p>
          This allows you to know quickly what notes are typically being played
          which also benefits with improvisation
        </p>

        <div className="flex flex-col items-center gap-4">
          <p>Root Note</p>
          <ScalesNoteSelect
            selectedNote={selectedNote}
            setSelectedNote={handleNoteValueChange}
          />
        </div>

        <div className="flex flex-col items-center gap-4">
          <p>Scale/Node</p>
          <ScaleFlavourSelect
            selectedScale={selectedScale}
            setSelectedScale={handleScaleValueChange}
          />
        </div>

        <div className="flex items-center justify-evenly gap-4">
          {getScaleNotes(selectedNote, selectedScale).map((note: string) => (
            <p className="text-2xl font-semibold" key={note}>
              {note}
            </p>
          ))}
        </div>
      </section>
    </PageLayout>
  )
}

export default ScalesPage
