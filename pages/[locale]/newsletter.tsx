import { FC } from 'react'
import Layout from 'layouts/Layout'
import Mailchimp from 'components/icons/Mailchimp'
import { getStaticPaths, makeStaticProps } from 'lib/getStatic'
import { useTranslation } from 'next-i18next'

const Newsletter: FC = () => {
  const { t } = useTranslation(['newsletter'])

  return (
    <Layout title={t('head.title')} metaDescription={t('head.meta')}>
      <p>{t('p1')}</p>
      <p>{t('p2')}</p>
      <div className='flex justify-center my-4'>
        <Mailchimp />
        <a
          className='mx-4'
          href='https://mailchi.mp/bfa9fa63aaab/irish-trad'
          target='_blank'
          rel='noreferrer'
        >
          <button>{t('p3')}</button>
        </a>
      </div>
      <p>{t('p4')}</p>
    </Layout>
  )
}

export default Newsletter

const getStaticProps = makeStaticProps(['newsletter', 'menu'])
export { getStaticPaths, getStaticProps }
