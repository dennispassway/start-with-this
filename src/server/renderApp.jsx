import Helmet from 'react-helmet'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { SheetsRegistry, JssProvider } from 'react-jss'
import { StaticRouter } from 'react-router'

import App from 'shared/App'
import { APP_CONTAINER_CLASS, JSS_SSR_CLASS, STATIC_PATH, WDS_PORT } from 'shared/config'
import { isProd } from 'shared/utils'

export default function renderApp(location: string, routerContext: ?Object = {}) {
  const head = Helmet.rewind()
  const sheets = new SheetsRegistry()
  const appHtml = ReactDOMServer.renderToString(
    <StaticRouter location={location} context={routerContext}>
      <JssProvider registry={sheets}>
        <App />
      </JssProvider>
    </StaticRouter>)

  return (
    `<!doctype html>
    <html>
      <head>
        ${head.title}
        ${head.meta}
        <link rel="stylesheet" href="${STATIC_PATH}/css/style.css">
        <style class="${JSS_SSR_CLASS}">${sheets.toString()}</style>
      </head>
      <body>
        <div class="${APP_CONTAINER_CLASS}">${appHtml}</div>
        <script src="${isProd ? STATIC_PATH : `http://localhost:${WDS_PORT}/dist`}/js/bundle.js"></script>
      </body>
    </html>`
  )
}
