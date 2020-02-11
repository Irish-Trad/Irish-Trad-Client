import React from 'react'

import { MainContainer, H1, H2, Text, Container, Link } from './Lessons.styles'

const Lessons = () => (
  <MainContainer>
    <H1>Lessons</H1>
    <H2>Preparation:</H2>
    <Container>
      <Link href="../pages/lessons/stringing-the-instrument.html">
        How to string your instrument
      </Link>
      <Text>
        Knowing how to string your instrument is an essential skill every
        musician needs to learn. It can be a daunting task for beginners because
        of uncertainty and fear of damaging the instrument. This section covers
        how to string the instrument and the different options available when
        buying strings.
      </Text>
      <Link href="../pages/lessons/tuning-the-instrument.html">
        How to tune your instrument
      </Link>
      <Text>
        When playing with other musicians it is vital that your instrument is in
        tune. This section covers how to use a chromatic tuner and the different
        tuning configurations available to the Irish Bouzouki.
      </Text>
      <Link href="../pages/lessons/how-to-read-tablature.html">
        How to read tablature
      </Link>
      <Text>
        Tablature is a form of music notation structured towards fretted
        instruments. It is regarded as one of the quickest methods for teaching
        beginners how to start making music. This section covers how to read
        tablature.
      </Text>
    </Container>
    <H2>Useful Websites:</H2>
    <Container>
      <Link
        href="https://thesession.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        The Session
      </Link>
      <Text>The best resource for Irish traditional sheet music.</Text>
      <Link
        href="http://irish-music.net/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Irish-Music
      </Link>
      <Text>
        Useful website that provides links to many resources for traditional
        Irish instruments.
      </Text>
      <Link
        href="http://mandolessons.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Mando Lessons
      </Link>
      <Text>
        Mandolin focused website providing high quality video lessons.
      </Text>
    </Container>
  </MainContainer>
)

export default Lessons
