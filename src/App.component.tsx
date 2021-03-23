import { lazy, Suspense, useState } from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import DesktopHeader from 'components/DesktopHeader'
import MobileHeader from 'components/MobileHeader'
import MobileFooter from 'components/MobileFooter'
import Spinner from 'components/Spinner'
import ScrollToTop from 'components/ScrollToTop'

import AccessibilityProvider from './context/app/accessibility.provider'

import { Container, MainContainer } from './App.styles'

const Homepage = lazy(
  () => import('pages/Homepage' /* webpackChunkName: 'Homepage' */)
)

const NotFound = lazy(
  () => import('pages/NotFound' /* webpackChunkName: 'NotFound' */)
)

const Chords = lazy(
  () => import('pages/Chords' /* webpackChunkName: 'Chords' */)
)

const Contact = lazy(
  () => import('pages/Contact' /* webpackChunkName: 'Contact' */)
)

const ClefToTab = lazy(
  () => import('pages/ClefToTab' /* webpackChunkName: 'ClefToTab' */)
)

const Lessons = lazy(
  () => import('pages/Lessons' /* webpackChunkName: 'Lessons' */)
)

const Terminology = lazy(
  () => import('pages/Terminology' /* webpackChunkName: 'Terminology' */)
)

const Newsletter = lazy(
  () => import('pages/Newsletter' /* webpackChunkName: 'Newsletter' */)
)

const Community = lazy(
  () => import('pages/Community' /* webpackChunkName: 'Community' */)
)

const HowToReadTab = lazy(
  () =>
    import(
      'pages/Lessons/pages/HowToReadTab'
      /* webpackChunkName: 'HowToReadTab' */
    )
)

const HowToString = lazy(
  () =>
    import(
      'pages/Lessons/pages/HowToString'
      /* webpackChunkName: 'HowToString' */
    )
)

const HowToTune = lazy(
  () =>
    import('pages/Lessons/pages/HowToTune' /* webpackChunkName: 'HowToTune' */)
)

const Tablature = lazy(
  () => import('pages/Tablature' /* webpackChunkName: 'Tablature' */)
)

const Accessibility = lazy(
  () => import('pages/Accessibility' /* webpackChunkName: 'Accessibility' */)
)

const App = () => {
  const [hidden, toggleHidden] = useState(false)

  return (
    <BrowserRouter>
      <Container hidden={hidden}>
        <DesktopHeader />
        <div style={{ width: '100%' }}>
          <MobileHeader hidden={hidden} toggleHidden={toggleHidden} />
          <AccessibilityProvider>
            <MainContainer id="top">
              <Suspense fallback={Spinner}>
                <Switch>
                  <Route exact path="/" component={Homepage} />
                  <Route path="/chords" component={Chords} />
                  <Route path="/contact" component={Contact} />
                  <Route path="/clef-to-tab" component={ClefToTab} />
                  <Route path="/community" component={Community} />
                  <Route path="/newsletter" component={Newsletter} />
                  <Route path="/lessons" component={Lessons} />
                  <Route
                    path="/lessons/how-to-read-tab"
                    component={HowToReadTab}
                  />
                  <Route
                    path="/lessons/how-to-string"
                    component={HowToString}
                  />
                  <Route path="/lessons/how-to-tune" component={HowToTune} />
                  <Route path="/terminology" component={Terminology} />
                  <Route path="/tablature" component={Tablature} />
                  <Route path="/accessibility" component={Accessibility} />
                  <Route path="*" component={NotFound} />
                </Switch>
              </Suspense>
              <ScrollToTop />
            </MainContainer>
          </AccessibilityProvider>
        </div>
        <MobileFooter />
      </Container>
    </BrowserRouter>
  )
}

export default App
