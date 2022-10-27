import type { AppProps } from 'next/app'
import 'styles/globals.css'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faDiscord, faMailchimp } from '@fortawesome/free-brands-svg-icons'
// import {
//   faBars,
//   faSpinner,
//   faArrowsLeftRightToLine
// } from '@fortawesome/free-solid-svg-icons'
import { FC } from 'react'
import { appWithTranslation } from 'next-i18next'

// library.add(faDiscord, faMailchimp, faBars, faSpinner, faArrowsLeftRightToLine)

const MyApp: FC = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
)

export default appWithTranslation(MyApp)
