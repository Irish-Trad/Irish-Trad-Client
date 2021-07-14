import React, { useState } from 'react'
import TuneList from './TuneList'

import * as GDAE from './routes/GDAE'
import * as GDAD from './routes/GDAD'

import Page from 'components/Page'

import Button from 'common/Button'

const Tabs = () => {
  const [showGDAE, setShowGDAE] = useState<boolean>(true)
  const [searchValue, setSearchValue] = useState<string>('')
  const [search, setSearch] = useState<boolean>(false)

  return (
    <Page
      title="Irish-Trad.net - Tablature"
      metaDescription="Tablature for Irish Bouzouki/Mandolin/Octave Mandolin/Irish Tenor Banjo"
    >
      <div>
        <p>Tablature</p>
      </div>

      <div>
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
          <a href="https://thesession.org/donate" target="_blank">
            TheSession.org - Donation Page
          </a>
        </p>
      </div>

      <div>
        <p>{showGDAE ? 'GDAE' : 'GDAD'}</p>
      </div>

      <div>
        <Button onClick={() => setShowGDAE(!showGDAE)}>Toggle Tuning</Button>
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder={'Search for Tune'}
        />
      </div>

      <div>
        <Button onClick={() => setSearch(true)}>Search</Button>
        <Button
          onClick={() => {
            setSearch(false)
            setSearchValue('')
          }}
        >
          Reset
        </Button>
      </div>

      {search && (
        <div>
          <p>Search Results</p>
        </div>
      )}

      <p>Barndances - {showGDAE ? 'GDAE' : 'GDAD'}</p>
      <TuneList
        search={search}
        tunes={showGDAE ? GDAE.Barndance : GDAD.Barndance}
        searchValue={searchValue}
      />
      <p>Hornpipes - {showGDAE ? 'GDAE' : 'GDAD'}</p>
      <TuneList
        search={search}
        tunes={showGDAE ? GDAE.Hornpipe : GDAD.Hornpipe}
        searchValue={searchValue}
      />
      <p>Jigs - {showGDAE ? 'GDAE' : 'GDAD'}</p>
      <TuneList
        search={search}
        tunes={showGDAE ? GDAE.Jig : GDAD.Jig}
        searchValue={searchValue}
      />
      <p>Marches - {showGDAE ? 'GDAE' : 'GDAD'}</p>
      <TuneList
        search={search}
        tunes={showGDAE ? GDAE.March : GDAD.March}
        searchValue={searchValue}
      />
      <p>Polkas - {showGDAE ? 'GDAE' : 'GDAD'}</p>
      <TuneList
        search={search}
        tunes={showGDAE ? GDAE.Polka : GDAD.Polka}
        searchValue={searchValue}
      />
      <p>Reels - {showGDAE ? 'GDAE' : 'GDAD'}</p>
      <TuneList
        search={search}
        tunes={showGDAE ? GDAE.Reel : GDAD.Reel}
        searchValue={searchValue}
      />
      <p>Slip-Jigs - {showGDAE ? 'GDAE' : 'GDAD'}</p>
      <TuneList
        search={search}
        tunes={showGDAE ? GDAE.Slip : GDAD.Slip}
        searchValue={searchValue}
      />
      <p>Waltzes - {showGDAE ? 'GDAE' : 'GDAD'}</p>
      <TuneList
        search={search}
        tunes={showGDAE ? GDAE.Waltz : GDAD.Waltz}
        searchValue={searchValue}
      />
    </Page>
  )
}

export default Tabs
