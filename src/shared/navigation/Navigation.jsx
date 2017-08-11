// @flow

import React from 'react'
import { NavLink } from 'react-router-dom'

import { HOME_PAGE_ROUTE, NOT_FOUND_DEMO_PAGE_ROUTE } from 'shared/routes'

export default function Navigation() {
  return (
    <nav>
      {[
        { route: HOME_PAGE_ROUTE, label: 'Home' },
        { route: NOT_FOUND_DEMO_PAGE_ROUTE, label: '404 Demo' },
      ].map(link => <NavLink key={link.route} to={link.route} exact>{link.label}</NavLink>)}
    </nav>
  )
}
