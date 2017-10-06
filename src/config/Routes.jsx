import React from 'react'
import { Route } from 'react-router'
import TodoList1 from '../components/example/TodoList'
import TodoList2 from '../components/exercise1/TodoList'
import Windowing from '../components/exercise2'
import App from '../components/APP'

const Routes = (
  <Route>
    <Route path="/" component={App}>
      <Route path="/example" component={TodoList1} />
      <Route path="/exercise1" component={TodoList2} />
    </Route>
    <Route path="/exercise2" component={Windowing} />
  </Route>
)

export default Routes
