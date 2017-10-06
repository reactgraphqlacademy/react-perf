import React from 'react'
import { renderRowAtIndex, rowHeight } from './utils'
import List from './List'

const Windowing = () => (
  <List
    numRows={500}
    rowHeight={rowHeight}
    renderRowAtIndex={renderRowAtIndex}
  />
)

export default Windowing
