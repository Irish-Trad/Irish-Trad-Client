import { FC } from 'react'
import Layout from 'layouts/Layout'
import { getStaticPaths, makeStaticProps } from 'lib/getStatic'
import { useTranslation } from 'next-i18next'

const ClefToTab: FC = () => {
  const { t } = useTranslation(['clef-to-tab'])

  return (
    <Layout title={t('head.title')} metaDescription={t('head.meta')}>
      <div>
        <a href='#clef-to-tab-GDAE'>
          <button>{t('p1')}</button>
        </a>
        <a href='#clef-to-tab-GDAD'>
          <button>{t('p2')}</button>
        </a>
      </div>
      <div>
        <p>{t('p3')}</p>
        <p>
          {t('p4')}
          <a
            href='https://www.thesession.org/'
            target='_blank'
            rel='noreferrer'
          >
            {t('p5')}
          </a>
          {t('p6')}
        </p>
        <p>{t('p7')}</p>
        <p>{t('p8')}</p>
        <div>
          <a href='assets/high-quality/GDAE - Clef To TAB.pdf' target='_blank'>
            <img
              id='clef-to-tab-GDAE'
              src='assets/low-quality/GDAE - Clef To TAB.jpg'
              alt='GDAE Treble Clef to TAB'
              width='100%'
              height='100%'
            />
          </a>
          <a href='assets/high-quality/GDAD - Clef To TAB.pdf' target='_blank'>
            <img
              id='clef-to-tab-GDAD'
              src='assets/low-quality/GDAD - Clef To TAB.jpg'
              alt='GDAD Treble Clef to TAB'
              width='100%'
              height='100%'
            />
          </a>
        </div>
      </div>
    </Layout>
  )
}

export default ClefToTab

const getStaticProps = makeStaticProps(['clef-to-tab', 'menu'])
export { getStaticPaths, getStaticProps }
