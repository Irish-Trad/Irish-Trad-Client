import { FC } from 'react'
import Layout from 'layouts/Layout'
import Discord from 'components/icons/Discord'
import { getStaticPaths, makeStaticProps } from 'lib/getStatic'
import { useTranslation } from 'next-i18next'

const Community: FC = () => {
  const { t } = useTranslation(['community'])

  return (
    <Layout title={t('head.title')} metaDescription={t('head.meta')}>
      <p>{t('interact')}</p>
      <p>{t('toJoin')}</p>
      <div>
        <Discord />
        <a href='https://discord.gg/Mq9jeA8' target='_blank' rel='noreferrer'>
          <button>{t('clickHere')}</button>
        </a>
      </div>
      <p>{t('free')}</p>
      <p>{t('image')}</p>
      <figure>
        <a href='public/discord.jpg' target='_blank'>
          <img
            src='public/discord.jpg'
            alt={t('screenshot')}
            title={t('screenshot')}
          />
        </a>
        <figcaption>{t('pictured')}</figcaption>
      </figure>
      <p>{t('channels')}</p>
      <p>
        {t('info')}{' '}
        <a
          href='https://discordapp.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          {t('website')}
        </a>
      </p>
      <p>{t('accessed')}</p>
      <p>{t('footer')}</p>
    </Layout>
  )
}

export default Community

const getStaticProps = makeStaticProps(['community', 'menu'])
export { getStaticPaths, getStaticProps }
