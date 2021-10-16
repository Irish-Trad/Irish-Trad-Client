import { Link } from 'react-router-dom'
import Page from 'components/Page'
import Section from 'components/Section'

const Homepage = () => (
  <Page
    title="Irish-Trad.net - Home"
    metaDescription="Tablature for Irish Bouzouki/Mandolin/Octave Mandolin/Irish Tenor Banjo"
  >
    <section
      id="top"
      className="min-h-screen bg-homepage bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center p-4"
    >
      <h1 className="text-center text-6xl lg:text-9xl py-12 font-celtic select-none">
        Irish-Trad.net
      </h1>
      <p>
        Irish-Trad.net provides free online resources and lessons for a variety
        of stringed instruments commonly found in traditional Irish sessions
        such as the Irish Bouzouki, Mandolin, Octave Mandola and Irish Tenor
        Banjo.
      </p>
    </section>
    <Section>
      <h2 className="text-center text-4xl py-4 underline select-all">
        Introduction
      </h2>
      <p>
        The resources found on Irish-Trad.net such as chord diagrams and scales
        refer to any instrument that can be tuned to the standard GDAE or
        alternative GDAD tuning.
      </p>
      <p>
        Most people who decide to learn traditional Irish music for the first
        time do so having already played a different stringed instrument such as
        the guitar. For guitar players, the most popular method of teaching is
        through tablature because of the simplicity and ability to get a person
        playing quickly. The lessons and resources on Irish-Trad.net are
        presented in tablature (TAB) alongside traditional sheet music to
        satisfy the absolute beginner and the musically trained.
      </p>
      <p>
        Irish-Trad.net will not be hosting any copyrighted tunes or songs and
        instead aims to provide all the information and musical theory required
        to bring a player to the level where they can use a website such as{' '}
        <a className="text-white underline" href="https://thesession.org/">
          The Session
        </a>{' '}
        to play any of the tunes available there.
      </p>
    </Section>
    <Section>
      <Link to="/lessons">
        <h2 className="text-center text-4xl py-4 underline select-all">
          Lessons
        </h2>
      </Link>

      <p>
        The lessons section will provide information such as open chords, basic
        scales, moveable chords (barre) and additional information such as how
        to use accessories like a capo or how to change and tune strings. Music
        theory will also be used to reinforce an understanding of how chords and
        scales are construced.
      </p>
    </Section>
    <Section>
      <Link to="/chords">
        <h2 className="text-center text-4xl py-4 underline select-all">
          Chords
        </h2>
      </Link>
      <p>
        The chords section provides chord charts for the two most common tunings
        - GDAE and GDAD. The section covers basic triads such as Major and Minor
        and extended chords such as Major 7th, Minor 7th and Dominant 7th. The
        section will be expanded to include 'quick' moveable chords.
      </p>
    </Section>
    <Section>
      <Link to="/clef-to-tab">
        <h2 className="text-center text-4xl py-4 underline select-all">
          Clef to TAB
        </h2>
      </Link>
      <p>
        The Clef-to-TAB section provides a conversion chart that allows for any
        piece of sheet music found in a book or online to be converted into
        tablature - as long as the piece music covers less than 4 octaves (the
        range of the Irish Bouzouki).
      </p>
    </Section>
    <Section>
      <Link to="/terminology">
        <h2 className="text-center text-4xl py-4 underline select-all">
          Terminology
        </h2>
      </Link>
      <p>
        The terminology section provides an A-Z of common phrases, names and
        abbreviations that can be found across traditional irish music and
        session settings.
      </p>
    </Section>
  </Page>
)

export default Homepage
