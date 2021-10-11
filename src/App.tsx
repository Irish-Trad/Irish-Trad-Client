import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Spinner from 'components/Spinner'
import MainLayout from 'layouts/MainLayout'
import Routes from 'routes/Router'
import './fontawesome'
import 'animate.css/animate.min.css'
import './tailwind.css'

const App = () => (
  <BrowserRouter>
    <MainLayout>
      <Suspense fallback={Spinner}>
        <Routes />
      </Suspense>
    </MainLayout>
  </BrowserRouter>
)

export default App
