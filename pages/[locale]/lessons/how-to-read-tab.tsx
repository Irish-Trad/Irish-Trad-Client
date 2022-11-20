import Link from 'next/link'
import Layout from 'layouts/Layout'
import Image from 'next/image'
import { FC } from 'react'
import { getStaticPaths, makeStaticProps } from 'lib/getStatic'
import { useTranslation } from 'next-i18next'

const HowToReadTab: FC = () => {
  const { t } = useTranslation(['how-to-read-tab'])

  return (
    <Layout title={t('head.title')} metaDescription={t('head.meta')}>
      <h1>
        {t('p1')}
      </h1>
      <div>
        <Link href='/lessons'>
          <a>      {t('p2')}
          </a>
        </Link>
      </div>
      <section>
        <h2>{t('p3')}:</h2>
        <p>
          {t('p4')}
        </p>
        <h2>{t('p5')}:</h2>
        <p>
          {t('p6')}
        </p>
        <figure>
          <a
            href='assets/high-quality/TAB_Lesson/TAB02.jpg'
            target='_blank'
          >
            {/* <Image
              src='assets/low-quality/TAB_Lesson/TAB02.jpg'
              alt={t('p7')}
              title={t('p7')}
            /> */}
          </a>
          <figcaption>{t('p8')}</figcaption>
        </figure>
        <p>
          {t('p9')}
        </p>
        <p>
          {t('p10')}
        </p>
        <figure>
          <a
            href='assets/high-quality/TAB_Lesson/TAB04.jpg'
            target='_blank'
          >
            {/* <Image
              src='assets/low-quality/TAB_Lesson/TAB04.jpg'
              alt={t('p11')}
              title={t('p11')}
            /> */}
          </a>
          <figcaption>{t('p12')}</figcaption>
        </figure>
        <p>
          {t('p13')}
        </p>
        <figure>
          <a href='assets/high-quality/TAB_Lesson/TAB05.jpg'>
            {/* <Image
              src='assets/low-quality/TAB_Lesson/TAB05.jpg'
              alt={t('p14')}
              title={t('p14')}
            /> */}
          </a>
          <figcaption>{t('p15')}</figcaption>
        </figure>
        <p>
          {t('p16')}
        </p>
        <figure>
          <a
            href='assets/high-quality/TAB_Lesson/TAB06.jpg'
            target='_blank'
          >
            {/* <Image
              src='assets/low-quality/TAB_Lesson/TAB06.jpg'
              alt={t('p17')}
              title={t('p17')}
            /> */}
          </a>
          <figcaption>{t('p18')}</figcaption>
        </figure>
        <p>
          {t('p19')}
        </p>
        <figure>
          <a
            href='assets/high-quality/TAB_Lesson/TAB07.jpg'
            target='_blank'
          >
            {/* <Image
              src='assets/low-quality/TAB_Lesson/TAB07.jpg'
              alt={t('p20')}
              title={t('p20')}
            /> */}
          </a>
          <figcaption>{t('p21')}</figcaption>
        </figure>
        <p>
          {t('p22')}
        </p>
        <figure>
          <a
            href='assets/high-quality/TAB_Lesson/TAB08.jpg'
            target='_blank'
          >
            {/* <Image
              src='assets/low-quality/TAB_Lesson/TAB08.jpg'
              alt={t('p23')}
              title={t('p23')}
            /> */}
          </a>
          <figcaption>{t('p24')}</figcaption>
        </figure>
        <h2>{t('p25')}:</h2>
        <p>
          {t('p26')}
        </p>
        <p>
          {t('p27')}
        </p>
      </section>
    </Layout>
  )
}

export default HowToReadTab

const getStaticProps = makeStaticProps(['how-to-read-tab', 'menu'])
export { getStaticPaths, getStaticProps }
