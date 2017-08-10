// @flow

import Helmet from 'react-helmet'
import React from 'react'
import { Route } from 'react-router-dom'
import { Switch } from 'react-router'

import HomePage from './home/HomePage'
import Nav from './navigation/Nav'
import NotFoundPage from './notFound/NotFoundPage'
import { APP_NAME } from './config'
import { HOME_PAGE_ROUTE } from './routes'

export default function App() {
  return (
    <div>
      <Helmet titleTemplate={`%s | ${APP_NAME}`} defaultTitle={APP_NAME} />
      <Nav />
      <Switch>
        <Route exact path={HOME_PAGE_ROUTE} render={() => <HomePage />} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  )
}
