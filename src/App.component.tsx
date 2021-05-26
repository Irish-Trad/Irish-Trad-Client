import { Suspense } from 'react'

import Spinner from 'components/Spinner/Spinner.component'
import ScrollToTop from 'components/ScrollToTop/ScrollToTop.component'
import AccessibilityProvider from './context/app/accessibility.provider'

import MainLayout from 'layouts/MainLayout/MainLayout'

import { ClientContextProvider } from 'react-fetching-library'
import { Client } from './api/Client'

import { ThemeProvider } from '@material-ui/core'
import GlobalStyles from 'common/GlobalStyles'
import theme from 'theme'

import './fontawesome'
import 'animate.css/animate.min.css'
import './index.css'

import Routes from 'routes/Routes.component'

const App = () => (
  <AccessibilityProvider>
    <ThemeProvider theme={theme}>
      <ClientContextProvider client={Client}>
        <MainLayout>
          <Suspense fallback={Spinner}>
            <Routes />
          </Suspense>
        </MainLayout>
      </ClientContextProvider>
    </ThemeProvider>
  </AccessibilityProvider>
)

export default App
