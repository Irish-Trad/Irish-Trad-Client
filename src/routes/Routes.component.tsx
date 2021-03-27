import { lazy } from 'react'
import { Switch, Route } from 'react-router-dom'

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

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Homepage} />
    <Route path="/chords" component={Chords} />
    <Route path="/contact" component={Contact} />
    <Route path="/clef-to-tab" component={ClefToTab} />
    <Route path="/community" component={Community} />
    <Route path="/newsletter" component={Newsletter} />
    <Route path="/lessons" component={Lessons} />
    <Route path="/lessons/how-to-read-tab" component={HowToReadTab} />
    <Route path="/lessons/how-to-string" component={HowToString} />
    <Route path="/lessons/how-to-tune" component={HowToTune} />
    <Route path="/terminology" component={Terminology} />
    <Route path="/tablature" component={Tablature} />
    <Route path="/accessibility" component={Accessibility} />
    <Route path="*" component={NotFound} />
  </Switch>
)

export default Routes
