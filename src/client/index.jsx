// @flow

import 'babel-polyfill'
import 'normalize.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter } from 'react-router-dom'

import App from 'shared/App'
import { APP_CONTAINER_SELECTOR } from 'shared/config'

const rootEl = document.querySelector(APP_CONTAINER_SELECTOR)

const wrapApp = AppComponent => (
  <BrowserRouter>
    <AppContainer>
      <AppComponent />
    </AppContainer>
  </BrowserRouter>
)

ReactDOM.render(wrapApp(App), rootEl)

if (module.hot) {
  // flow-disable-next-line
  module.hot.accept('../shared/App', () => {
    // eslint-disable-next-line global-require
    const NextApp = require('../shared/App').default
    ReactDOM.render(wrapApp(NextApp), rootEl)
  })
}
