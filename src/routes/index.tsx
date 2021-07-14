import React, { lazy } from 'react'
import { Switch, Route } from 'react-router-dom'

const Accessibility = lazy(() => import('pages/Accessibility'))
const Chords = lazy(() => import('pages/Chords'))
const Contact = lazy(() => import('pages/Contact'))
const ClefToTab = lazy(() => import('pages/ClefToTab'))
const Community = lazy(() => import('pages/Community'))
const Homepage = lazy(() => import('pages/Homepage'))
const HowToReadTab = lazy(() => import('pages/Lessons/pages/HowToReadTab'))
const HowToString = lazy(() => import('pages/Lessons/pages/HowToString'))
const HowToTune = lazy(() => import('pages/Lessons/pages/HowToTune'))
const Lessons = lazy(() => import('pages/Lessons'))
const NotFound = lazy(() => import('pages/NotFound'))
const Newsletter = lazy(() => import('pages/Newsletter'))
const Terminology = lazy(() => import('pages/Terminology'))
const Tablature = lazy(() => import('pages/Tablature'))

const Routes = () => (
  <Switch>
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
    <Route exact path="/" component={Homepage} />
    <Route path="*" component={NotFound} />
  </Switch>
)

export default Routes
