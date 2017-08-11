// @flow

import React from 'react'
import Helmet from 'react-helmet'

import styles from './NotFoundPage.css'

const title = 'Page Not Found'

export default function NotFoundPage() {
  return (
    <div>
      <Helmet
        title={title}
        meta={[
          { name: 'description', content: 'A page to say hello' },
          { property: 'og:title', content: title },
        ]}
      />
      <h1 className={styles.title}>{title}</h1>
    </div>
  )
}
