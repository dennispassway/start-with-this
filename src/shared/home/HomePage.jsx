// @flow

import React from 'react'
import Helmet from 'react-helmet'

import { APP_NAME } from 'shared/config'
import Button from 'shared/component/Button'

export default function HomePage() {
  return (
    <div>
      <Helmet
        meta={[
          { name: 'description', content: 'Hello App is an app to say hello' },
          { property: 'og:title', content: APP_NAME },
        ]}
      />
      <h1>{APP_NAME}</h1>
      <Button onClick={_ => _}>Button</Button>
    </div>
  )
}
