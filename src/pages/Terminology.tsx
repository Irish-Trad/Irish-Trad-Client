import PageMeta from 'components/PageMeta'
import Page from 'components/Page'

const terms = [
  {
    term: `Arpeggio`,
    description: `The notes of a chord played individually.`,
  },
  {
    term: `Bending`,
    description: `Pushing and pulling the string in a vertical plane after
    sounding will cause the pitch to increase. Very common technique for
    guitar players.`,
  },
  {
    term: `BPM`,
    description: `Beats per Minute.`,
  },
  {
    term: `CBOM`,
    description: `Abbreviation for Cittern, Bouzouki, Octave Mandolin.`,
  },
  {
    term: `Chord`,
    description: `Three or more notes played together form a chord.`,
  },
  {
    term: `GDAE`,
    description: `Tuning found on 4/8 string instruments used in traditional Irish music from lowest pitched to highest
    pitched string.`,
  },
  {
    term: `GDAD`,
    description: `Alternative tuning found on 4/8 string instruments used in traditional Irish music from lowest pitched to highest
    pitched string.`,
  },
  {
    term: `Interval`,
    description: `The distance between one note and another.`,
  },
  {
    term: `Octave Mandolin`,
    description: `The Octave Mandolin is pitched one octave lower
    than a standard mandolin (G2,D3,A3,E4). The name Octave Mandola (Europe)
    is interchangeable with the Octave Mandolin (America). They are the same
    instrument.`,
  },
  {
    term: `Octave Mandola`,
    description: `The Octave Mandola is pitched one octave lower
    than a standard mandolin (G2,D3,A3,E4). The name Octave Mandola (Europe)
    is interchangeable with the Octave Mandolin (America). They are the same
    instrument.`,
  },
  {
    term: `Sounding Range`,
    description: `The range of notes that an instrument is capable
    of producing naturally.`,
  },
  {
    term: `String Gauge`,
    description: `The thickness of a string. As instrument strings
    are normally sold in packs a musician will typically respond to a
    question about the string gauge they use by referring to the thinnest
    string. For example, "11's" would suggest a pack of strings with the
    thinnest string in the pack being 11.`,
  },
  {
    term: `Tempo`,
    description: `The speed at which a piece of music is played. The exact
    pace is specified by BPM.`,
  },
  {
    term: `Treble`,
    description: `The same rhythm as a triplet while remaining
    on the same note`,
  },
  {
    term: `Trill`,
    description: `Rapid alteration between two notes. Normally achieved
    through hammer-ons and pull-offs on the Irish Bouzouki.`,
  },
  {
    term: `Vibrato`,
    description: `Quick and repetitive micro-bends that create a
    fluctuating pitch. Reminiscent of a vocalist who holds a note for a long
    time.`,
  },
]

const Terminology = () => (
  <PageMeta
    title="Irish-Trad.net - Terminology"
    metaDescription="Terminology for Irish Bouzouki/Mandolin/Octave Mandolin/Irish Tenor Banjo"
  >
    <Page header="Terminology">
      {terms.map(({ term, description }) => (
        <p>
          <b>{term}: </b>
          {description}
        </p>
      ))}
    </Page>
  </PageMeta>
)

export default Terminology
