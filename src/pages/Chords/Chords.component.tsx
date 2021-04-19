import Page from 'components/Page'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Link from '@material-ui/core/Link'

import Button from 'common/Button'

const Chords = () => (
  <Page
    title="Irish-Trad.net - Chords"
    metaDescription="Chords - GDAE & GDAD for Irish Bouzouki/Mandolin/Octave Mandolin/Irish Tenor Banjo/Irish Tenor Banjo"
  >
    <Typography variant="h1">Chords</Typography>
    <section>
      <Box display="flex" flexDirection="row" justifyContent="space-evenly">
        <Link href="#MajorChords">
          <Button>Major Chords</Button>
        </Link>
        <Link href="#MinorChords">
          <Button>Minor Chords</Button>
        </Link>
        <Link href="#Major7thChords">
          <Button>Major 7th Chords</Button>
        </Link>
        <Link href="#Minor7thChords">
          <Button>Minor 7th Chords</Button>
        </Link>
        <Link href="#Dominant7thChords">
          <Button>Dominant 7th Chords</Button>
        </Link>
      </Box>
      <Typography variant="body1">
        The chord diagrams found on this page showcase one way in which to play
        each chord type. Use the navigation bookmarks above to quickly jump to
        the img file for the chord type you require.
      </Typography>
      <Typography variant="body1">
        A theoretical description as to how the chords are constructed can be
        found above each diagram.
      </Typography>
      <Typography variant="body1">
        The patterns showcased aim to balance popularity of the shape, ease of
        play and inclusion of open strings. On other stringed instruments such
        as the guitar the root note of each chord is typically played on the
        lowest pitched or heaviest string but on the Irish Bouzouki this isn't
        always the case. When the third, fifth or seventh interval is played on
        the lowest pitched string these chords are considered in an inverted
        state. The chords still contain all the notes required to produce the
        overall tonality. In a traditional session other instruments that are
        pitched even lower than the Irish Bouzouki such as the double bass or
        bass guitar will fulfill the root notes role.
      </Typography>
      <Typography variant="h2">Major Chords</Typography>
      <Typography variant="body1">
        The basic Major chord consists of three notes. The chord is formed using
        the Root (1), Major Third (3) and Perfect Fifth (5) intervals of each
        Major scale. To construct the C Major and E Major chord you begin with
        the scale consisting of the following notes:
      </Typography>
      <Typography variant="body1" align="center">
        <b>C Major Scale: C, D, E, F, G, A, B, C</b>
      </Typography>
      <Typography variant="body1" align="center">
        <b>E Major Scale: E, F#, G#, A, B, C#, D#, E</b>
      </Typography>
      <Typography variant="body1">
        Extracting the three notes required from these scales means applying the
        following formula to each scale:
      </Typography>
      <Typography variant="body1" align="center">
        <b>Major Chord Formula: 1, 3, 5</b>
      </Typography>
      <Typography variant="body1" align="center">
        <b>Major Chord Formula: Root, Major Third, Perfect Fifth</b>
      </Typography>
      <Typography variant="body1">
        The result is the C Major and E Major Chord consisting of the following
        notes:
      </Typography>
      <Typography variant="body1" align="center">
        <b>C Major Chord: C, E, G</b>
      </Typography>
      <Typography variant="body1" align="center">
        <b>E Major Chord: E, G#, B</b>
      </Typography>
      <Box display="flex" flexDirection="row" justifyContent="space-evenly">
        <Link
          href="assets/high-quality/GDAE_Chords/GDAE-Major-A4.pdf"
          target="_blank"
        >
          <img
            id="MajorChords"
            src="assets/low-quality/GDAE_Chords/GDAE-Major-A4.jpg"
            alt="Major Chords in GDAE Tuning"
          />
        </Link>
        <Link
          href="assets/high-quality/GDAD_Chords/GDAD-Major-A4.pdf"
          target="_blank"
        >
          <img
            src="assets/low-quality/GDAD_Chords/GDAD-Major-A4.jpg"
            alt="Major Chords in GDAD Tuning"
          />
        </Link>
      </Box>
      <Typography variant="h2">Minor Chords</Typography>
      <Typography variant="body1">
        The basic Minor chord consists of three notes. The chord is formed using
        the Root (1), Minor Third (b3) and Perfect Fifth (5) intervals of each
        Minor scale. To construct the C Minor and E Minor chord you begin with
        the scale consisting of the following notes:
      </Typography>
      <Typography variant="body1" align="center">
        <b>C Minor Scale: C, D, Eb, F, G, Ab, Bb, C</b>
      </Typography>
      <Typography variant="body1" align="center">
        <b>E Minor Scale: E, F#, G, A, B, C, D, E</b>
      </Typography>
      <Typography variant="body1">
        Extracting the three notes required from these scales means applying the
        following formula to each scale:
      </Typography>
      <Typography variant="body1" align="center">
        <b>Minor Chord Formula: 1, b3, 5</b>
      </Typography>
      <Typography variant="body1" align="center">
        <b>Minor Chord Formula: Root, Minor Third, Perfect Fifth</b>
      </Typography>
      <Typography variant="body1">
        The result is the C Minor and E Minor Chord consisting of the following
        notes:
      </Typography>
      <Typography variant="body1" align="center">
        <b>C Minor Chord: C, Eb, G</b>
      </Typography>
      <Typography variant="body1" align="center">
        <b>E Minor Chord: E, G, B</b>
      </Typography>
      <Box display="flex" flexDirection="row" justifyContent="space-evenly">
        <Link
          href="assets/high-quality/GDAE_Chords/GDAE-Minor-A4.pdf"
          target="_blank"
        >
          <img
            id="MinorChords"
            src="assets/low-quality/GDAE_Chords/GDAE-Minor-A4.jpg"
            alt="Minor Chords in GDAE Tuning"
          />
        </Link>
        <Link
          href="assets/high-quality/GDAD_Chords/GDAD-Minor-A4.pdf"
          target="_blank"
        >
          <img
            src="assets/low-quality/GDAD_Chords/GDAD-Minor-A4.jpg"
            alt="Minor Chords in GDAD Tuning"
          />
        </Link>
      </Box>
      <Typography variant="h2">Major 7th Chords</Typography>
      <Typography variant="body1">
        Major 7th Chords are extended chords consisting of four notes. The chord
        is formed using the Root (1), Major Third (3), Perfect Fifth (5) and
        Major Seventh (7) intervals of each Major scale. To construct the C
        Major 7th and E Major 7th chord you begin with the scale consisting of
        the following notes:
      </Typography>
      <Typography variant="body1" align="center">
        <b>C Major Scale: C, D, E, F, G, A, B, C</b>
      </Typography>
      <Typography variant="body1" align="center">
        <b>E Major Scale: E, F#, G#, A, B, C#, D#, E</b>
      </Typography>
      <Typography variant="body1">
        Extracting the four notes required from these scales means applying the
        following formula to each scale:
      </Typography>
      <Typography variant="body1" align="center">
        <b>Major 7th Chord Formula: 1, 3, 5, 7</b>
      </Typography>
      <Typography variant="body1" align="center">
        <b>
          Major 7th Chord Formula: Root, Major Third, Perfect Fifth, Major
          Seventh
        </b>
      </Typography>
      <Typography variant="body1">
        The result is the C Major 7th and E Major 7th Chord consisting of the
        following notes:
      </Typography>
      <Typography variant="body1" align="center">
        <b>C Major 7th Chord: C, E, G, B</b>
      </Typography>
      <Typography variant="body1" align="center">
        <b>E Major 7th Chord: E, G#, B, D#</b>
      </Typography>
      <Box display="flex" flexDirection="row" justifyContent="space-evenly">
        <Link
          href="assets/high-quality/GDAE_Chords/GDAE-Major7th-A4.pdf"
          target="_blank"
        >
          <img
            id="Major7thChords"
            src="assets/low-quality/GDAE_Chords/GDAE-Major7th-A4.jpg"
            alt="Major Chords in GDAE Tuning"
          />
        </Link>
        <Link
          href="assets/high-quality/GDAD_Chords/GDAD-Major7th-A4.pdf"
          target="_blank"
        >
          <img
            src="assets/low-quality/GDAD_Chords/GDAD-Major7th-A4.jpg"
            alt="Major Chords in GDAD Tuning"
          />
        </Link>
      </Box>
      <Typography variant="h2">Minor 7th Chords</Typography>
      <Typography variant="body1">
        Minor 7th Chords are extended chords consisting of four notes. The chord
        is formed using the Root (1), Minor Third (3), Perfect Fifth (5) and
        Minor Seventh (7) intervals of each Minor scale. To construct the C
        Minor 7th and E Minor 7th chord you begin with the scale consisting of
        the following notes:
      </Typography>
      <Typography variant="body1" align="center">
        <b>C Minor Scale: C, D, Eb, F, G, Ab, Bb, C</b>
      </Typography>
      <Typography variant="body1" align="center">
        <b>E Minor Scale: E, F#, G, A, B, C, D, E</b>
      </Typography>
      <Typography variant="body1">
        Extracting the four notes required from these scales means applying the
        following formula to each scale:
      </Typography>
      <Typography variant="body1" align="center">
        <b>Minor 7th Chord Formula: 1, b3, 5, b7</b>
      </Typography>
      <Typography variant="body1" align="center">
        <b>
          Minor 7th Chord Formula: Root, Minor Third, Perfect Fifth, Minor
          Seventh
        </b>
      </Typography>
      <Typography variant="body1">
        The result is the C Minor 7th and E Minor 7th Chord consisting of the
        following notes:
      </Typography>
      <Typography variant="body1" align="center">
        <b>C Minor 7th Chord: C, E, G, Bb</b>
      </Typography>
      <Typography variant="body1" align="center">
        <b>E Minor 7th Chord: E, G#, B, D</b>
      </Typography>
      <Box display="flex" flexDirection="row" justifyContent="space-evenly">
        <Link
          href="assets/high-quality/GDAE_Chords/GDAE-Minor7th-A4.pdf"
          target="_blank"
        >
          <img
            id="Minor7thChords"
            src="assets/low-quality/GDAE_Chords/GDAE-Minor7th-A4.jpg"
            alt="Major Chords in GDAE Tuning"
          />
        </Link>
        <Link
          href="assets/high-quality/GDAD_Chords/GDAD-Minor7th-A4.pdf"
          target="_blank"
        >
          <img
            src="assets/low-quality/GDAD_Chords/GDAD-Minor7th-A4.jpg"
            alt="Major Chords in GDAD Tuning"
          />
        </Link>
      </Box>
      <Typography variant="h2">Dominant 7th Chords</Typography>
      <Typography variant="body1">
        Dominant 7th Chords are extended chords consisting of four notes. The
        chord is also known as the Major Minor Seventh Chord as it borrows
        intervals from both the Major scale and the Minor scale. The chord is
        formed using the Root (1), Major Third (3), Perfect Fifth (5) and Minor
        Seventh (b7). To construct the C Dominant 7th and E Dominant 7th chord
        you begin with both scales consisting of the following notes:
      </Typography>
      <Typography variant="body1" align="center">
        <b>C Major Scale: C, D, E, F, G, A, B, C</b>
      </Typography>
      <Typography variant="body1" align="center">
        <b>E Major Scale: E, F#, G#, A, B, C#, D#, E</b>
      </Typography>
      <Typography variant="body1" align="center">
        <b>C Minor Scale: C, D, Eb, F, G, Ab, Bb, C</b>
      </Typography>
      <Typography variant="body1" align="center">
        <b>E Minor Scale: E, F#, G, A, B, C, D, E</b>
      </Typography>
      <Typography variant="body1">
        Extracting the four notes required from these scales means applying the
        following formula to each scale:
      </Typography>
      <Typography variant="body1" align="center">
        <b>Dominant 7th Chord Formula: 1, 3, 5, b7</b>
      </Typography>
      <Typography variant="body1" align="center">
        <b>
          Dominant 7th Chord Formula: Root, Major Third, Perfect Fifth, Minor
          Seventh
        </b>
      </Typography>
      <Typography variant="body1">
        The result is the C Dominant 7th and E Dominant 7th Chord consisting of
        the following notes:
      </Typography>
      <Typography variant="body1" align="center">
        <b>C Dominant 7th Chord: C, E, G, Bb</b>
      </Typography>
      <Typography variant="body1" align="center">
        <b>E Dominant 7th Chord: E, G#, B, D</b>
      </Typography>
      <Box display="flex" flexDirection="row" justifyContent="space-evenly">
        <Link
          href="assets/high-quality/GDAE_Chords/GDAE-Dominant7th-A4.pdf"
          target="_blank"
        >
          <img
            id="Dominant7thChords"
            src="assets/low-quality/GDAE_Chords/GDAE-Dominant7th-A4.jpg"
            alt="Dominant 7th Chords in GDAE Tuning"
          />
        </Link>
        <Link
          href="assets/high-quality/GDAD_Chords/GDAD-Dominant7th-A4.pdf"
          target="_blank"
        >
          <img
            src="assets/low-quality/GDAD_Chords/GDAD-Dominant7th-A4.jpg"
            alt="Dominant 7th Chords in GDAD Tuning"
          />
        </Link>
      </Box>
    </section>
  </Page>
)

export default Chords
