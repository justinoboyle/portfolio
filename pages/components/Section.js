import React from 'react'

export default class ThumbnailLayout extends React.Component {
  render() {
    return (
      <div className="section">
        <h2>{this.props.name}</h2>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}
