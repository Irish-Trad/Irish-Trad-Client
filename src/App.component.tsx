import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Spinner from 'components/Spinner'
import AccessibilityProvider from './context/app/accessibility.provider'
import MainLayout from 'layouts/MainLayout'
import { ClientContextProvider } from 'react-fetching-library'
import { Client } from './api/Client'
import Routes from 'routes'
import './fontawesome'
import 'animate.css/animate.min.css'
import './index.css'

const App = () => (
  // <AccessibilityProvider>
  <ClientContextProvider client={Client}>
    <BrowserRouter>
      <MainLayout>
        <Suspense fallback={Spinner}>
          <Routes />
        </Suspense>
      </MainLayout>
    </BrowserRouter>
  </ClientContextProvider>
  // </AccessibilityProvider>
)

export default App
