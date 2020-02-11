import React, { lazy, Suspense } from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Loading from 'pages/Loading'

import { AppContainer } from './App.styles'

const Homepage = lazy(() =>
  import('./pages/Homepage' /* webpackChunkName: 'Homepage' */)
)

const NotFound = lazy(() =>
  import('./pages/NotFound' /* webpackChunkName: 'NotFound' */)
)

const Chords = lazy(() =>
  import('./pages/Chords' /* webpackChunkName: 'Chords' */)
)

const ClefToTab = lazy(() =>
  import('./pages/ClefToTab' /* webpackChunkName: 'ClefToTab' */)
)

const Lessons = lazy(() =>
  import('./pages/Lessons' /* webpackChunkName: 'Lessons' */)
)

const Terminology = lazy(() =>
  import('./pages/Terminology' /* webpackChunkName: 'Terminology' */)
)

const HowToReadTab = lazy(() =>
  import(
    './pages/Lessons/pages/HowToReadTab' /* webpackChunkName: 'HowToReadTab' */
  )
)

const HowToString = lazy(() =>
  import(
    './pages/Lessons/pages/HowToString' /* webpackChunkName: 'HowToString' */
  )
)

const HowToTune = lazy(() =>
  import('./pages/Lessons/pages/HowToTune' /* webpackChunkName: 'HowToTune' */)
)

const App = () => (
  <AppContainer>
    <Router>
      <Header />
      <Suspense fallback={Loading}>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/chords" component={Chords} />
          <Route exact path="/clef-to-tab" component={ClefToTab} />
          <Route exact path="/lessons" component={Lessons} />
          <Route
            exact
            path="/lessons/how-to-read-tab"
            component={HowToReadTab}
          />
          <Route exact path="/lessons/how-to-string" component={HowToString} />
          <Route exact path="/lessons/how-to-tune" component={HowToTune} />
          <Route exact path="/terminology" component={Terminology} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Suspense>
      <Footer />
    </Router>
  </AppContainer>
)

export default App
