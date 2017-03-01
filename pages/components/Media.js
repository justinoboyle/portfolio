import React from 'react'

export default class Media extends React.Component {
  render() {
    return (
      <li className="media">
        <div className="media-body">
          <h4 className="media-heading">{this.props.title}</h4>
          {this.props.content}
          {this.props.children}
        </div>
      </li>
    )
  }
}
