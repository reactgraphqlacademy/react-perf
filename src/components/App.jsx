import React from 'react'
import TwoColumnLayout from './TwoColumnLayout'
import Menu from './Menu'

const App = ({ children }) => (
  <TwoColumnLayout
    leftSide={<Menu />}
    rightSide={children}
  />
)

export default App
