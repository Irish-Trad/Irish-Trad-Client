import PageMeta from 'components/PageMeta'
import Page from 'components/Page'
import { Link } from 'react-router-dom'

const Lessons = () => (
  <PageMeta
    title="Irish-Trad.net - Lessons"
    metaDescription="Free Online Lessons and Resources for Irish Bouzouki/Mandolin/Octave Mandolin/Irish Tenor Banjo"
  >
    <Page>
      <h1>Lessons</h1>
      <section>
        <h2>Preparation:</h2>
        <Link to={'/lessons/how-to-string'}>How to string your instrument</Link>
        <p>
          Knowing how to string your instrument is an essential skill every
          musician needs to learn. It can be a daunting task for beginners
          because of uncertainty and fear of damaging the instrument. This
          section covers how to string the instrument and the different options
          available when buying strings.
        </p>
        <Link to={'/lessons/how-to-tune'}>How to tune your instrument</Link>
        <p>
          When playing with other musicians it is vital that your instrument is
          in tune. This section covers how to use a chromatic tuner and the
          different tuning configurations available to the Irish Bouzouki.
        </p>
        <Link to={'/lessons/how-to-read-tab'}>How to read tablature</Link>
        <p>
          Tablature is a form of music notation structured towards fretted
          instruments. It is regarded as one of the quickest methods for
          teaching beginners how to start making music. This section covers how
          to read tablature.
        </p>
        <h2>Useful Websites:</h2>
        <a
          href="https://thesession.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          The Session
        </a>
        <p>The best resource for traditional Irish sheet music.</p>
        <a
          href="https://irish-music.net/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Irish-Music
        </a>
        <p>
          Useful website that provides links to many resources for traditional
          Irish instruments.
        </p>
        <a
          href="https://www.mandolessons.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mando Lessons
        </a>
        <p>Mandolin focused website providing high quality video lessons.</p>
      </section>
    </Page>
  </PageMeta>
)

export default Lessons
