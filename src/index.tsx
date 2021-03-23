import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from './App.component'

import { ClientContextProvider } from 'react-fetching-library'
import { Client } from './api/Client'

import * as serviceWorker from './serviceWorker'

import './fontawesome'
import 'animate.css/animate.min.css'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <ClientContextProvider client={Client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ClientContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.unregister()
