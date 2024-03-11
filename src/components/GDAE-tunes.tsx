import * as GDAE from "@/lib/GDAE"
import TuneList from "@/components/TuneList"

const GDAETunes = () => (
  <>
    <TuneList tuneType="Barndances" tuning="GDAE" tunes={GDAE.Barndance} />
    <TuneList tuneType="Hornpipes" tuning="GDAE" tunes={GDAE.Hornpipe} />
    <TuneList tuneType="Jigs" tuning="GDAE" tunes={GDAE.Jig} />
    <TuneList tuneType="Marches" tuning="GDAE" tunes={GDAE.March} />
    <TuneList tuneType="Polkas" tuning="GDAE" tunes={GDAE.Polka} />
    <TuneList tuneType="Reels" tuning="GDAE" tunes={GDAE.Reel} />
    <TuneList tuneType="Slip-Jigs" tuning="GDAE" tunes={GDAE.Slip} />
    <TuneList tuneType="Waltzes" tuning="GDAE" tunes={GDAE.Waltz} />
  </>
)

export default GDAETunes
