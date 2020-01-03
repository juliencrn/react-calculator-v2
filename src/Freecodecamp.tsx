import React from 'react'
import { Helmet } from 'react-helmet'

// Tests with freeCodeCamp
export default function Script() {
  const isDev = process.env.NODE_ENV !== 'production'
  const url = 'https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js'
  return (
    isDev && (
      <Helmet>
        <script type="text/javascript" src={url} />
      </Helmet>
    )
  )
}
