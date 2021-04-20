import Page from 'components/Page'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Link from '@material-ui/core/Link'

import Button from 'common/Button'

const ClefToTab = () => (
  <Page
    title="Irish-Trad.net - Cleft to TAB"
    metaDescription="Treble Cleft to TAB - GDAE & GDAD for Irish Bouzouki/Mandolin/Octave Mandolin/Irish Tenor Banjo"
  >
    <Typography variant="h1">Cleft to Tablature</Typography>
    <Box display="flex" flexDirection="row" justifyContent="space-evenly">
      <Link href="#clef-to-tab-GDAE">
        <Button>GDAE</Button>
      </Link>
      <Link href="#clef-to-tab-GDAD">
        <Button>GDAD</Button>
      </Link>
    </Box>
    <Box component="section">
      <Typography variant="body1">
        The most popular system used for presenting musical notation is sheet
        music. The following diagram can be used to convert any piece of sheet
        music into tablature - as long as the sheet music is within the Irish
        Bouzouki's capabilities. The full sounding range of a 24 fret Irish
        Bouzouki tuned GDAE is G2 (98Hz) to E6 (1319Hz) - slightly less than 4
        octaves.
      </Typography>
      <Typography variant="body1">
        Sheet music for traditional Irish tunes can be found on websites such as
        <Link href="https://www.thesession.org/" target="_blank">
          The Session
        </Link>
        . Music books that are found in music shops tend to showcase sheet music
        only. Looking at books that are designed specifically for the Irish
        Bouzouki or the Mandolin are good places to start because they are
        designed with the instruments range in mind. However even the music
        books scored for piano can be converted to the Irish Bouzouki using the
        diagram found on this page.
      </Typography>
      <Typography variant="body1">
        The lowest pitch that the Irish Bouzouki is able to produce naturally is
        the G note found by playing the thickest string open. When looking at
        the conversion diagram there is only one way to play this note when it
        is notated on a treble clef. There is also one way to play the highest
        note the Irish Bouzouki can produce - the 24th fret on the E string. In
        the mid-range of the Irish Bouzouki there begins to be multiple ways of
        producing the same note. In some instances there are 2 ways and other
        times there is 4 ways. Normally a couple of these are simple impractical
        to attempt. An example of two ways to play an A note is the open A
        string and the same note can be produced by playing the 7th fret of the
        G string. These notes are exactly the same pitch. However this is a
        slight difference in timbre due to the thickness of each string.
      </Typography>
      <Typography variant="body1">
        Learning to read sheet music quickly and efficiently requires continuous
        practice. This tends to be a tedious activity which is why many
        musicians such as guitarists rely heavily or solely on tablature to
        instruct them what to play. Sheet music is the universal language and
        alphabet of musicians as such it is an incredibly valuable tool to learn
        and understand as it would enable you the ability to transcribe for
        other musicians your own work.
      </Typography>
      <Box display="flex" flexDirection="row" justifyContent="space-evenly">
        <Link href="assets/high-quality/GDAE - Clef To TAB.pdf" target="_blank">
          <img
            id="clef-to-tab-GDAE"
            src="assets/low-quality/GDAE - Clef To TAB.jpg"
            alt="GDAE Treble Clef to TAB"
            width="100%"
            height="100%"
          />
        </Link>
        <Link href="assets/high-quality/GDAD - Clef To TAB.pdf" target="_blank">
          <img
            id="clef-to-tab-GDAD"
            src="assets/low-quality/GDAD - Clef To TAB.jpg"
            alt="GDAD Treble Clef to TAB"
            width="100%"
            height="100%"
          />
        </Link>
      </Box>
    </Box>
  </Page>
)

export default ClefToTab
