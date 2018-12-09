import React from 'react'

class TwoColumnLayout extends React.Component {

  shouldComponentUpdate() {
    return true
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            {this.props.leftSide}
          </div>
          <div className="col-sm-6">
            {this.props.rightSide}
          </div>
        </div>
      </div>
    )
  }
}

export default TwoColumnLayout
