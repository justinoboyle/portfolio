import React from 'react'

export default class ThumbnailLayout extends React.Component {
  render() {
    return (
      <div className="row">
      {this.props.children.map(child =>
        <div className="col-sm-6 col-md-4">
          {child}
        </div>
      )}
      </div>
    )
  }
}
