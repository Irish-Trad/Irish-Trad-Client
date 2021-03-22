import React from 'react'
import ReactDOM from 'react-dom'

import App from './App.component'
import { Router } from 'react-router'
import { createBrowserHistory } from 'history'

import * as serviceWorker from './serviceWorker'

import './fontawesome'

import 'animate.css/animate.min.css'

import './index.css'

const history = createBrowserHistory()

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
