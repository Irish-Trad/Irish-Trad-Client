import * as GDAD from "@/lib/GDAD"
import TuneList from "@/components/TuneList"

const GDADTunes = () => (
  <>
    <TuneList tuneType="Barndances" tuning="GDAD" tunes={GDAD.Barndance} />
    <TuneList tuneType="Hornpipes" tuning="GDAD" tunes={GDAD.Hornpipe} />
    <TuneList tuneType="Jigs" tuning="GDAD" tunes={GDAD.Jig} />
    <TuneList tuneType="Marches" tuning="GDAD" tunes={GDAD.March} />
    <TuneList tuneType="Polkas" tuning="GDAD" tunes={GDAD.Polka} />
    <TuneList tuneType="Reels" tuning="GDAD" tunes={GDAD.Reel} />
    <TuneList tuneType="Slip-Jigs" tuning="GDAD" tunes={GDAD.Slip} />
    <TuneList tuneType="Waltzes" tuning="GDAD" tunes={GDAD.Waltz} />
  </>
)

export default GDADTunes
