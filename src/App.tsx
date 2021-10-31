import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import PageSpinner from 'components/PageSpinner'
import MainLayout from 'layouts/MainLayout'
import Routes from 'routes/Router'
import './fontawesome'
import 'animate.css/animate.min.css'
import './tailwind.css'

const App = () => (
  <BrowserRouter basename="/React">
    <MainLayout>
      <Suspense fallback={<PageSpinner />}>
        <Routes />
      </Suspense>
    </MainLayout>
  </BrowserRouter>
)

export default App
