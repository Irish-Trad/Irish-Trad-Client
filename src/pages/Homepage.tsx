import PageMeta from 'components/PageMeta'

const Homepage = () => (
  <PageMeta
    title="Irish-Trad.net"
    metaDescription="Tablature for Irish Bouzouki/Mandolin/Octave Mandolin/Irish Tenor Banjo"
  >
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center p-4">
      <div
        id="bgImage"
        className="absolute top-0 w-full h-full bg-homepage bg-cover bg-no-repeat bg-center"
        style={{
          zIndex: -1,
          opacity: `0.5`,
        }}
      />
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
  </PageMeta>
)

export default Homepage
