import { FC } from 'react'
// import Image from 'next/image'
import Link from 'next/link'
import Layout from 'layouts/Layout'
import { getStaticPaths, makeStaticProps } from 'lib/getStatic'
import { useTranslation } from 'next-i18next'

const HowToTune: FC = () => {
  const { t } = useTranslation(['how-to-string'])

  return (
    <Layout title={t('head.title')} metaDescription={t('head.meta')}>
      <div>
        <Link href='/lessons'>
          <a>{t('p1')}</a>
        </Link>
      </div>
      <section>
        <h2>{t('p2')}:</h2>
        <p>{t('p3')}</p>
        <p>{t('p4')}</p>
        <p>{t('p5')}</p>
        <h2>{t('p6')}:</h2>
        <p>{t('p7')}:</p>
        <p>{t('p8')}</p>
        <p>{t('p9')}</p>
        <p>{t('p10')}</p>
        <h2>{t('p11')}:</h2>
        <p>{t('p12')}</p>
        <figure>
          <a
            href='assets/high-quality/How_To_String/step1.jpg'
            target='_blank'
            rel='noopener noreferrer'
          >
            {/* <Image
              src='assets/low-quality/How_To_String/step1.jpg'
              alt={t('p13')}
              title={t('p13')}
              layout='fill'
            /> */}
          </a>
          <figcaption>{t('p14')}</figcaption>
        </figure>
        <p>{t('p15')}</p>
        <p>{t('p16')}</p>
        <p>{t('p17')}</p>
        <figure>
          <a
            href='assets/high-quality/How_To_String/step23.jpg'
            target='_blank'
            rel='noopener noreferrer'
          >
            {/* <Image
              src='assets/low-quality/How_To_String/step23.jpg'
              alt={t('p18')}
              title={t('p18')}
              layout='fill'
            /> */}
          </a>
          <figcaption>{t('p19')}</figcaption>
        </figure>
        <figure>
          <a
            href='assets/high-quality/How_To_String/step45.jpg'
            target='_blank'
            rel='noopener noreferrer'
          >
            {/* <Image
              src='assets/low-quality/How_To_String/step45.jpg'
              alt={t('p20')}
              title={t('p20')}
              layout='fill'
            /> */}
          </a>
          <figcaption>{t('p21')}</figcaption>
        </figure>
        <p>{t('p22')}</p>
        <h2>{t('p23')}:</h2>
        <p>{t('p24')}</p>
        <p>{t('p25')}</p>
        <h2>{t('p26')}:</h2>
        <p>{t('p27')}</p>
        <p>{t('p28')}</p>
        <p>{t('p29')}</p>
        <h2>{t('p30')}:</h2>
        <p>{t('p31')}</p>
        <p>{t('p32')}:</p>
        <ul>
          <li>{t('p33')}</li>
          <li>{t('p34')}</li>
          <li>{t('p35')}</li>
        </ul>
        <p>{t('p36')}</p>
        <h2>{t('p37')}:</h2>
        <p>{t('p38')}</p>
        <p>{t('p39')}:</p>
        <ul>
          <li>{t('p40')}</li>
          <li>{t('p41')}</li>
          <li>{t('p42')}</li>
          <li>{t('p43')}</li>
        </ul>
        <p>{t('p44')}:</p>
        <ul>
          <li>{t('p45')}</li>
          <li>{t('p46')}</li>
          <li>{t('p47')}</li>
          <li>{t('p48')}</li>
          <li>{t('p49')}</li>
          <li>{t('p50')}</li>
        </ul>
        <p>{t('p51')}</p>
        <h2>{t('p52')}:</h2>
        <p>{t('p53')}</p>
        <p>{t('p54')}</p>
        <p>{t('p55')}</p>
      </section>
    </Layout>
  )
}

export default HowToTune

const getStaticProps = makeStaticProps(['how-to-string', 'menu'])
export { getStaticPaths, getStaticProps }
