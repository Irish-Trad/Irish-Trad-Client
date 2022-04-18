import type { FC } from 'react'
import Layout from 'layouts/Layout'

const Home: FC = () => (
  <Layout
    title='Irish-Trad.net - Home'
    metaDescription='Homepage for Irish Bouzouki/Mandolin/Octave Mandolin/Irish Tenor Banjo'
  >
    <section className='relative flex flex-col items-center justify-center w-full min-h-screen p-4'>
      <div
        id='bgImage'
        className='absolute top-0 w-full h-full bg-center bg-no-repeat bg-cover bg-homepage'
        style={{
          zIndex: -1,
          opacity: '0.5'
        }}
      />
      <h1 className='py-12 text-6xl text-center select-none lg:text-9xl font-celtic'>
        Irish-Trad.net
      </h1>
      <p>
        Irish-Trad.net provides free online resources and lessons for a variety
        of stringed instruments commonly found in traditional Irish sessions
        such as the Irish Bouzouki, Mandolin, Octave Mandola and Irish Tenor
        Banjo.
      </p>
    </section>
  </Layout>
)

export default Home
