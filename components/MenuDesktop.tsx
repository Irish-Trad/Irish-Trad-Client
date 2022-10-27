import { FC, useState } from 'react'
import Footer from 'components/Footer'
import menuItems from 'utils/menuItems'
import Link from 'components/Link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LanguageSwitchLink from 'components/LanguageSwitchLink'
import i18nextConfig from 'next-i18next.config'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

const MenuDesktop: FC = () => {
  const [openMenu, setOpenMenu] = useState(true)
  const router = useRouter()
  const { t } = useTranslation('menu')
  const currentLocale = router.query.locale || i18nextConfig.i18n.defaultLocale

  return (
    <div
      className={`flex-col justify-between hidden bg-gray-700 lg:flex ${
        openMenu ? 'w-60' : 'w-12'
      }`}
    >
      <div className='flex flex-col flex-1 overflow-auto'>
        <div
          className='flex justify-center'
          onClick={() => setOpenMenu(!openMenu)}
        >
          <FontAwesomeIcon
            className='text-white'
            icon='arrows-left-right-to-line'
          />
        </div>
        <Link href='/'>
          <a className='flex justify-center py-6 text-white border-b-2 hover:bg-gray-900'>
            Irish-Trad.net
          </a>
        </Link>
        <div className='h-full max-h-full overflow-auto'>
          <div className='flex py-6 text-white justify-evenly'>
            {i18nextConfig.i18n.locales.map((locale) => {
              // if (locale === currentLocale) return null
              return <LanguageSwitchLink locale={locale} key={locale} />
            })}
          </div>
          {menuItems.map((item) => {
            const localeKey = item.localeKey
            return (
              <Link key={item.path} href={item.path}>
                <a className='flex justify-center py-6 text-white hover:bg-gray-900'>
                  {t(localeKey)}
                </a>
              </Link>
            )
          })}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default MenuDesktop
