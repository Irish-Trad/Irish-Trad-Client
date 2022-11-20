import { FC } from 'react'
import Link from 'next/link'
import Layout from 'layouts/Layout'
import { getStaticPaths, makeStaticProps } from 'lib/getStatic'
import { useTranslation } from 'next-i18next'

const HowToTune: FC = () => {
  const { t } = useTranslation(['how-to-tune'])

  return (
    <Layout title={t('head.title')} metaDescription={t('head.meta')}>
      <div>
        <Link href='/lessons'>
          <a>{t('p1')}</a>
        </Link>
      </div>
      <h2>{t('p2')}:</h2>
      <p>{t('p3')}</p>
      <p>{t('p4')}</p>
      <p>{t('p5')}</p>
      <h2>{t('p6')}:</h2>
      <p>{t('p7')}</p>
      <p>{t('p8')}</p>
      <p>{t('p9')}:</p>
      <ul>
        <li>{t('p10')}</li>
        <li>{t('p11')}</li>
        <li>{t('p12')}</li>
        <li>{t('p13')}</li>
      </ul>
      <p>{t('p14')}:</p>
      <ul>
        <li>{t('p15')}</li>
        <li>{t('p16')}</li>
        <li>{t('p17')}</li>
        <li>{t('p18')}</li>
      </ul>
      <p>{t('p19')}:</p>
      <a
        href='https://en.wikipedia.org/wiki/Stringed_instrument_tunings#I'
        target='_blank'
        rel='noopener noreferrer'
      >
        {t('p20')}
      </a>
      <p>{t('p21')}</p>
      <a
        href='http://www.contrabass.com/pages/frequency.html'
        target='_blank'
        rel='noopener noreferrer'
      >
        {t('p22')}
      </a>
      <p>{t('p23')}</p>
    </Layout>
  )
}

export default HowToTune

const getStaticProps = makeStaticProps(['how-to-tune', 'menu'])
export { getStaticPaths, getStaticProps }
