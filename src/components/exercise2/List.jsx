import React from 'react'

const List = ({ numRows, rowHeight, renderRowAtIndex }) => {
  const totalHeight = numRows * rowHeight
  const items = []

  let index = 0
  while (index < numRows) {
    items.push(<li key={index}>{renderRowAtIndex(index)}</li>)
    index++
  }

  return (
    <div style={{ height: '100%', overflowY: 'scroll' }}>
      <ol style={{ height: totalHeight }}>
        {items}
      </ol>
    </div>
  )
}

List.propTypes = {
  numRows: React.PropTypes.number.isRequired,
  rowHeight: React.PropTypes.number.isRequired,
  renderRowAtIndex: React.PropTypes.func.isRequired
}

export default List
