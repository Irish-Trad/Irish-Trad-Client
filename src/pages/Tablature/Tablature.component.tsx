import { useState } from 'react'
import TuneList from './TuneList'

import * as GDAE from './routes/GDAE'
import * as GDAD from './routes/GDAD'

import Page from 'components/Page'

import {
  H1,
  H2,
  Text,
  ExternalLink,
} from 'common/StyledComponents/StyledComponents'

import { Title, Button, SearchInput, ButtonContainer } from './Tablature.styles'

const Tabs = () => {
  const [showGDAE, setShowGDAE] = useState<boolean>(true)
  const [searchValue, setSearchValue] = useState<string>('')
  const [search, setSearch] = useState<boolean>(false)

  return (
    <Page
      title="Irish-Trad.net - Tablature"
      metaDescription="Tablature for Irish Bouzouki/Mandolin/Octave Mandolin/Irish Tenor Banjo"
    >
      <H1>Tablature</H1>
      <section>
        <Text>
          For those more familiar with Tablature than standard music notation or
          ABC notation I have taken a number of tunes from TheSession.org and
          tabbed them out for both GDAE and GDAD.
        </Text>
        <Text>
          Clicking on each link below will open the file in a .pdf format.
        </Text>
        <Text>
          If you find these useful in anyway you should visit TheSession.org and
          consider donating to the website. It has stood as a beacon for sharing
          and educating on musicians on traditional irish music for many years.
        </Text>
        <Text>
          Donation Page for TheSession.org:{' '}
          <ExternalLink href="https://thesession.org/donate" target="_blank">
            TheSession.org - Donation Page
          </ExternalLink>
        </Text>
      </section>
      <Title>
        <H1>{showGDAE ? 'GDAE' : 'GDAD'}</H1>
        <Button onClick={() => setShowGDAE(!showGDAE)}>Toggle Tuning</Button>
        <SearchInput
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder={'Search for Tune'}
        />
        <ButtonContainer>
          <Button onClick={() => setSearch(true)}>Search</Button>
          <Button
            onClick={() => {
              setSearch(false)
              setSearchValue('')
            }}
          >
            Reset
          </Button>
        </ButtonContainer>
      </Title>
      {search ? <H1>Search Results</H1> : null}
      <H2>Barndances - {showGDAE ? 'GDAE' : 'GDAD'}</H2>
      <TuneList
        search={search}
        tunes={showGDAE ? GDAE.Barndance : GDAD.Barndance}
        searchValue={searchValue}
      />
      <H2>Hornpipes - {showGDAE ? 'GDAE' : 'GDAD'}</H2>
      <TuneList
        search={search}
        tunes={showGDAE ? GDAE.Hornpipe : GDAD.Hornpipe}
        searchValue={searchValue}
      />
      <H2>Jigs - {showGDAE ? 'GDAE' : 'GDAD'}</H2>
      <TuneList
        search={search}
        tunes={showGDAE ? GDAE.Jig : GDAD.Jig}
        searchValue={searchValue}
      />
      <H2>Marches - {showGDAE ? 'GDAE' : 'GDAD'}</H2>
      <TuneList
        search={search}
        tunes={showGDAE ? GDAE.March : GDAD.March}
        searchValue={searchValue}
      />
      <H2>Polkas - {showGDAE ? 'GDAE' : 'GDAD'}</H2>
      <TuneList
        search={search}
        tunes={showGDAE ? GDAE.Polka : GDAD.Polka}
        searchValue={searchValue}
      />
      <H2>Reels - {showGDAE ? 'GDAE' : 'GDAD'}</H2>
      <TuneList
        search={search}
        tunes={showGDAE ? GDAE.Reel : GDAD.Reel}
        searchValue={searchValue}
      />
      <H2>Slip-Jigs - {showGDAE ? 'GDAE' : 'GDAD'}</H2>
      <TuneList
        search={search}
        tunes={showGDAE ? GDAE.Slip : GDAD.Slip}
        searchValue={searchValue}
      />
      <H2>Waltzes - {showGDAE ? 'GDAE' : 'GDAD'}</H2>
      <TuneList
        search={search}
        tunes={showGDAE ? GDAE.Waltz : GDAD.Waltz}
        searchValue={searchValue}
      />
    </Page>
  )
}

export default Tabs
