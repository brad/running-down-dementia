import React from 'react'
import { Route, IndexRoute } from 'react-router'

import { context } from '../config'

import Home, { fetchContent } from './Home'

export default (
  <Route
    path={`${context.basePath}/`}
    component={({ children }) => children}>
    <IndexRoute
      component={Home}
      onEnter={fetchContent}
    />
    <Route
      path='*'
      component={Home}
      onEnter={fetchContent}
    />
  </Route>
)

