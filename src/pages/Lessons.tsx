import Page from 'components/Page'
import { Link } from 'react-router-dom'

import { H2, LinkText, ExternalLink } from './Lessons.styles'

const Lessons = () => (
  <Page
    title="Irish-Trad.net - Lessons"
    metaDescription="Free Online Lessons and Resources for Irish Bouzouki/Mandolin/Octave Mandolin/Irish Tenor Banjo"
  >
    <h1>Lessons</h1>
    <section>
      <H2>Preparation:</H2>
      <Link to={'/lessons/how-to-string'}>
        <LinkText>How to string your instrument</LinkText>
      </Link>
      <p>
        Knowing how to string your instrument is an essential skill every
        musician needs to learn. It can be a daunting task for beginners because
        of uncertainty and fear of damaging the instrument. This section covers
        how to string the instrument and the different options available when
        buying strings.
      </p>
      <Link to={'/lessons/how-to-tune'}>
        <LinkText>How to tune your instrument</LinkText>
      </Link>
      <p>
        When playing with other musicians it is vital that your instrument is in
        tune. This section covers how to use a chromatic tuner and the different
        tuning configurations available to the Irish Bouzouki.
      </p>
      <Link to={'/lessons/how-to-read-tab'}>
        <LinkText>How to read tablature</LinkText>
      </Link>
      <p>
        Tablature is a form of music notation structured towards fretted
        instruments. It is regarded as one of the quickest methods for teaching
        beginners how to start making music. This section covers how to read
        tablature.
      </p>
      <H2>Useful Websites:</H2>
      <ExternalLink
        href="https://thesession.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkText>The Session</LinkText>
      </ExternalLink>
      <p>The best resource for traditional Irish sheet music.</p>
      <ExternalLink
        href="https://irish-music.net/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkText>Irish-Music</LinkText>
      </ExternalLink>
      <p>
        Useful website that provides links to many resources for traditional
        Irish instruments.
      </p>
      <ExternalLink
        href="https://www.mandolessons.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkText>Mando Lessons</LinkText>
      </ExternalLink>
      <p>Mandolin focused website providing high quality video lessons.</p>
    </section>
  </Page>
)

export default Lessons