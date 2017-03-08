import React from 'react'

export default class ThumbnailLayout extends React.Component {
  render() {
    return (
      <div className="row">
      {React.Children.map(this.props.children, (child =>
        <div className="col-md-3">
          {child}
        </div>
      ))}
      </div>
    )
  }
}
