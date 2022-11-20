import { FC } from 'react'
import Layout from 'layouts/Layout'
import Discord from 'components/icons/Discord'
import { getStaticPaths, makeStaticProps } from 'lib/getStatic'
import { useTranslation } from 'next-i18next'

const Community: FC = () => {
  const { t } = useTranslation(['community'])

  return (
    <Layout title={t('head.title')} metaDescription={t('head.meta')}>
      <p>{t('p1')}</p>
      <p>{t('p2')}</p>
      <div>
        <Discord />
        <a href='https://discord.gg/Mq9jeA8' target='_blank' rel='noreferrer'>
          <button>{t('p3')}</button>
        </a>
      </div>
      <p>{t('p4')}</p>
      <p>{t('p5')}</p>
      <figure>
        <a href='public/discord.jpg' target='_blank'>
          <img src='public/discord.jpg' alt={t('p6')} title={t('p6')} />
        </a>
        <figcaption>{t('p7')}</figcaption>
      </figure>
      <p>{t('p8')}</p>
      <p>
        {t('p9')}
        <a
          href='https://discordapp.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          {t('p10')}
        </a>
      </p>
      <p>{t('p11')}</p>
      <p>{t('p12')}</p>
    </Layout>
  )
}

export default Community

const getStaticProps = makeStaticProps(['community', 'menu'])
export { getStaticPaths, getStaticProps }
