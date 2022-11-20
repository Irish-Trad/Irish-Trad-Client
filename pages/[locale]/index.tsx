import type { FC } from 'react'
import Layout from 'layouts/Layout'
import { useTranslation } from 'next-i18next'
import { getStaticPaths, makeStaticProps } from 'lib/getStatic'

const Home: FC = () => {
  const { t } = useTranslation(['home', 'common'])

  return (
    <Layout title={t('head.title')} metaDescription={t('head.meta')}>
      <section className='relative flex flex-col items-center justify-center w-full min-h-screen p-4'>
        <div
          id='bgImage'
          className='absolute top-0 w-full h-full bg-center bg-no-repeat bg-cover bg-homepage'
          style={{
            zIndex: -1
            // opacity: '0.5'
          }}
        />
        <h1 className='py-12 text-6xl text-center text-white select-none lg:text-9xl font-celtic'>
          {t('common:website')}
        </h1>
        <p className='text-white'>{t('p1')}</p>
      </section>
    </Layout>
  )
}

export default Home

const getStaticProps = makeStaticProps(['home', 'common', 'menu'])
export { getStaticPaths, getStaticProps }
