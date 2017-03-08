import React from 'react'

export default class Indent extends React.Component {
  render() {
    return (
      <div className="indent">
        {this.props.children}
      </div>
    )
  }
}
