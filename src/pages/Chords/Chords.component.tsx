import React from 'react'
import Metadata from 'common/Metadata'

import {
  H1,
  H2,
  ButtonContainer,
  Button,
  A,
  InternalLink,
  Text,
  CenterText,
  Bold,
  ImageContainer,
  Image,
} from './Chords.styles'

const Chords: React.FC = () => (
  <>
    <Metadata
      title="Irish-Trad.net - Chords"
      metaTitle="Irish-Trad.net - Chords"
      metaKeywords="Irish Trad, Irish Traditional, Irish Tenor Banjo, Irish Bouzouki, Bouzouki, Mandolin, Octave Mandolin, Mandola, Octave Mandola, Chords, TAB, Tablature"
      metaDescription="Chords - GDAE & GDAD for Irish Bouzouki/Mandolin/Octave Mandolin/Irish Tenor Banjo/Irish Tenor Banjo"
    />
    <H1>Chords</H1>
    <ButtonContainer>
      <A to="#MajorChords">
        <Button>Major Chords</Button>
      </A>
      <A to="#MinorChords">
        <Button>Minor Chords</Button>
      </A>
      <A to="#Major7thChords">
        <Button>Major 7th Chords</Button>
      </A>
      <A to="#Minor7thChords">
        <Button>Minor 7th Chords</Button>
      </A>
      <A to="#Dominant7thChords">
        <Button>Dominant 7th Chords</Button>
      </A>
    </ButtonContainer>
    <Text>
      The chord diagrams found on this page showcase one way in which to play
      each chord type. Use the navigation bookmarks above to quickly jump to the
      image file for the chord type you require.
    </Text>
    <Text>
      A theoretical description as to how the chords are constructed can be
      found above each diagram.
    </Text>
    <Text>
      The patterns showcased aim to balance popularity of the shape, ease of
      play and inclusion of open strings. On other stringed instruments such as
      the guitar the root note of each chord is typically played on the lowest
      pitched or heaviest string but on the Irish Bouzouki this isn't always the
      case. When the third, fifth or seventh interval is played on the lowest
      pitched string these chords are considered in an inverted state. The
      chords still contain all the notes required to produce the overall
      tonality. In a traditional session other instruments that are pitched even
      lower than the Irish Bouzouki such as the double bass or bass guitar will
      fulfill the root notes role.
    </Text>
    <H2>Major Chords</H2>
    <Text>
      The basic Major chord consists of three notes. The chord is formed using
      the Root (1), Major Third (3) and Perfect Fifth (5) intervals of each
      Major scale. To construct the C Major and E Major chord you begin with the
      scale consisting of the following notes:
    </Text>
    <CenterText>
      <Bold>C Major Scale: C, D, E, F, G, A, B, C</Bold>
    </CenterText>
    <CenterText>
      <Bold>E Major Scale: E, F#, G#, A, B, C#, D#, E</Bold>
    </CenterText>
    <Text>
      Extracting the three notes required from these scales means applying the
      following formula to each scale:
    </Text>
    <CenterText>
      <Bold>Major Chord Formula: 1, 3, 5</Bold>
    </CenterText>
    <CenterText>
      <Bold>Major Chord Formula: Root, Major Third, Perfect Fifth</Bold>
    </CenterText>
    <Text>
      The result is the C Major and E Major Chord consisting of the following
      notes:
    </Text>
    <CenterText>
      <Bold>C Major Chord: C, E, G</Bold>
    </CenterText>
    <CenterText>
      <Bold>E Major Chord: E, G#, B</Bold>
    </CenterText>
    <ImageContainer>
      <InternalLink
        href="assets/high-quality/GDAE_Chords/GDAE-Major-A4.pdf"
        target="_blank"
      >
        <Image
          id="MajorChords"
          src="assets/low-quality/GDAE_Chords/GDAE-Major-A4.jpg"
          alt="Major Chords in GDAE Tuning"
        />
      </InternalLink>
      <InternalLink
        href="assets/high-quality/GDAD_Chords/GDAD-Major-A4.pdf"
        target="_blank"
      >
        <Image
          src="assets/low-quality/GDAD_Chords/GDAD-Major-A4.jpg"
          alt="Major Chords in GDAD Tuning"
        />
      </InternalLink>
    </ImageContainer>
    <H2>Minor Chords</H2>
    <Text>
      The basic Minor chord consists of three notes. The chord is formed using
      the Root (1), Minor Third (b3) and Perfect Fifth (5) intervals of each
      Minor scale. To construct the C Minor and E Minor chord you begin with the
      scale consisting of the following notes:
    </Text>
    <CenterText>
      <Bold>C Minor Scale: C, D, Eb, F, G, Ab, Bb, C</Bold>
    </CenterText>
    <CenterText>
      <Bold>E Minor Scale: E, F#, G, A, B, C, D, E</Bold>
    </CenterText>
    <Text>
      Extracting the three notes required from these scales means applying the
      following formula to each scale:
    </Text>
    <CenterText>
      <Bold>Minor Chord Formula: 1, b3, 5</Bold>
    </CenterText>
    <CenterText>
      <Bold>Minor Chord Formula: Root, Minor Third, Perfect Fifth</Bold>
    </CenterText>
    <Text>
      The result is the C Minor and E Minor Chord consisting of the following
      notes:
    </Text>
    <CenterText>
      <Bold>C Minor Chord: C, Eb, G</Bold>
    </CenterText>
    <CenterText>
      <Bold>E Minor Chord: E, G, B</Bold>
    </CenterText>
    <ImageContainer>
      <InternalLink
        href="assets/high-quality/GDAE_Chords/GDAE-Minor-A4.pdf"
        target="_blank"
      >
        <Image
          id="MinorChords"
          src="assets/low-quality/GDAE_Chords/GDAE-Minor-A4.jpg"
          alt="Minor Chords in GDAE Tuning"
        />
      </InternalLink>
      <InternalLink
        href="assets/high-quality/GDAD_Chords/GDAD-Minor-A4.pdf"
        target="_blank"
      >
        <Image
          src="assets/low-quality/GDAD_Chords/GDAD-Minor-A4.jpg"
          alt="Minor Chords in GDAD Tuning"
        />
      </InternalLink>
    </ImageContainer>
    <H2>Major 7th Chords</H2>
    <Text>
      Major 7th Chords are extended chords consisting of four notes. The chord
      is formed using the Root (1), Major Third (3), Perfect Fifth (5) and Major
      Seventh (7) intervals of each Major scale. To construct the C Major 7th
      and E Major 7th chord you begin with the scale consisting of the following
      notes:
    </Text>
    <CenterText>
      <Bold>C Major Scale: C, D, E, F, G, A, B, C</Bold>
    </CenterText>
    <CenterText>
      <Bold>E Major Scale: E, F#, G#, A, B, C#, D#, E</Bold>
    </CenterText>
    <Text>
      Extracting the four notes required from these scales means applying the
      following formula to each scale:
    </Text>
    <CenterText>
      <Bold>Major 7th Chord Formula: 1, 3, 5, 7</Bold>
    </CenterText>
    <CenterText>
      <Bold>
        Major 7th Chord Formula: Root, Major Third, Perfect Fifth, Major Seventh
      </Bold>
    </CenterText>
    <Text>
      The result is the C Major 7th and E Major 7th Chord consisting of the
      following notes:
    </Text>
    <CenterText>
      <Bold>C Major 7th Chord: C, E, G, B</Bold>
    </CenterText>
    <CenterText>
      <Bold>E Major 7th Chord: E, G#, B, D#</Bold>
    </CenterText>
    <ImageContainer>
      <InternalLink
        href="assets/high-quality/GDAE_Chords/GDAE-Major7th-A4.pdf"
        target="_blank"
      >
        <Image
          id="Major7thChords"
          src="assets/low-quality/GDAE_Chords/GDAE-Major7th-A4.jpg"
          alt="Major Chords in GDAE Tuning"
        />
      </InternalLink>
      <InternalLink
        href="assets/high-quality/GDAD_Chords/GDAD-Major7th-A4.pdf"
        target="_blank"
      >
        <Image
          src="assets/low-quality/GDAD_Chords/GDAD-Major7th-A4.jpg"
          alt="Major Chords in GDAD Tuning"
        />
      </InternalLink>
    </ImageContainer>
    <H2>Minor 7th Chords</H2>
    <Text>
      Minor 7th Chords are extended chords consisting of four notes. The chord
      is formed using the Root (1), Minor Third (3), Perfect Fifth (5) and Minor
      Seventh (7) intervals of each Minor scale. To construct the C Minor 7th
      and E Minor 7th chord you begin with the scale consisting of the following
      notes:
    </Text>
    <CenterText>
      <Bold>C Minor Scale: C, D, Eb, F, G, Ab, Bb, C</Bold>
    </CenterText>
    <CenterText>
      <Bold>E Minor Scale: E, F#, G, A, B, C, D, E</Bold>
    </CenterText>
    <Text>
      Extracting the four notes required from these scales means applying the
      following formula to each scale:
    </Text>
    <CenterText>
      <Bold>Minor 7th Chord Formula: 1, b3, 5, b7</Bold>
    </CenterText>
    <CenterText>
      <Bold>
        Minor 7th Chord Formula: Root, Minor Third, Perfect Fifth, Minor Seventh
      </Bold>
    </CenterText>
    <Text>
      The result is the C Minor 7th and E Minor 7th Chord consisting of the
      following notes:
    </Text>
    <CenterText>
      <Bold>C Minor 7th Chord: C, E, G, Bb</Bold>
    </CenterText>
    <CenterText>
      <Bold>E Minor 7th Chord: E, G#, B, D</Bold>
    </CenterText>
    <ImageContainer>
      <InternalLink
        href="assets/high-quality/GDAE_Chords/GDAE-Minor7th-A4.pdf"
        target="_blank"
      >
        <Image
          id="Minor7thChords"
          src="assets/low-quality/GDAE_Chords/GDAE-Minor7th-A4.jpg"
          alt="Major Chords in GDAE Tuning"
        />
      </InternalLink>
      <InternalLink
        href="assets/high-quality/GDAD_Chords/GDAD-Minor7th-A4.pdf"
        target="_blank"
      >
        <Image
          src="assets/low-quality/GDAD_Chords/GDAD-Minor7th-A4.jpg"
          alt="Major Chords in GDAD Tuning"
        />
      </InternalLink>
    </ImageContainer>
    <H2>Dominant 7th Chords</H2>
    <Text>
      Dominant 7th Chords are extended chords consisting of four notes. The
      chord is also known as the Major Minor Seventh Chord as it borrows
      intervals from both the Major scale and the Minor scale. The chord is
      formed using the Root (1), Major Third (3), Perfect Fifth (5) and Minor
      Seventh (b7). To construct the C Dominant 7th and E Dominant 7th chord you
      begin with both scales consisting of the following notes:
    </Text>
    <CenterText>
      <Bold>C Major Scale: C, D, E, F, G, A, B, C</Bold>
    </CenterText>
    <CenterText>
      <Bold>E Major Scale: E, F#, G#, A, B, C#, D#, E</Bold>
    </CenterText>
    <CenterText>
      <Bold>C Minor Scale: C, D, Eb, F, G, Ab, Bb, C</Bold>
    </CenterText>
    <CenterText>
      <Bold>E Minor Scale: E, F#, G, A, B, C, D, E</Bold>
    </CenterText>
    <Text>
      Extracting the four notes required from these scales means applying the
      following formula to each scale:
    </Text>
    <CenterText>
      <Bold>Dominant 7th Chord Formula: 1, 3, 5, b7</Bold>
    </CenterText>
    <CenterText>
      <Bold>
        Dominant 7th Chord Formula: Root, Major Third, Perfect Fifth, Minor
        Seventh
      </Bold>
    </CenterText>
    <Text>
      The result is the C Dominant 7th and E Dominant 7th Chord consisting of
      the following notes:
    </Text>
    <CenterText>
      <Bold>C Dominant 7th Chord: C, E, G, Bb</Bold>
    </CenterText>
    <CenterText>
      <Bold>E Dominant 7th Chord: E, G#, B, D</Bold>
    </CenterText>
    <ImageContainer>
      <InternalLink
        href="assets/high-quality/GDAE_Chords/GDAE-Dominant7th-A4.pdf"
        target="_blank"
      >
        <Image
          id="Dominant7thChords"
          src="assets/low-quality/GDAE_Chords/GDAE-Dominant7th-A4.jpg"
          alt="Dominant 7th Chords in GDAE Tuning"
        />
      </InternalLink>
      <InternalLink
        href="assets/high-quality/GDAD_Chords/GDAD-Dominant7th-A4.pdf"
        target="_blank"
      >
        <Image
          src="assets/low-quality/GDAD_Chords/GDAD-Dominant7th-A4.jpg"
          alt="Dominant 7th Chords in GDAD Tuning"
        />
      </InternalLink>
    </ImageContainer>
  </>
)

export default Chords
