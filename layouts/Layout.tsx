import { ReactNode, FC } from 'react'
import Head from 'next/head'
import MenuMobile from 'components/MenuMobile'
import MenuDesktop from 'components/MenuDesktop'

interface Props {
  children: ReactNode
  title: string
  metaDescription?: string
}

const Layout: FC<Props> = ({ children, title, metaDescription }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta name='title' content={title} />
      <meta
        name='keywords'
        content='Irish Trad, Irish Traditional, Irish Tenor Banjo, Irish Bouzouki, Bouzouki, Mandolin, Octave Mandolin, Mandola, Octave Mandola, Chords, TAB, Tablature'
      />
      <meta name='description' content={metaDescription} />
    </Head>
    <div className='flex flex-col flex-nowrap'>
      <MenuMobile />
      {/* Mobile Menu */}
      <div className='flex flex-row flex-nowrap'>
        {/* Desktop Menu */}
        <MenuDesktop />
        {/* <div className="hidden bg-red-500 lg:flex">Desktop Menu</div> */}
        <div className='flex flex-col items-center w-full h-screen pt-16 overflow-auto lg:pt-0'>
          {children}
        </div>
      </div>
    </div>
  </>
)

export default Layout
