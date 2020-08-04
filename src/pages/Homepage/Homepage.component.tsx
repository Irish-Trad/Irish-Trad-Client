import React from 'react'
import Metadata from 'common/Metadata'

import {
  H1,
  Figure,
  Image,
  Figcaption,
  H2,
  Text,
} from 'common/StyledComponents/StyledComponents'

import { ExternalLink } from './Homepage.styles'

const Homepage: React.FC = () => (
  <>
    <Metadata
      title="Irish-Trad.net - Home"
      metaTitle="Irish-Trad.net - Home"
      metaKeywords="Irish, Irish Trad, Irish Traditional Music, Irish Folk Music, Irish Bouzouki, Bouzouki, Mandolin, Octave Mandolin, Mandola, Octave Mandola, Chords, TAB, Tablature"
      metaDescription="Free Online Lessons and Resources for Irish Bouzouki/Mandolin/Octave Mandola/Irish Tenor Banjo"
    />
    <H1>Irish-Trad.net</H1>
    <Text>
      Irish-Trad.net provides free online resources and lessons for a variety of
      stringed instruments commonly found in traditional Irish sessions such as
      the Irish Bouzouki, Mandolin, Octave Mandola and Irish Tenor Banjo.
    </Text>
    <Figure>
      <Image
        src="assets/low-quality/2243E.jpg"
        alt="Ozark 2243E Irish Bouzouki"
        title="Ozark 2243E Irish Bouzouki"
      />
      <Figcaption>Pictured: Ozark 2243E Irish Bouzouki</Figcaption>
    </Figure>
    <Text>
      Since all of these instruments can be tuned to the standard GDAE or
      alternative GDAD tuning all of the resources found on Irish-Trad.net such
      as chord diagrams and scales will apply.
    </Text>
    <Text>
      The Irish Bouzouki is a popular stringed instrument used for accompaniment
      during traditional Irish sessions. Due to the Irish Bouzouki's scale
      length and overall pitch this tends to be in the form of chordal
      accompaniment however the instrument is also capable of performing melody
      lines. It is a relatively young instrument and a lot of its history &amp;
      origin can be found on Wikipedia:{' '}
      <ExternalLink
        href="https://en.wikipedia.org/wiki/Irish_Bouzouki"
        target="_blank"
      >
        Wikipedia - Irish Bouzouki
      </ExternalLink>
      .
    </Text>
    <Text>
      Most people who discover the Irish Bouzouki for the first time do so
      having already played a different stringed instrument such as the guitar,
      mandolin or banjo. For guitar players, the most popular method of teaching
      is through tablature because of its simplicity and ability to get a person
      playing quickly. The lessons and resources on Irish-Trad.net are presented
      in tablature (TAB) alongside traditional sheet music to satisfy the
      absolute beginner and the musically trained.
    </Text>
    <Text>
      Irish-Trad.net will not be hosting any copyrighted tunes or songs but
      instead provides all the information and musical theory required to bring
      a player to the level where they can use a website such as{' '}
      <ExternalLink href="https://thesession.org/">The Session</ExternalLink> to
      play any of the tunes available there.
    </Text>
    <H2>Lessons</H2>
    <Text>
      The lessons section will provide information such as open chords, basic
      scales, barre and 'moveable' chords and additional information such as how
      to use accessories like a capo or how to change and tune Bouzouki strings.
      Music theory will also be used to reinforce an understanding of how chords
      and scales are construced.
    </Text>
    <H2>Chords</H2>
    <Text>
      The chords section provides chord charts for the two most common tunings -
      GDAE and GDAD. The section covers basic triads such as Major and Minor and
      extended chords such as Major 7th, Minor 7th and Dominant 7th. The section
      will be expanded to include 'quick' moveable chords.
    </Text>
    <H2>Clef to TAB</H2>
    <Text>
      The Cleft-to-TAB section provides a conversion chart that allows for any
      piece of sheet music found in a book or online to be converted into
      tablature - as long as the piece music covers less than 4 octaves (the
      range of the Irish Bouzouki).
    </Text>
    <H2>Terminology</H2>
    <Text>
      The terminology section provides an A-Z of common phrases, names and
      abbreviations that can be found across traditional irish music and session
      settings.
    </Text>
  </>
)

export default Homepage
