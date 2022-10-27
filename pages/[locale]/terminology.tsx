import type { FC } from 'react'
import Layout from 'layouts/Layout'
import { getStaticPaths, makeStaticProps } from 'lib/getStatic'
import { useTranslation } from 'next-i18next'

export const terms = [
  {
    termLocaleKey: 'arpeggio',
    descriptionLocaleKey: 'arpeggioDesc'
  },
  {
    termLocaleKey: 'bending',
    descriptionLocaleKey: 'bendingDesc'
  },
  {
    termLocaleKey: 'bpm',
    descriptionLocaleKey: 'bpmDesc'
  },
  {
    termLocaleKey: 'cbom',
    descriptionLocaleKey: 'cbomDesc'
  },
  {
    termLocaleKey: 'chord',
    descriptionLocaleKey: 'chordDesc'
  },
  {
    termLocaleKey: 'gdae',
    descriptionLocaleKey: 'gdaeDesc'
  },
  {
    termLocaleKey: 'gdad',
    descriptionLocaleKey: 'gdadDesc'
  },
  {
    termLocaleKey: 'interval',
    descriptionLocaleKey: 'intervalDesc'
  },
  {
    termLocaleKey: 'octaveMandolin',
    descriptionLocaleKey: 'octaveMandolinDesc'
  },
  {
    termLocaleKey: 'octaveMandola',
    descriptionLocaleKey: 'octaveMandolaDesc'
  },
  {
    termLocaleKey: 'soundingRange',
    descriptionLocaleKey: 'soundingRangeDesc'
  },
  {
    termLocaleKey: 'stringGauge',
    descriptionLocaleKey: 'stringGaugeDesc'
  },
  {
    termLocaleKey: 'tempo',
    descriptionLocaleKey: 'tempoDesc'
  },
  {
    termLocaleKey: 'treble',
    descriptionLocaleKey: 'trebleDesc'
  },
  {
    termLocaleKey: 'trill',
    descriptionLocaleKey: 'trillDesc'
  },
  {
    termLocaleKey: 'vibrato',
    descriptionLocaleKey: 'vibratoDesc'
  }
]

const Terminology: FC = () => {
  const { t } = useTranslation(['terminology'])

  return (
    <Layout title={t('head.title')} metaDescription={t('head.meta')}>
      {terms.map(({ termLocaleKey, descriptionLocaleKey }) => (
        <p key={termLocaleKey}>
          <b>{t(termLocaleKey)}: </b>
          {t(descriptionLocaleKey)}
        </p>
      ))}
    </Layout>
  )
}

export default Terminology

const getStaticProps = makeStaticProps(['terminology', 'menu'])
export { getStaticPaths, getStaticProps }
