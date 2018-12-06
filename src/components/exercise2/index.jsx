import React from 'react'
import { renderRowAtIndex, rowHeight } from './utils'
import List from './List'

const Windowing = () => (
  <List
    numRows={5000000}
    rowHeight={rowHeight}
    renderRowAtIndex={renderRowAtIndex}
  />
)

//document.querySelectorAll('li').length

export default Windowing
