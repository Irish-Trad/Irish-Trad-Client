import { FC } from 'react'
import Link from 'next/link'
import Layout from 'layouts/Layout'

const Lessons: FC = () => (
  <Layout
    title='Irish-Trad.net - Lessons'
    metaDescription='Free Online Lessons and Resources for Irish Bouzouki/Mandolin/Octave Mandolin/Irish Tenor Banjo'
  >
    <h2>Preparation:</h2>
    <Link href='/lessons/how-to-string'>
      <a>How to string your instrument</a>
    </Link>
    <p>
      Knowing how to string your instrument is an essential skill every musician
      needs to learn. It can be a daunting task for beginners because of
      uncertainty and fear of damaging the instrument. This section covers how
      to string the instrument and the different options available when buying
      strings.
    </p>
    <Link href='/lessons/how-to-tune'>
      <a>How to tune your instrument</a>
    </Link>
    <p>
      When playing with other musicians it is vital that your instrument is in
      tune. This section covers how to use a chromatic tuner and the different
      tuning configurations available to the Irish Bouzouki.
    </p>
    <Link href='/lessons/how-to-read-tab'>
      <a>How to read tablature</a>
    </Link>
    <p>
      Tablature is a form of music notation structured towards fretted
      instruments. It is regarded as one of the quickest methods for teaching
      beginners how to start making music. This section covers how to read
      tablature.
    </p>
    <h2>Useful Websites:</h2>
    <a href='https://thesession.org/' target='_blank' rel='noopener noreferrer'>
      The Session
    </a>
    <p>The best resource for traditional Irish sheet music.</p>
    <a
      href='https://irish-music.net/'
      target='_blank'
      rel='noopener noreferrer'
    >
      Irish-Music
    </a>
    <p>
      Useful website that provides links to many resources for traditional Irish
      instruments.
    </p>
    <a
      href='https://www.mandolessons.com/'
      target='_blank'
      rel='noopener noreferrer'
    >
      Mando Lessons
    </a>
    <p>Mandolin focused website providing high quality video lessons.</p>
  </Layout>
)

export default Lessons
