// @flow

import compression from 'compression'
import express from 'express'

import { HOME_PAGE_ROUTE } from 'shared/routes'
import { isProd } from 'shared/utils'
import { WEB_PORT, STATIC_PATH } from 'shared/config'

import renderApp from './renderApp'

const app = express()
app.use(compression())
app.use(STATIC_PATH, express.static('dist'))
app.use(STATIC_PATH, express.static('public'))

app.get(HOME_PAGE_ROUTE, (req, res) => res.send(renderApp(req.url)))
app.get('*', (req, res) => res.status(404).send(renderApp(req.url)))

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  // eslint-disable-next-line no-console
  console.error(err.stack)
  res.status(500).send('Something went wrong!')
})

app.listen(WEB_PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${WEB_PORT} ${isProd ? '(production)' :
    '(development).\nKeep "yarn dev:wds" running in an other terminal'}.`)
})
