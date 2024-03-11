import notes from "@/constants/notes"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type ScalesNoteSelectProps = {
  selectedNote: string
  setSelectedNote: (note: string) => void
}

const ScalesNoteSelect = ({
  selectedNote,
  setSelectedNote,
}: ScalesNoteSelectProps) => (
  <Select onValueChange={setSelectedNote} defaultValue={selectedNote}>
    <SelectTrigger>
      <SelectValue placeholder="Select root note" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        {notes.map(({ label, value }) => (
          <SelectItem key={value} value={value} className="cursor-pointer">
            {label}
          </SelectItem>
        ))}
      </SelectGroup>
    </SelectContent>
  </Select>
)

export default ScalesNoteSelect
