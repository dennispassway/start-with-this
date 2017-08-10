// @flow

import React from 'react'
import Helmet from 'react-helmet'

import Button from '../button'
import Message from '../message'

const title = 'Hello Page'

export default function HelloPage() {
  return (
    <div>
      <Helmet
        title={title}
        meta={[
          { name: 'description', content: 'A page to say hello' },
          { property: 'og:title', content: title },
        ]}
      />
      <h1>{title}</h1>
      <Message message={'Floep'} />
      <Button label={'test'} handleClick={_ => _} />
    </div>
  )
}
