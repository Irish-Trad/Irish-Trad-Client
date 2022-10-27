import { FC, useState } from 'react'
import Layout from 'layouts/Layout'
import { useTranslation } from 'next-i18next'
import { getStaticPaths, makeStaticProps } from 'lib/getStatic'

const Tablature: FC = () => {
  const [showGDAE, setShowGDAE] = useState(true)
  const [searchValue, setSearchValue] = useState('')
  const [search, setSearch] = useState(false)

  const { t } = useTranslation(['tablature'])

  return (
    <Layout title={t('head.title')} metaDescription={t('head.meta')}>
      <p>
        {t('familiarWithTab')}
      </p>
      <p>
        {t('clickingEachLink')}
      </p>
      <p>
        {t('findTheseUseful')}

      </p>
      <p>
        {t('donationPageFor')}{' '}
        <a
          href='https://thesession.org/donate'
          target='_blank'
          rel='noreferrer'
        >
          {t('donationPage')}

        </a>
      </p>

      <div className='flex justify-center'>
        <p>{showGDAE ? 'GDAE' : 'GDAD'}</p>
        <button onClick={() => setShowGDAE(!showGDAE)}>
          {t('toggleTuning')}

        </button>
      </div>

      <div>
        <input
          type='text'
          value={searchValue}
          onChange={(e) => setSearchValue((e.target as HTMLInputElement).value)}
          placeholder={t('searchForTune')}
        />
      </div>

      <div>
        <button onClick={() => setSearch(true)}>{t('search')}</button>
        <button
          onClick={() => {
            setSearch(false)
            setSearchValue('')
          }}
        >
          {t('reset')}
        </button>
      </div>

      {search && (
        <div>
          <p>{t('searchResults')}</p>
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

const getStaticProps = makeStaticProps(['tablature', 'menu'])
export { getStaticPaths, getStaticProps }
