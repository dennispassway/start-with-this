// @flow

import Helmet from 'react-helmet'
import injectSheet from 'react-jss'
import React from 'react'

const styles = {
  title: {
    color: 'hotpink',
  },
}

const title = 'Page Not Found'

function NotFoundPage({ classes }: { classes: Object }) {
  return (
    <div>
      <Helmet
        title={title}
        meta={[
          { name: 'description', content: 'A page to say hello' },
          { property: 'og:title', content: title },
        ]}
      />
      <h1 className={classes.title}>{title}</h1>
    </div>
  )
}

export default injectSheet(styles)(NotFoundPage)
