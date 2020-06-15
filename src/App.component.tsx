import React, { lazy, Suspense } from 'react'

import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import Header from 'components/Header'
import Footer from 'components/Footer'
import Loading from 'pages/Loading'

import { AppContainer } from 'App.styles'

const Homepage = lazy(() =>
  import('pages/Homepage' /* webpackChunkName: 'Homepage' */)
)

const NotFound = lazy(() =>
  import('pages/NotFound' /* webpackChunkName: 'NotFound' */)
)

const Chords = lazy(() =>
  import('pages/Chords' /* webpackChunkName: 'Chords' */)
)

const ClefToTab = lazy(() =>
  import('pages/ClefToTab' /* webpackChunkName: 'ClefToTab' */)
)

const Lessons = lazy(() =>
  import('pages/Lessons' /* webpackChunkName: 'Lessons' */)
)

const Terminology = lazy(() =>
  import('pages/Terminology' /* webpackChunkName: 'Terminology' */)
)

const Newsletter = lazy(
  () => import('pages/Newsletter') /* webpackChunkName: 'Newsletter' */
)

const Community = lazy(
  () => import('pages/Community') /* webpackChunkName: 'Community' */
)

const HowToReadTab = lazy(() =>
  import(
    'pages/Lessons/pages/HowToReadTab' /* webpackChunkName: 'HowToReadTab' */
  )
)

const HowToString = lazy(() =>
  import(
    'pages/Lessons/pages/HowToString' /* webpackChunkName: 'HowToString' */
  )
)

const HowToTune = lazy(() =>
  import('pages/Lessons/pages/HowToTune' /* webpackChunkName: 'HowToTune' */)
)

const Tablature = lazy(() =>
  import('pages/Tablature' /* webpackChunkName: 'Tablature' */)
)

const App: React.FC = () => (
  <AppContainer>
    <Router basename={`/${process.env.PUBLIC_URL}`}>
      <Header />
      <Suspense fallback={Loading}>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/chords" component={Chords} />
          <Route exact path="/clef-to-tab" component={ClefToTab} />
          <Route exact path="/community" component={Community} />
          <Route exact path="/newsletter" component={Newsletter} />
          <Route exact path="/lessons" component={Lessons} />
          <Route
            exact
            path="/lessons/how-to-read-tab"
            component={HowToReadTab}
          />
          <Route exact path="/lessons/how-to-string" component={HowToString} />
          <Route exact path="/lessons/how-to-tune" component={HowToTune} />
          <Route exact path="/terminology" component={Terminology} />
          <Route exact path="/tablature" component={Tablature} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Suspense>
      <Footer />
    </Router>
  </AppContainer>
)

export default App
