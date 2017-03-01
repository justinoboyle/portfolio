import React from 'react'

export default class Thumbnail extends React.Component {
  render() {
    return (
      <div className="thumbnail">
        { this.props.image &&
          <img src={this.props.image} alt={this.props.title} />
        }
        <div className="caption">
          <h3>{this.props.title}</h3>
          <p>{this.props.content}</p>
        </div>
      </div>
    )
  }
}
