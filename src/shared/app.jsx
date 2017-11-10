import Helmet from 'react-helmet'
import React from 'react'
import { Route } from 'react-router-dom'
import { Switch } from 'react-router'
import { ThemeProvider } from 'react-jss'

import HomePage from './home/HomePage'
import Navigation from './navigation/Navigation'
import NotFoundPage from './notFound/NotFoundPage'
import theme from './theme'
import { APP_NAME } from './config'
import { HOME_PAGE_ROUTE } from './routes'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Helmet titleTemplate={`%s | ${APP_NAME}`} defaultTitle={APP_NAME} />
        <Navigation />
        <Switch>
          <Route exact path={HOME_PAGE_ROUTE} render={() => <HomePage />} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </ThemeProvider>
  )
}
