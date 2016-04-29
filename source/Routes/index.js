import React from 'react'
import { Route } from 'react-router'

import { context } from '../config'

import Home from './Home'

export default (
  <Route
    path={`${context.basePath}/`}
    component={Home}
  />
)

