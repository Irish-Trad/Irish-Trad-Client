import React from 'react'
import Metadata from 'common/Metadata'

import {
  H1,
  H2,
  Text,
  IntroContainer,
  ExternalLink,
  Divider,
} from './Homepage.styles'

const Homepage: React.FC = () => (
  <>
    <Metadata
      title="Irish-Trad.net - Home"
      metaTitle="Irish-Trad.net - Home"
      metaKeywords="Irish, Irish Trad, Irish Traditional Music, Irish Folk Music, Irish Bouzouki, Bouzouki, Mandolin, Octave Mandolin, Mandola, Octave Mandola, Chords, TAB, Tablature"
      metaDescription="Free Online Lessons and Resources for Irish Bouzouki/Mandolin/Octave Mandola/Irish Tenor Banjo"
    />
    <IntroContainer>
      <H1>Irish-Trad.net</H1>
      <Text>
        Irish-Trad.net provides free online resources and lessons for a variety
        of stringed instruments commonly found in traditional Irish sessions
        such as the Irish Bouzouki, Mandolin, Octave Mandola and Irish Tenor
        Banjo.
      </Text>
    </IntroContainer>
    <Divider>
      <H2>Introduction</H2>
      <Text>
        The resources found on Irish-Trad.net such as chord diagrams and scales
        refer to any instrument that can be tuned to the standard GDAE or
        alternative GDAD tuning.
      </Text>
      <Text>
        Most people who decide to learn traditional Irish music for the first
        time do so having already played a different stringed instrument such as
        the guitar. For guitar players, the most popular method of teaching is
        through tablature because of the simplicity and ability to get a person
        playing quickly. The lessons and resources on Irish-Trad.net are
        presented in tablature (TAB) alongside traditional sheet music to
        satisfy the absolute beginner and the musically trained.
      </Text>
      <Text>
        Irish-Trad.net will not be hosting any copyrighted tunes or songs and
        instead aims to provide all the information and musical theory required
        to bring a player to the level where they can use a website such as
        <ExternalLink href="https://thesession.org/"> The Session</ExternalLink>
        to play any of the tunes available there.
      </Text>
    </Divider>
    <Divider>
      <H2>Lessons</H2>
      <Text>
        The lessons section will provide information such as open chords, basic
        scales, moveable chords (barre) and additional information such as how
        to use accessories like a capo or how to change and tune strings. Music
        theory will also be used to reinforce an understanding of how chords and
        scales are construced.
      </Text>
    </Divider>
    <Divider>
      <H2>Chords</H2>
      <Text>
        The chords section provides chord charts for the two most common tunings
        - GDAE and GDAD. The section covers basic triads such as Major and Minor
        and extended chords such as Major 7th, Minor 7th and Dominant 7th. The
        section will be expanded to include 'quick' moveable chords.
      </Text>
    </Divider>
    <Divider>
      <H2>Clef to TAB</H2>
      <Text>
        The Cleft-to-TAB section provides a conversion chart that allows for any
        piece of sheet music found in a book or online to be converted into
        tablature - as long as the piece music covers less than 4 octaves (the
        range of the Irish Bouzouki).
      </Text>
    </Divider>
    <Divider>
      <H2>Terminology</H2>
      <Text>
        The terminology section provides an A-Z of common phrases, names and
        abbreviations that can be found across traditional irish music and
        session settings.
      </Text>
    </Divider>
  </>
)

export default Homepage
