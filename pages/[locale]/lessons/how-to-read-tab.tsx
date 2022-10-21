import Page from 'components/Page'
import Link from 'next/link'
import Layout from 'layouts/Layout'
import Image from 'next/image'

const HowToReadTab = () => {
  return (
    <Layout
      title='Irish-Trad.net - How to read Tablature'
      metaDescription='How to read Tablature for Irish Bouzouki/Mandolin/Octave Mandolin/Irish Tenor Banjo'
    >
      <Page header='How to read Tablature'>
        <div>
          <Link href='/lessons'>
            <a>Return to Lessons Page</a>
          </Link>
        </div>
        <section>
          <h2>Introduction:</h2>
          <p>
            Tablature is a form of music notation designed specifically for
            fretted instruments such as the Irish Bouzouki. Tablature is regarded
            as one of the quickest methods for teaching people how to play music.
            The word tablature is normally shortened to just TAB.
          </p>
          <h2>How to:</h2>
          <p>
            Figure 1 shows two forms of music notation (standard notation and
            tablature). The highlighted section is the tablature and understanding
            how to read this information will be the focus of the lesson.
          </p>
          <figure>
            <a
              href='assets/high-quality/TAB_Lesson/TAB02.jpg'
              target='_blank'
            >
              <Image
                src='assets/low-quality/TAB_Lesson/TAB02.jpg'
                alt='Standard Notation & Tablature'
                title='Standard Notation & Tablature' />
            </a>
            <figcaption>Figure 1: Standard Notation & Tablature</figcaption>
          </figure>
          <p>
            To read tablature you have to picture that you are looking directly
            down on the strings of the instrument. Every string of the instrument
            is represented by a horizontal line. Instruments that have 4 strings
            (2 sets of 4) such as the Irish Bouzouki or Mandolin are represented
            by 4 horizontal lines.
          </p>
          <p>
            Figure 2 shows the direction that the strings are read. In this
            example every horizontal line is labelled with the name of the string
            in standard tuning.
          </p>
          <figure>
            <a
              href='assets/high-quality/TAB_Lesson/TAB04.jpg'
              target='_blank'
            >
              <Image
                src='assets/low-quality/TAB_Lesson/TAB04.jpg'
                alt='String Direction'
                title='String Direction' />
            </a>
            <figcaption>Figure 2: String Direction</figcaption>
          </figure>
          <p>
            Numbers presented along the horizontal line instructs you of what fret
            to play. In Figure 3 the highlighted note is the number 0 (open
            string). As the horizontal line corresponds to the G string this means
            that you play an open G string to play this highlighted note.
          </p>
          <figure>
            <a href='assets/high-quality/TAB_Lesson/TAB05.jpg'>
              <Image
                src='assets/low-quality/TAB_Lesson/TAB05.jpg'
                alt='Single Note & Open String'
                title='Single Note & Open String' />
            </a>
            <figcaption>Figure 3: Single Note & Open String</figcaption>
          </figure>
          <p>
            Figure 4 highlights a section that shows how to play two notes at the
            same time. Numbers that are presented directly above and below each
            other mean they are played simultaneously. The highlighted section
            instructs you to play the 2nd fret of the D string and the open G
            string.
          </p>
          <figure>
            <a
              href='assets/high-quality/TAB_Lesson/TAB06.jpg'
              target='_blank'
            >
              <Image
                src='assets/low-quality/TAB_Lesson/TAB06.jpg'
                alt='More Than One Note'
                title='More Than One Note' />
            </a>
            <figcaption>Figure 4: More Than One Note</figcaption>
          </figure>
          <p>
            The highlighted section in Figure 5 shows how to play a note on every
            string at the same time. Doing this results in a chord. For this the G
            and D string are played open while the A string is fretted at 2nd fret
            and the E string is the 3rd fret. Strumming all the strings in a swift
            motion causes them to ring simultaneously. This produces a G Major
            chord.
          </p>
          <figure>
            <a
              href='assets/high-quality/TAB_Lesson/TAB07.jpg'
              target='_blank'
            >
              <Image
                src='assets/low-quality/TAB_Lesson/TAB07.jpg'
                alt='Full Chord'
                title='Full Chord' />
            </a>
            <figcaption>Figure 5: Full Chord</figcaption>
          </figure>
          <p>
            Figure 6 is a series of single notes played in order. This actually
            performs the G Major scale. Information about chords and scales will
            be provided in future lessons.
          </p>
          <figure>
            <a
              href='assets/high-quality/TAB_Lesson/TAB08.jpg'
              target='_blank'
            >
              <Image
                src='assets/low-quality/TAB_Lesson/TAB08.jpg'
                alt='Playing Through A Scale'
                title='Playing Through A Scale' />
            </a>
            <figcaption>Figure 6: Playing Through A Scale</figcaption>
          </figure>
          <h2>Summary:</h2>
          <p>
            Tablature (TAB) presents each string of an instrument on a horizontal
            line and instructs the musician of which fret to play by placing
            numbers along those horizontal lines. The thickest and lowest pitched
            string is at the bottom of the tablature while the thinnest and
            highest pitched string is at the top. Notes that are directly above
            and below each other on the horizontal line are played simeltaneously.
          </p>
          <p>
            While not showcased in this lesson tablature is also able represent
            (using symbols) a variety of techniques along the horizontal lines
            such as sliding between notes, hammer-ons and pull-offs, trills and
            bends.
          </p>
        </section>
      </Page>
    </Layout>
  )
}

export default HowToReadTab
