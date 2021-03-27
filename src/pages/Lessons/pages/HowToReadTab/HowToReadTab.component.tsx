import Page from 'components/Page'

import {
  H1,
  Text,
  InternalLink,
} from 'common/StyledComponents/StyledComponents'

import {
  H2,
  ButtonContainer,
  Button,
  ExternalLink,
  Figure,
  Figcaption,
  Image,
} from './HowToReadTab.styles'

const HowToReadTab = () => (
  <Page
    title="Irish-Trad.net - How to read Tablature"
    metaDescription="How to read Tablature for Irish Bouzouki/Mandolin/Octave Mandolin/Irish Tenor Banjo"
  >
    <H1>How to read Tablature</H1>
    <ButtonContainer>
      <InternalLink to="/lessons">
        <Button>Return to Lessons Page</Button>
      </InternalLink>
    </ButtonContainer>
    <section>
      <H2>Introduction:</H2>
      <Text>
        Tablature is a form of music notation designed specifically for fretted
        instruments such as the Irish Bouzouki. Tablature is regarded as one of
        the quickest methods for teaching people how to play music. The word
        tablature is normally shortened to just TAB.
      </Text>
      <H2>How to:</H2>
      <Text>
        Figure 1 shows two forms of music notation (standard notation and
        tablature). The highlighted section is the tablature and understanding
        how to read this information will be the focus of the lesson.
      </Text>
      <Figure>
        <ExternalLink
          href="assets/high-quality/TAB_Lesson/TAB02.jpg"
          target="_blank"
        >
          <Image
            src="assets/low-quality/TAB_Lesson/TAB02.jpg"
            alt="Standard Notation & Tablature"
            title="Standard Notation & Tablature"
          />
        </ExternalLink>
        <Figcaption>Figure 1: Standard Notation & Tablature</Figcaption>
      </Figure>
      <Text>
        To read tablature you have to picture that you are looking directly down
        on the strings of the instrument. Every string of the instrument is
        represented by a horizontal line. Instruments that have 4 strings (2
        sets of 4) such as the Irish Bouzouki or Mandolin are represented by 4
        horizontal lines.
      </Text>
      <Text>
        Figure 2 shows the direction that the strings are read. In this example
        every horizontal line is labelled with the name of the string in
        standard tuning.
      </Text>
      <Figure>
        <ExternalLink
          href="assets/high-quality/TAB_Lesson/TAB04.jpg"
          target="_blank"
        >
          <Image
            src="assets/low-quality/TAB_Lesson/TAB04.jpg"
            alt="String Direction"
            title="String Direction"
          />
        </ExternalLink>
        <Figcaption>Figure 2: String Direction</Figcaption>
      </Figure>
      <Text>
        Numbers presented along the horizontal line instructs you of what fret
        to play. In Figure 3 the highlighted note is the number 0 (open string).
        As the horizontal line corresponds to the G string this means that you
        play an open G string to play this highlighted note.
      </Text>
      <Figure>
        <ExternalLink href="assets/high-quality/TAB_Lesson/TAB05.jpg">
          <Image
            src="assets/low-quality/TAB_Lesson/TAB05.jpg"
            alt="Single Note & Open String"
            title="Single Note & Open String"
          />
        </ExternalLink>
        <Figcaption>Figure 3: Single Note & Open String</Figcaption>
      </Figure>
      <Text>
        Figure 4 highlights a section that shows how to play two notes at the
        same time. Numbers that are presented directly above and below each
        other mean they are played simultaneously. The highlighted section
        instructs you to play the 2nd fret of the D string and the open G
        string.
      </Text>
      <Figure>
        <ExternalLink
          href="assets/high-quality/TAB_Lesson/TAB06.jpg"
          target="_blank"
        >
          <Image
            src="assets/low-quality/TAB_Lesson/TAB06.jpg"
            alt="More Than One Note"
            title="More Than One Note"
          />
        </ExternalLink>
        <Figcaption>Figure 4: More Than One Note</Figcaption>
      </Figure>
      <Text>
        The highlighted section in Figure 5 shows how to play a note on every
        string at the same time. Doing this results in a chord. For this the G
        and D string are played open while the A string is fretted at 2nd fret
        and the E string is the 3rd fret. Strumming all the strings in a swift
        motion causes them to ring simultaneously. This produces a G Major
        chord.
      </Text>
      <Figure>
        <ExternalLink
          href="assets/high-quality/TAB_Lesson/TAB07.jpg"
          target="_blank"
        >
          <Image
            src="assets/low-quality/TAB_Lesson/TAB07.jpg"
            alt="Full Chord"
            title="Full Chord"
          />
        </ExternalLink>
        <Figcaption>Figure 5: Full Chord</Figcaption>
      </Figure>
      <Text>
        Figure 6 is a series of single notes played in order. This actually
        performs the G Major scale. Information about chords and scales will be
        provided in future lessons.
      </Text>
      <Figure>
        <ExternalLink
          href="assets/high-quality/TAB_Lesson/TAB08.jpg"
          target="_blank"
        >
          <Image
            src="assets/low-quality/TAB_Lesson/TAB08.jpg"
            alt="Playing Through A Scale"
            title="Playing Through A Scale"
          />
        </ExternalLink>
        <Figcaption>Figure 6: Playing Through A Scale</Figcaption>
      </Figure>
      <H2>Summary:</H2>
      <Text>
        Tablature (TAB) presents each string of an instrument on a horizontal
        line and instructs the musician of which fret to play by placing numbers
        along those horizontal lines. The thickest and lowest pitched string is
        at the bottom of the tablature while the thinnest and highest pitched
        string is at the top. Notes that are directly above and below each other
        on the horizontal line are played simeltaneously.
      </Text>
      <Text>
        While not showcased in this lesson tablature is also able represent
        (using symbols) a variety of techniques along the horizontal lines such
        as sliding between notes, hammer-ons and pull-offs, trills and bends.
      </Text>
    </section>
  </Page>
)

export default HowToReadTab
