import React from 'react'

import { MainContainer, Button } from './Chords.styles'

const Chords = () => (
  // <!-- Main Section -->
  <MainContainer>
    {/* <!-- Content --> */}
    <h1>Chords</h1>
    {/* <!-- Bookmarks --> */}
    <div>
      <a href="#MajorChords">
        <Button>Major Chords</Button>
      </a>
      <a href="#MinorChords">
        <Button>Minor Chords</Button>
      </a>
      <a href="#Major7thChords">
        <Button>Major 7th Chords</Button>
      </a>
      <a href="#Minor7thChords">
        <Button>Minor 7th Chords</Button>
      </a>
      <a href="#Dominant7thChords">
        <Button>Dominant 7th Chords</Button>
      </a>
    </div>
    {/* <!-- Introduction --> */}
    <div>
      <p>
        The chord diagrams found on this page showcase one way in which to play
        each chord type. Use the navigation bookmarks above to quickly jump to
        the image file for the chord type you require.
      </p>
      <p>
        A theoretical description as to how the chords are constructed can be
        found above each diagram.
      </p>
      <p>
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
      </p>
    </div>
    {/* <!-- Major Chords --> */}
    <h1>
      <u>Major Chords</u>
    </h1>
    <p>
      The basic Major chord consists of three notes. The chord is formed using
      the Root (1), Major Third (3) and Perfect Fifth (5) intervals of each
      Major scale. To construct the C Major and E Major chord you begin with the
      scale consisting of the following notes:
    </p>
    <p>C Major Scale: C, D, E, F, G, A, B, C</p>
    <p>E Major Scale: E, F#, G#, A, B, C#, D#, E</p>
    <p>
      Extracting the three notes required from these scales means applying the
      following formula to each scale:
    </p>
    <p>Major Chord Formula: 1, 3, 5</p>
    <p>Major Chord Formula: Root, Major Third, Perfect Fifth</p>
    <p>
      The result is the C Major and E Major Chord consisting of the following
      notes:
    </p>
    <p>C Major Chord: C, E, G</p>
    <p>E Major Chord: E, G#, B</p>
    <div>
      <a
        href="../img/high-quality/GDAE_Chords/GDAE_Major_A4.jpg"
        target="_blank"
      >
        <img
          id="MajorChords"
          src="../img/low-quality/GDAE_Chords/GDAE_Major_A4.jpg"
          alt="Major Chords in GDAE Tuning"
          text="Major Chords in GDAE Tuning"
        />
      </a>
      <a
        href="../img/high-quality/GDAD_Chords/GDAD_Major_A4.jpg"
        target="_blank"
      >
        <img
          src="../img/low-quality/GDAD_Chords/GDAD_Major_A4.jpg"
          alt="Major Chords in GDAD Tuning"
          text="Major Chords in GDAD Tuning"
        />
      </a>
    </div>
    {/* <!-- Minor Chords --> */}
    <h1>
      <u>Minor Chords</u>
    </h1>
    <p>
      The basic Minor chord consists of three notes. The chord is formed using
      the Root (1), Minor Third (b3) and Perfect Fifth (5) intervals of each
      Minor scale. To construct the C Minor and E Minor chord you begin with the
      scale consisting of the following notes:
    </p>
    <p>C Minor Scale: C, D, Eb, F, G, Ab, Bb, C</p>
    <p>E Minor Scale: E, F#, G, A, B, C, D, E</p>
    <p>
      Extracting the three notes required from these scales means applying the
      following formula to each scale:
    </p>
    <p>Minor Chord Formula: 1, b3, 5</p>
    <p>Minor Chord Formula: Root, Minor Third, Perfect Fifth</p>
    <p>
      The result is the C Minor and E Minor Chord consisting of the following
      notes:
    </p>
    <p>C Minor Chord: C, Eb, G</p>
    <p>E Minor Chord: E, G, B</p>

    <div>
      <a
        href="../img/high-quality/GDAE_Chords/GDAE_Minor_A4.jpg"
        target="_blank"
      >
        <img
          id="MinorChords"
          src="../img/low-quality/GDAE_Chords/GDAE_Minor_A4.jpg"
          alt="Minor Chords in GDAE Tuning"
          text="Minor Chords in GDAE Tuning"
        />
      </a>
      <a
        href="../img/high-quality/GDAD_Chords/GDAD_Minor_A4.jpg"
        target="_blank"
      >
        <img
          src="../img/low-quality/GDAD_Chords/GDAD_Minor_A4.jpg"
          alt="Minor Chords in GDAD Tuning"
          text="Minor Chords in GDAD Tuning"
        />
      </a>
    </div>
    {/* <!-- Major 7th Chords --> */}
    <h1>
      <u>Major 7th Chords</u>
    </h1>
    <p>
      Major 7th Chords are extended chords consisting of four notes. The chord
      is formed using the Root (1), Major Third (3), Perfect Fifth (5) and Major
      Seventh (7) intervals of each Major scale. To construct the C Major 7th
      and E Major 7th chord you begin with the scale consisting of the following
      notes:
    </p>
    <p>C Major Scale: C, D, E, F, G, A, B, C</p>
    <p>E Major Scale: E, F#, G#, A, B, C#, D#, E</p>
    <p>
      Extracting the four notes required from these scales means applying the
      following formula to each scale:
    </p>
    <p>Major 7th Chord Formula: 1, 3, 5, 7</p>
    <p>
      Major 7th Chord Formula: Root, Major Third, Perfect Fifth, Major Seventh
    </p>
    <p>
      The result is the C Major 7th and E Major 7th Chord consisting of the
      following notes:
    </p>
    <p>C Major 7th Chord: C, E, G, B</p>
    <p>E Major 7th Chord: E, G#, B, D#</p>

    <div>
      <a
        href="../img/high-quality/GDAE_Chords/GDAE_Major7th_A4.jpg"
        target="_blank"
      >
        <img
          id="Major7thChords"
          src="../img/low-quality/GDAE_Chords/GDAE_Major7th_A4.jpg"
          alt="Major Chords in GDAE Tuning"
          text="Major Chords in GDAE Tuning"
        />
      </a>
      <a
        href="../img/high-quality/GDAD_Chords/GDAD_Major7th_A4.jpg"
        target="_blank"
      >
        <img
          src="../img/low-quality/GDAD_Chords/GDAD_Major7th_A4.jpg"
          alt="Major Chords in GDAD Tuning"
          text="Major Chords in GDAD Tuning"
        />
      </a>
    </div>
    {/* <!-- Minor 7th Chords --> */}
    <h1>
      <u>Minor 7th Chords</u>
    </h1>
    <p>
      Minor 7th Chords are extended chords consisting of four notes. The chord
      is formed using the Root (1), Minor Third (3), Perfect Fifth (5) and Minor
      Seventh (7) intervals of each Minor scale. To construct the C Minor 7th
      and E Minor 7th chord you begin with the scale consisting of the following
      notes:
    </p>
    <p>C Minor Scale: C, D, Eb, F, G, Ab, Bb, C</p>
    <p>E Minor Scale: E, F#, G, A, B, C, D, E</p>
    <p>
      Extracting the four notes required from these scales means applying the
      following formula to each scale:
    </p>
    <p>Minor 7th Chord Formula: 1, b3, 5, b7</p>
    <p>
      Minor 7th Chord Formula: Root, Minor Third, Perfect Fifth, Minor Seventh
    </p>
    <p>
      The result is the C Minor 7th and E Minor 7th Chord consisting of the
      following notes:
    </p>
    <p>C Minor 7th Chord: C, E, G, Bb</p>
    <p>E Minor 7th Chord: E, G#, B, D</p>

    <div>
      <a
        href="../img/high-quality/GDAE_Chords/GDAE_Minor7th_A4.jpg"
        target="_blank"
      >
        <img
          id="Minor7thChords"
          src="../img/low-quality/GDAE_Chords/GDAE_Minor7th_A4.jpg"
          alt="Major Chords in GDAE Tuning"
          text="Major Chords in GDAE Tuning"
        />
      </a>
      <a
        href="../img/high-quality/GDAD_Chords/GDAD_Minor7th_A4.jpg"
        target="_blank"
      >
        <img
          src="../img/low-quality/GDAD_Chords/GDAD_Minor7th_A4.jpg"
          alt="Major Chords in GDAD Tuning"
          text="Major Chords in GDAD Tuning"
        />
      </a>
    </div>
    {/* <!-- Dominant 7th Chords --> */}
    <h1>
      <u>Dominant 7th Chords</u>
    </h1>
    <p>
      Dominant 7th Chords are extended chords consisting of four notes. The
      chord is also known as the Major Minor Seventh Chord as it borrows
      intervals from both the Major scale and the Minor scale. The chord is
      formed using the Root (1), Major Third (3), Perfect Fifth (5) and Minor
      Seventh (b7). To construct the C Dominant 7th and E Dominant 7th chord you
      begin with both scales consisting of the following notes:
    </p>
    <p>C Major Scale: C, D, E, F, G, A, B, C</p>
    <p>E Major Scale: E, F#, G#, A, B, C#, D#, E</p>
    <p>C Minor Scale: C, D, Eb, F, G, Ab, Bb, C</p>
    <p>E Minor Scale: E, F#, G, A, B, C, D, E</p>
    <p>
      Extracting the four notes required from these scales means applying the
      following formula to each scale:
    </p>
    <p>Dominant 7th Chord Formula: 1, 3, 5, b7</p>
    <p>
      Dominant 7th Chord Formula: Root, Major Third, Perfect Fifth, Minor
      Seventh
    </p>
    <p>
      The result is the C Dominant 7th and E Dominant 7th Chord consisting of
      the following notes:
    </p>
    <p>C Dominant 7th Chord: C, E, G, Bb</p>
    <p>E Dominant 7th Chord: E, G#, B, D</p>
    <div>
      <a
        href="../img/high-quality/GDAE_Chords/GDAE_Dominant7th_A4.jpg"
        target="_blank"
      >
        <img
          id="Dominant7thChords"
          src="../img/low-quality/GDAE_Chords/GDAE_Dominant7th_A4.jpg"
          alt="Dominant 7th Chords in GDAE Tuning"
          text="Dominant 7th Chords in GDAE Tuning"
        />
      </a>
      <a
        href="../img/high-quality/GDAD_Chords/GDAD_Dominant7th_A4.jpg"
        target="_blank"
      >
        <img
          src="../img/low-quality/GDAD_Chords/GDAD_Dominant7th_A4.jpg"
          alt="Dominant 7th Chords in GDAD Tuning"
          text="Dominant 7th Chords in GDAD Tuning"
        />
      </a>
    </div>
  </MainContainer>
)
export default Chords
