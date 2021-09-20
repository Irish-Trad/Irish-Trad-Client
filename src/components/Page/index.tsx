import { ReactNode } from 'react'
import { Helmet } from 'react-helmet'

type Props = {
  children: ReactNode
  title: string
  metaDescription: string
}

const Page = ({ children, title, metaDescription }: Props) => (
  <div>
    <Helmet>
      <link rel="canonical" href={`${window.location}`} />
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta
        name="keywords"
        content="Irish Trad, Irish Traditional, Irish Tenor Banjo, Irish Bouzouki, Bouzouki, Mandolin, Octave Mandolin, Mandola, Octave Mandola, Chords, TAB, Tablature"
      />
      <meta name="description" content={metaDescription} />
    </Helmet>
    {children}
  </div>
)

export default Page
