import Link from "next/link"

import type StaticTune from "@/types/StaticTune"

type TuneListProps = {
  tuneType: string
  tuning: string
  tunes: StaticTune[]
}

const TuneList = ({ tuneType, tuning, tunes }: TuneListProps) => (
  <div className="flex flex-col gap-4 rounded-3xl border p-4">
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-semibold">{tuneType}</h2>
      <p>{tuning}</p>
    </div>

    <div className="flex flex-col gap-4">
      {tunes.map((tune) => (
        <Link href={tune.path} target="_blank">
          {tune.name}
        </Link>
      ))}
    </div>
  </div>
)

export default TuneList
