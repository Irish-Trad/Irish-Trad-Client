import { FC } from 'react'
import Link from 'next/link'
import Layout from 'layouts/Layout'
import { getStaticPaths, makeStaticProps } from 'lib/getStatic'
import { useTranslation } from 'next-i18next'

const Lessons: FC = () => {
  const { t } = useTranslation(['lessons'])

  return (
    <Layout title={t('head.title')} metaDescription={t('head.meta')}>
      <h2>{t('p1')}</h2>
      <Link href='/lessons/how-to-string'>
        <a>{t('p2')}</a>
      </Link>
      <p>{t('p3')}</p>
      <Link href='/lessons/how-to-tune'>
        <a>{t('p4')}</a>
      </Link>
      <p>{t('p5')}</p>
      <Link href='/lessons/how-to-read-tab'>
        <a>{t('p6')}</a>
      </Link>
      <p>{t('p7')}</p>
      <h2>{t('p8')}</h2>
      <a
        href='https://thesession.org/'
        target='_blank'
        rel='noopener noreferrer'
      >
        {t('p9')}
      </a>
      <p>{t('p10')}</p>
      <a
        href='https://irish-music.net/'
        target='_blank'
        rel='noopener noreferrer'
      >
        {t('p11')}
      </a>
      <p>{t('p12')}</p>
      <a
        href='https://www.mandolessons.com/'
        target='_blank'
        rel='noopener noreferrer'
      >
        {t('p13')}
      </a>
      <p>{t('p14')}</p>
    </Layout>
  )
}

export default Lessons

const getStaticProps = makeStaticProps(['lessons', 'menu'])
export { getStaticPaths, getStaticProps }
