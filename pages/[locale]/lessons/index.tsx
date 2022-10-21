import { FC } from 'react'
import Link from 'next/link'
import Layout from 'layouts/Layout'
import { getStaticPaths, makeStaticProps } from 'lib/getStatic'
import { useTranslation } from 'next-i18next'

const Lessons: FC = () => {
  const { t } = useTranslation(['lessons'])

  return (
    <Layout title={t('head.title')} metaDescription={t('head.meta')}>
      <h2>{t('preparation')}</h2>
      <Link href='/lessons/how-to-string'>
        <a>{t('howToString')}</a>
      </Link>
      <p>{t('knowingHowToString')}</p>
      <Link href='/lessons/how-to-tune'>
        <a>{t('howToTune')}</a>
      </Link>
      <p>{t('whenPlayingWithOther')}</p>
      <Link href='/lessons/how-to-read-tab'>
        <a>{t('howToReadTablature')}</a>
      </Link>
      <p>{t('tablatureIsNotation')}</p>
      <h2>{t('usefulWebsites')}</h2>
      <a
        href='https://thesession.org/'
        target='_blank'
        rel='noopener noreferrer'
      >
        {t('theSession')}
      </a>
      <p>{t('bestSheetMusic')}</p>
      <a
        href='https://irish-music.net/'
        target='_blank'
        rel='noopener noreferrer'
      >
        {t('irishMusic')}
      </a>
      <p>{t('usefulResources')}</p>
      <a
        href='https://www.mandolessons.com/'
        target='_blank'
        rel='noopener noreferrer'
      >
        {t('mandoLessons')}
      </a>
      <p>{t('mandolinFocusedWebsite')}</p>
    </Layout>
  )
}

export default Lessons

const getStaticProps = makeStaticProps(['lessons', 'menu'])
export { getStaticPaths, getStaticProps }
