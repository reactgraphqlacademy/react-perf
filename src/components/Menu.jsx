import React from 'react'
import { Link } from 'react-router'

const Menu = () => (
  <div>
    <h1>Todo list</h1>
    <ul>
      <li><Link to="/example">Example</Link></li>
      <li><Link to="/exercise1">Exercise 1 (shouldComponentUpdate)</Link></li>
      <li><Link to="/exercise2">Exercise 2 (Windowing)</Link></li>
    </ul>
  </div>
)

export default Menu
