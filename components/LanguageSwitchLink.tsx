import languageDetector from 'lib/languageDetector'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { FC } from 'react'
import { SupportedLocales } from 'types/supportedLocales'

interface Props {
  locale: SupportedLocales
  href?: string
}

const LanguageSwitchLink: FC<Props> = ({ locale, ...rest }) => {
  // TODO: type correctly
  const router: any = useRouter()

  let href = rest.href ?? router.asPath
  let pName = router.pathname
  Object.keys(router.query).forEach((k) => {
    if (k === 'locale') {
      pName = pName.replace(`[${k}]`, locale)
      return
    }
    pName = pName.replace(`[${k}]`, router.query[k])
  })
  if (locale) {
    href = rest.href ? `/${locale}${rest.href}` : pName
  }

  return (
    <Link
      href={href}
    >
      <button style={{ fontSize: 'small' }} className='text-white' onClick={() => (languageDetector as any).cache(locale)}>{locale.toUpperCase()}</button>
    </Link>
  )
}

export default LanguageSwitchLink
