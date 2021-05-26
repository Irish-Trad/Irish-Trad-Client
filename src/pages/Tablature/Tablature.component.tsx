import { useState } from 'react'
import TuneList from './TuneList/TuneList.component'

import * as GDAE from './routes/GDAE'
import * as GDAD from './routes/GDAD'

import Page from 'components/Page/Page.component'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Input from '@material-ui/core/Input'
import Link from '@material-ui/core/Link'

import Button from 'common/Button/Button.component'

const Tabs = () => {
  const [showGDAE, setShowGDAE] = useState<boolean>(true)
  const [searchValue, setSearchValue] = useState<string>('')
  const [search, setSearch] = useState<boolean>(false)

  return (
    <Page
      title="Irish-Trad.net - Tablature"
      metaDescription="Tablature for Irish Bouzouki/Mandolin/Octave Mandolin/Irish Tenor Banjo"
    >
      <Box my={2}>
        <Typography variant="h1">Tablature</Typography>
      </Box>

      <Box my={2}>
        <Typography variant="body1">
          For those more familiar with Tablature than standard music notation or
          ABC notation I have taken a number of tunes from TheSession.org and
          tabbed them out for both GDAE and GDAD.
        </Typography>
        <Typography variant="body1">
          Clicking on each link below will open the file in a .pdf format.
        </Typography>
        <Typography variant="body1">
          If you find these useful in anyway you should visit TheSession.org and
          consider donating to the website. It has stood as a beacon for sharing
          and educating on musicians on traditional irish music for many years.
        </Typography>
        <Typography variant="body1">
          Donation Page for TheSession.org:{' '}
          <Link href="https://thesession.org/donate" target="_blank">
            TheSession.org - Donation Page
          </Link>
        </Typography>
      </Box>

      <Box my={2}>
        <Typography variant="h1">{showGDAE ? 'GDAE' : 'GDAD'}</Typography>
      </Box>

      <Box display="flex" flexDirection="column" alignItems="center">
        <Button onClick={() => setShowGDAE(!showGDAE)}>Toggle Tuning</Button>
        <Input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder={'Search for Tune'}
        />
      </Box>

      <Box display="flex" justifyContent="space-between">
        <Button onClick={() => setSearch(true)}>Search</Button>
        <Button
          onClick={() => {
            setSearch(false)
            setSearchValue('')
          }}
        >
          Reset
        </Button>
      </Box>

      {search && (
        <Box my={2}>
          <Typography variant="h1">Search Results</Typography>
        </Box>
      )}

      <Typography variant="h2">
        Barndances - {showGDAE ? 'GDAE' : 'GDAD'}
      </Typography>
      <TuneList
        search={search}
        tunes={showGDAE ? GDAE.Barndance : GDAD.Barndance}
        searchValue={searchValue}
      />
      <Typography variant="h2">
        Hornpipes - {showGDAE ? 'GDAE' : 'GDAD'}
      </Typography>
      <TuneList
        search={search}
        tunes={showGDAE ? GDAE.Hornpipe : GDAD.Hornpipe}
        searchValue={searchValue}
      />
      <Typography variant="h2">Jigs - {showGDAE ? 'GDAE' : 'GDAD'}</Typography>
      <TuneList
        search={search}
        tunes={showGDAE ? GDAE.Jig : GDAD.Jig}
        searchValue={searchValue}
      />
      <Typography variant="h2">
        Marches - {showGDAE ? 'GDAE' : 'GDAD'}
      </Typography>
      <TuneList
        search={search}
        tunes={showGDAE ? GDAE.March : GDAD.March}
        searchValue={searchValue}
      />
      <Typography variant="h2">
        Polkas - {showGDAE ? 'GDAE' : 'GDAD'}
      </Typography>
      <TuneList
        search={search}
        tunes={showGDAE ? GDAE.Polka : GDAD.Polka}
        searchValue={searchValue}
      />
      <Typography variant="h2">Reels - {showGDAE ? 'GDAE' : 'GDAD'}</Typography>
      <TuneList
        search={search}
        tunes={showGDAE ? GDAE.Reel : GDAD.Reel}
        searchValue={searchValue}
      />
      <Typography variant="h2">
        Slip-Jigs - {showGDAE ? 'GDAE' : 'GDAD'}
      </Typography>
      <TuneList
        search={search}
        tunes={showGDAE ? GDAE.Slip : GDAD.Slip}
        searchValue={searchValue}
      />
      <Typography variant="h2">
        Waltzes - {showGDAE ? 'GDAE' : 'GDAD'}
      </Typography>
      <TuneList
        search={search}
        tunes={showGDAE ? GDAE.Waltz : GDAD.Waltz}
        searchValue={searchValue}
      />
    </Page>
  )
}

export default Tabs
