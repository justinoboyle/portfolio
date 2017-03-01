import React from 'react'

export default class MediaList extends React.Component {
  render() {
    return (
        <ul className="media-list">
          {this.props.children}
        </ul>
    )
  }
}
