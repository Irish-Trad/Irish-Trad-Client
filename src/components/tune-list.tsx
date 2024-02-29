import type { FC } from "react"
import Link from "next/link"

import type StaticTune from "@/types/StaticTune"

type Props = {
  tuneType: string
  tuning: string
  tunes: StaticTune[]
}

const TuneList: FC<Props> = ({ tuneType, tuning, tunes }) => (
  <>
    <h2 className="text-2xl font-semibold">
      {tuneType} - {tuning}
    </h2>
    {tunes.map((tune) => (
      <Link href={tune.path} target="_blank">
        {tune.name}
      </Link>
    ))}
  </>
)

export default TuneList
