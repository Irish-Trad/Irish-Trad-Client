import React from "react";

import { Container, H1, H2, Text, Link } from "./Homepage.styles";

const Homepage = () => (
  <Container>
    <H1>Irish-Trad.net</H1>
    <Text>
      Irish-Trad.net provides free online resources and lessons for the Irish
      Bouzouki, Mandolin, Octave Mandola and Irish Tenor Banjo. The same chord
      diagrams and scales apply to all of these instruments as they are tuned to
      a standard GDAE or alternative GDAD tuning.
    </Text>
    <figure>
      <img
        src="../assets/low-quality/2243E.jpg"
        alt="Ozark 2243E Irish Bouzouki"
        title="Ozark 2243E Irish Bouzouki"
      />
      <figcaption>Pictured: Ozark 2243E Irish Bouzouki</figcaption>
    </figure>
    <Text>
      The Irish Bouzouki is a popular stringed instrument used for accompaniment
      during traditional Irish sessions. Due to the Irish Bouzouki's scale
      length and overall pitch this tends to be in the form of chordal
      accompaniment however the instrument is also capable of performing melody
      lines. It is a relatively young instrument and a lot of its history &amp;
      origin can be found on Wikipedia:{" "}
      <Link href="https://en.wikipedia.org/wiki/Irish_Bouzouki">
        Wikipedia - Irish Bouzouki
      </Link>
      .
    </Text>
    <Text>
      Most people who discover the Irish Bouzouki for the first time do so
      having already played a different stringed instrument such as the guitar,
      mandolin or banjo. For guitar players, the most popular method of teaching
      is through tablature because of its simplicity and ability to get a person
      playing quickly. The lessons and resources on Irish-Bouzouki.net are
      presented in tablature (TAB) alongside traditional sheet music to satisfy
      the absolute beginner and the musically trained.
    </Text>
    <Text>
      Irish-Bouzouki.net will not be hosting any copyrighted tunes or songs but
      instead provides all the information and musical theory required to bring
      a player to the level where they can use a website such as{" "}
      <Link href="https://thesession.org/">The Session</Link> to play any of the
      tunes available there.
    </Text>
    <H2>Lessons</H2>
    <Text>
      The lessons section will provide information similar to material for
      guitar players. For example: open chords, basic scales, barre and
      'moveable' chords and additional information such as how to use
      accessories like a capo or how to change and tune Bouzouki strings. Music
      theory will also be used to cement an understanding of how chords and
      scales are construced.
    </Text>
    <H2>Chords</H2>
    <Text>
      The chords section provides chord charts for the two most common tunings
      found on the Irish Bouzouki - GDAE and GDAD. The section covers basic
      triads such as Major and Minor and extended chords such as Major 7th,
      Minor 7th and Dominant 7th. The section will be expanded to include
      'quick' moveable chords.
    </Text>
    <H2>Clef to TAB</H2>
    <Text>
      The Cleft-to-TAB section provides a conversion chart that allows for any
      piece of sheet music found in a book or online to be converted into
      tablature - as long as the piece music covers less than 4 octaves (the
      range of the Irish Bouzouki).
    </Text>
  </Container>
);

export default Homepage;
