import React from 'react'
import { Router, hashHistory } from 'react-router'
import Routes from '../config/Routes'

const Root = () => (
  <Router history={ hashHistory }>
    {Routes}
  </Router>
)

export default Root
