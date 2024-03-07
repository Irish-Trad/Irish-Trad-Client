import modes from "@/constants/modes"
import scales from "@/constants/scales"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type ScaleFlavourSelectProps = {
  selectedScale: string
  setSelectedScale: (note: string) => void
}

const ScaleFlavourSelect = ({
  selectedScale,
  setSelectedScale,
}: ScaleFlavourSelectProps) => (
  <Select onValueChange={setSelectedScale} defaultValue={selectedScale}>
    <SelectTrigger>
      <SelectValue placeholder="Select scale" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        {scales.map(({ label, value }) => (
          <SelectItem key={value} value={value} className="cursor-pointer">
            {label}
          </SelectItem>
        ))}

        {modes.map(({ label, value }) => (
          <SelectItem key={value} value={value} className="cursor-pointer">
            {label}
          </SelectItem>
        ))}
      </SelectGroup>
    </SelectContent>
  </Select>
)

export default ScaleFlavourSelect
