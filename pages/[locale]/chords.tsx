import { FC } from 'react'
import Layout from 'layouts/Layout'
import { getStaticPaths, makeStaticProps } from 'lib/getStatic'
import { useTranslation } from 'next-i18next'

const chordButtons = [
  {
    href: '#MajorChords',
    labelLocaleKey: 'p1'
  },
  {
    href: '#MinorChords',
    labelLocaleKey: 'p2'
  },
  {
    href: '#Major7thChords',
    labelLocaleKey: 'p3'
  },
  {
    href: '#Minor7thChords',
    labelLocaleKey: 'p4'
  },
  {
    href: '#Dominant7thChords',
    labelLocaleKey: 'p5'
  }
]

const Chords: FC = () => {
  const { t } = useTranslation(['chords'])

  return (
    <Layout title={t('head.title')} metaDescription={t('head.meta')}>
      <div className='flex justify-center'>
        {chordButtons.map((item) => (
          <a
            key={item.labelLocaleKey}
            className='mx-4 my-4'
            href={`${item.href}`}
          >
            <button>{item.labelLocaleKey}</button>
          </a>
        ))}
      </div>
      <p>{t('p6')}</p>
      <p>{t('p7')}</p>
      <p>{t('p8')}</p>
      <p>{t('p1')}</p>
      <p>{t('p9')}</p>
      <p>
        <b>{t('p10')}</b>
      </p>
      <p>
        <b>{t('p11')}</b>
      </p>
      <p>{t('p12')}</p>
      <p>
        <b>{t('p13')}</b>
      </p>
      <p>
        <b>{t('p14')}</b>
      </p>
      <p>{t('p15')}</p>
      <p>
        <b>{t('p16')}</b>
      </p>
      <p>
        <b>{t('p17')}</b>
      </p>
      <div>
        <a
          href='assets/high-quality/GDAE_Chords/GDAE-Major-A4.pdf'
          target='_blank'
        >
          <img
            id='MajorChords'
            src='assets/low-quality/GDAE_Chords/GDAE-Major-A4.jpg'
            alt={t('p18')}
          />
        </a>
        <a
          href='assets/high-quality/GDAD_Chords/GDAD-Major-A4.pdf'
          target='_blank'
        >
          <img
            src='assets/low-quality/GDAD_Chords/GDAD-Major-A4.jpg'
            alt={t('p19')}
          />
        </a>
      </div>
      <p>{t('p2')}</p>
      <p>{t('p20')}</p>
      <p>
        <b>{t('p21')}</b>
      </p>
      <p>
        <b>{t('p22')}</b>
      </p>
      <p>{t('p12')}</p>
      <p>
        <b>{t('p23')}</b>
      </p>
      <p>
        <b>{t('p24')}</b>
      </p>
      <p>{t('p25')}</p>
      <p>
        <b>{t('p26')}</b>
      </p>
      <p>
        <b>{t('p27')}</b>
      </p>
      <div>
        <a
          href='assets/high-quality/GDAE_Chords/GDAE-Minor-A4.pdf'
          target='_blank'
        >
          <img
            id='MinorChords'
            src='assets/low-quality/GDAE_Chords/GDAE-Minor-A4.jpg'
            alt={t('p28')}
          />
        </a>
        <a
          href='assets/high-quality/GDAD_Chords/GDAD-Minor-A4.pdf'
          target='_blank'
        >
          <img
            src='assets/low-quality/GDAD_Chords/GDAD-Minor-A4.jpg'
            alt={t('p29')}
          />
        </a>
      </div>
      <p>{t('p3')}</p>
      <p>{t('p30')}</p>
      <p>
        <b>{t('p10')}</b>
      </p>
      <p>
        <b>{t('p11')}</b>
      </p>
      <p>{t('p31')}</p>
      <p>
        <b>{t('p32')}</b>
      </p>
      <p>
        <b>{t('p33')}</b>
      </p>
      <p>{t('p34')}</p>
      <p>
        <b>{t('p35')}</b>
      </p>
      <p>
        <b>{t('p36')}</b>
      </p>
      <div>
        <a
          href='assets/high-quality/GDAE_Chords/GDAE-Major7th-A4.pdf'
          target='_blank'
        >
          <img
            id='Major7thChords'
            src='assets/low-quality/GDAE_Chords/GDAE-Major7th-A4.jpg'
            alt={t('p37')}
          />
        </a>
        <a
          href='assets/high-quality/GDAD_Chords/GDAD-Major7th-A4.pdf'
          target='_blank'
        >
          <img
            src='assets/low-quality/GDAD_Chords/GDAD-Major7th-A4.jpg'
            alt={t('p38')}
          />
        </a>
      </div>
      <p>{t('p4')}</p>
      <p>{t('p39')}</p>
      <p>
        <b>{t('p21')}</b>
      </p>
      <p>
        <b>{t('p22')}</b>
      </p>
      <p>{t('p31')}</p>
      <p>
        <b>{t('p40')}</b>
      </p>
      <p>
        <b>{t('p41')}</b>
      </p>
      <p>{t('p42')}</p>
      <p>
        <b>{t('p43')}</b>
      </p>
      <p>
        <b>{t('p44')}</b>
      </p>
      <div>
        <a
          href='assets/high-quality/GDAE_Chords/GDAE-Minor7th-A4.pdf'
          target='_blank'
        >
          <img
            id='Minor7thChords'
            src='assets/low-quality/GDAE_Chords/GDAE-Minor7th-A4.jpg'
            alt={t('p45')}
          />
        </a>
        <a
          href='assets/high-quality/GDAD_Chords/GDAD-Minor7th-A4.pdf'
          target='_blank'
        >
          <img
            src='assets/low-quality/GDAD_Chords/GDAD-Minor7th-A4.jpg'
            alt={t('p46')}
          />
        </a>
      </div>
      <p>{t('p5')}</p>
      <p>{t('p47')}</p>
      <p>
        <b>{t('p10')}</b>
      </p>
      <p>
        <b>{t('p11')}</b>
      </p>
      <p>
        <b>{t('p21')}</b>
      </p>
      <p>
        <b>{t('p22')}</b>
      </p>
      <p>{t('p31')}</p>
      <p>
        <b>{t('p48')}</b>
      </p>
      <p>
        <b>{t('p49')}</b>
      </p>
      <p>{t('p50')}</p>
      <p>
        <b>{t('p51')}</b>
      </p>
      <p>
        <b>{t('p52')}</b>
      </p>
      <div>
        <a
          href='assets/high-quality/GDAE_Chords/GDAE-Dominant7th-A4.pdf'
          target='_blank'
        >
          <img
            id='Dominant7thChords'
            src='assets/low-quality/GDAE_Chords/GDAE-Dominant7th-A4.jpg'
            alt={t('p53')}
          />
        </a>
        <a
          href='assets/high-quality/GDAD_Chords/GDAD-Dominant7th-A4.pdf'
          target='_blank'
        >
          <img
            src='assets/low-quality/GDAD_Chords/GDAD-Dominant7th-A4.jpg'
            alt={t('p54')}
          />
        </a>
      </div>
    </Layout>
  )
}

export default Chords

const getStaticProps = makeStaticProps(['chords', 'menu'])
export { getStaticPaths, getStaticProps }
