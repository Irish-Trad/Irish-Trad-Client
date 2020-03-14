import React from 'react'
import Metadata from 'common/Metadata'

import {
  MainContainer,
  H1,
  H2,
  Text,
  CenterText,
  InternalLink,
  LinkText,
  ExternalLink
} from './Lessons.styles'

const Lessons = () => (
  <MainContainer>
    <Metadata
      title="Irish-Trad.net - Lessons"
      metaTitle="Irish-Trad.net - Lessons"
      metaKeywords="Irish Trad, Irish Traditional, Irish Tenor Banjo, Irish Bouzouki, Bouzouki, Mandolin, Octave Mandolin, Mandola, Octave Mandola, Chords, TAB, Tablature"
      metaDescription="Free Online Lessons and Resources for Irish Bouzouki/Mandolin/Octave Mandolin/Irish Tenor Banjo"
    />
    <H1>Lessons</H1>
    <H2>Preparation:</H2>
    <InternalLink to={'/lessons/how-to-string'}>
      <LinkText>How to string your instrument</LinkText>
    </InternalLink>
    <Text>
      Knowing how to string your instrument is an essential skill every musician
      needs to learn. It can be a daunting task for beginners because of
      uncertainty and fear of damaging the instrument. This section covers how
      to string the instrument and the different options available when buying
      strings.
    </Text>
    <InternalLink to={'/lessons/how-to-tune'}>
      <LinkText>How to tune your instrument</LinkText>
    </InternalLink>
    <Text>
      When playing with other musicians it is vital that your instrument is in
      tune. This section covers how to use a chromatic tuner and the different
      tuning configurations available to the Irish Bouzouki.
    </Text>
    <InternalLink to={'/lessons/how-to-read-tab'}>
      <LinkText>How to read tablature</LinkText>
    </InternalLink>
    <Text>
      Tablature is a form of music notation structured towards fretted
      instruments. It is regarded as one of the quickest methods for teaching
      beginners how to start making music. This section covers how to read
      tablature.
    </Text>
    <H2>Useful Websites:</H2>
    <ExternalLink
      href="https://thesession.org/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <LinkText>The Session</LinkText>
    </ExternalLink>
    <CenterText>
      The best resource for traditional Irish sheet music.
    </CenterText>
    <ExternalLink
      href="https://www.atuneaweek.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <LinkText>A Tune A Week</LinkText>
    </ExternalLink>
    <CenterText>
      A great resource to keep you motivated and help choose what tune to learn
      next.
    </CenterText>
    <ExternalLink
      href="https://irish-music.net/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <LinkText>Irish-Music</LinkText>
    </ExternalLink>
    <CenterText>
      Useful website that provides links to many resources for traditional Irish
      instruments.
    </CenterText>
    <ExternalLink
      href="https://www.mandolessons.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <LinkText>Mando Lessons</LinkText>
    </ExternalLink>
    <CenterText>
      Mandolin focused website providing high quality video lessons.
    </CenterText>
  </MainContainer>
)

export default Lessons
