import { FC, useState } from 'react'
import Layout from 'layouts/Layout'

const Tablature: FC = () => {
  const [showGDAE, setShowGDAE] = useState(true)
  const [searchValue, setSearchValue] = useState('')
  const [search, setSearch] = useState(false)

  return (
    <Layout
      title='Irish-Trad.net - Tablature'
      metaDescription='Tablature for Irish Bouzouki/Mandolin/Octave Mandolin/Irish Tenor Banjo'
    >
      <p>
        For those more familiar with Tablature than standard music notation or
        ABC notation I have taken a number of tunes from TheSession.org and
        tabbed them out for both GDAE and GDAD.
      </p>
      <p>Clicking on each link below will open the file in a .pdf format.</p>
      <p>
        If you find these useful in anyway you should visit TheSession.org and
        consider donating to the website. It has stood as a beacon for sharing
        and educating on musicians on traditional irish music for many years.
      </p>
      <p>
        Donation Page for TheSession.org:{' '}
        <a
          href='https://thesession.org/donate'
          target='_blank'
          rel='noreferrer'
        >
          TheSession.org - Donation Page
        </a>
      </p>

      <div className='flex justify-center'>
        <p>{showGDAE ? 'GDAE' : 'GDAD'}</p>
        <button onClick={() => setShowGDAE(!showGDAE)}>Toggle Tuning</button>
      </div>

      <div>
        <input
          type='text'
          value={searchValue}
          onChange={(e) => setSearchValue((e.target as HTMLInputElement).value)}
          placeholder='Search for Tune'
        />
      </div>

      <div>
        <button onClick={() => setSearch(true)}>Search</button>
        <button
          onClick={() => {
            setSearch(false)
            setSearchValue('')
          }}
        >
          Reset
        </button>
      </div>

      {search && (
        <div>
          <p>Search Results</p>
        </div>
      )}

      {/* <p>Barndances - {showGDAE ? "GDAE" : "GDAD"}</p>
      <TuneList
        search={search}
        tunes={showGDAE ? GDAE.Barndance : GDAD.Barndance}
        searchValue={searchValue}
      />
      <p>Hornpipes - {showGDAE ? "GDAE" : "GDAD"}</p>
      <TuneList
        search={search}
        tunes={showGDAE ? GDAE.Hornpipe : GDAD.Hornpipe}
        searchValue={searchValue}
      />
      <p>Jigs - {showGDAE ? "GDAE" : "GDAD"}</p>
      <TuneList
        search={search}
        tunes={showGDAE ? GDAE.Jig : GDAD.Jig}
        searchValue={searchValue}
      />
      <p>Marches - {showGDAE ? "GDAE" : "GDAD"}</p>
      <TuneList
        search={search}
        tunes={showGDAE ? GDAE.March : GDAD.March}
        searchValue={searchValue}
      />
      <p>Polkas - {showGDAE ? "GDAE" : "GDAD"}</p>
      <TuneList
        search={search}
        tunes={showGDAE ? GDAE.Polka : GDAD.Polka}
        searchValue={searchValue}
      />
      <p>Reels - {showGDAE ? "GDAE" : "GDAD"}</p>
      <TuneList
        search={search}
        tunes={showGDAE ? GDAE.Reel : GDAD.Reel}
        searchValue={searchValue}
      />
      <p>Slip-Jigs - {showGDAE ? "GDAE" : "GDAD"}</p>
      <TuneList
        search={search}
        tunes={showGDAE ? GDAE.Slip : GDAD.Slip}
        searchValue={searchValue}
      />
      <p>Waltzes - {showGDAE ? "GDAE" : "GDAD"}</p>
      <TuneList
        search={search}
        tunes={showGDAE ? GDAE.Waltz : GDAD.Waltz}
        searchValue={searchValue}
      /> */}
    </Layout>
  )
}

export default Tablature
