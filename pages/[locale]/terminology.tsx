import type { FC } from 'react'
import Layout from 'layouts/Layout'
import { getStaticPaths, makeStaticProps } from 'lib/getStatic'
import { useTranslation } from 'next-i18next'

export const terms = [
  {
    termLocaleKey: 'p1',
    descriptionLocaleKey: 'p2'
  },
  {
    termLocaleKey: 'p3',
    descriptionLocaleKey: 'p4'
  },
  {
    termLocaleKey: 'p5',
    descriptionLocaleKey: 'p6'
  },
  {
    termLocaleKey: 'p7',
    descriptionLocaleKey: 'p8'
  },
  {
    termLocaleKey: 'p9',
    descriptionLocaleKey: 'p10'
  },
  {
    termLocaleKey: 'p11',
    descriptionLocaleKey: 'p12'
  },
  {
    termLocaleKey: 'p13',
    descriptionLocaleKey: 'p14'
  },
  {
    termLocaleKey: 'p15',
    descriptionLocaleKey: 'p16'
  },
  {
    termLocaleKey: 'p17',
    descriptionLocaleKey: 'p18'
  },
  {
    termLocaleKey: 'p19',
    descriptionLocaleKey: 'p20'
  },
  {
    termLocaleKey: 'p21',
    descriptionLocaleKey: 'p22'
  },
  {
    termLocaleKey: 'p23',
    descriptionLocaleKey: 'p24'
  },
  {
    termLocaleKey: 'p25',
    descriptionLocaleKey: 'p26'
  },
  {
    termLocaleKey: 'p27',
    descriptionLocaleKey: 'p28'
  },
  {
    termLocaleKey: 'p29',
    descriptionLocaleKey: 'p30'
  },
  {
    termLocaleKey: 'p31',
    descriptionLocaleKey: 'p32'
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
