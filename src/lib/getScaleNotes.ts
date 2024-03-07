import Note from "@/enums/Note"
import Scale from "@/enums/Scale"

import scalesJson from "../../public/static/data/scales.json"

type ScalesJson = {
  [key in Note]: {
    [key: string]: string[]
  }
}

const getScaleNotes = (selectedNote: Note, selectedScale: Scale): string[] => {
  if (selectedScale === Scale.Major) {
    return scalesJson[selectedNote][Scale.Ionian]
  }

  if (selectedScale === Scale.Minor) {
    return scalesJson[selectedNote][Scale.Aeolian]
  }

  return scalesJson[selectedNote][selectedScale]
}

export default getScaleNotes
