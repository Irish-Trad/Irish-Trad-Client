import React from 'react'
import Metadata from 'common/Metadata'

import {
  H1,
  ButtonContainer,
  Button,
  Text,
  InternalLink,
  ExternalLink,
  HashLink,
  ImageContainer,
  Image,
} from './ClefToTab.styles'

const ClefToTab: React.FC = () => (
  <>
    <Metadata
      title="Irish-Trad.net - Cleft to TAB"
      metaTitle="Irish-Trad.net - Cleft to TAB"
      metaKeywords="Irish Trad, Irish Traditional, Irish Tenor Banjo, Irish Bouzouki, Bouzouki, Mandolin, Octave Mandolin, Mandola, Octave Mandola, Chords, TAB, Tablature"
      metaDescription="Treble Cleft to TAB - GDAE & GDAD for Irish Bouzouki/Mandolin/Octave Mandolin/Irish Tenor Banjo"
    />
    <H1>Cleft to Tablature</H1>
    <ButtonContainer>
      <HashLink to="#clef-to-tab-GDAE">
        <Button>GDAE</Button>
      </HashLink>
      <HashLink to="#clef-to-tab-GDAD">
        <Button>GDAD</Button>
      </HashLink>
    </ButtonContainer>
    <Text>
      The most popular system used for presenting musical notation is sheet
      music. The following diagram can be used to convert any piece of sheet
      music into tablature - as long as the sheet music is within the Irish
      Bouzouki's capabilities. The full sounding range of a 24 fret Irish
      Bouzouki tuned GDAE is G2 (98Hz) to E6 (1319Hz) - slightly less than 4
      octaves.
    </Text>
    <Text>
      Sheet music for traditional Irish tunes can be found on websites such as
      <ExternalLink href="https://www.thesession.org/" target="_blank">
        The Session
      </ExternalLink>
      . Music books that are found in music shops tend to showcase sheet music
      only. Looking at books that are designed specifically for the Irish
      Bouzouki or the Mandolin are good places to start because they are
      designed with the instruments range in mind. However even the music books
      scored for piano can be converted to the Irish Bouzouki using the diagram
      found on this page.
    </Text>
    <Text>
      The lowest pitch that the Irish Bouzouki is able to produce naturally is
      the G note found by playing the thickest string open. When looking at the
      conversion diagram there is only one way to play this note when it is
      notated on a treble clef. There is also one way to play the highest note
      the Irish Bouzouki can produce - the 24th fret on the E string. In the
      mid-range of the Irish Bouzouki there begins to be multiple ways of
      producing the same note. In some instances there are 2 ways and other
      times there is 4 ways. Normally a couple of these are simple impractical
      to attempt. An example of two ways to play an A note is the open A string
      and the same note can be produced by playing the 7th fret of the G string.
      These notes are exactly the same pitch. However this is a slight
      difference in timbre due to the thickness of each string.
    </Text>
    <Text>
      Learning to read sheet music quickly and efficiently requires continuous
      practice. This tends to be a tedious activity which is why many musicians
      such as guitarists rely heavily or solely on tablature to instruct them
      what to play. Sheet music is the universal language and alphabet of
      musicians as such it is an incredibly valuable tool to learn and
      understand as it would enable you the ability to transcribe for other
      musicians your own work.
    </Text>
    <ImageContainer>
      <InternalLink
        href="assets/high-quality/GDAE - Clef To TAB.pdf"
        target="_blank"
      >
        <Image
          id="clef-to-tab-GDAE"
          src="assets/low-quality/GDAE - Clef To TAB.jpg"
          alt="GDAE Treble Clef to TAB"
          text="GDAE Treble Clef to TAB"
          width="100%"
          height="100%"
        />
      </InternalLink>
      <InternalLink
        href="assets/high-quality/GDAD - Clef To TAB.pdf"
        target="_blank"
      >
        <Image
          id="clef-to-tab-GDAD"
          src="assets/low-quality/GDAD - Clef To TAB.jpg"
          alt="GDAD Treble Clef to TAB"
          text="GDAD Treble Clef to TAB"
          width="100%"
          height="100%"
        />
      </InternalLink>
    </ImageContainer>
  </>
)

export default ClefToTab
