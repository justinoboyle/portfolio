import React from 'react'

export default class Thumbnail extends React.Component {
  constructor() {
    super();
    try {
      this.className = !!this.props.link ? "thumbnail hover" : "thumbnail";
    }catch(e) {
      this.className = "thumbnail"
    }

  }
  render() {
    return (
      <div className={!!this.props.link ? "thumbnail hover" : "thumbnail"}  onClick={() => this.click(this.props.link || "#")}>
        { this.props.image &&
          <img src={this.props.image} alt={this.props.title} />
        }
        <div className="caption">
          <h3>{this.props.title}</h3>
          { this.props.subtext && 
            <b>{this.props.subtext}</b>
          }
          <p>{this.props.content}</p>
        </div>
      </div>
    )
  }
  click() {
    if(this.props.link)
      window.open(this.props.link)
  }
}
