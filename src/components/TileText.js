import React, { Component } from 'react';

class TileText extends Component {
  render() {
    return (
      <div className="tileText">
        <h6 className="tileTextHeader">{this.props.header}</h6>
        <p className="tileTextBody">{this.props.body}</p>
        <div className="tileTextFooter">
          <p className="tileDateStamp">Mar.31 2020</p>
          <a className="tileViewMore" href="./">View More</a>
        </div>
      </div>
    );
  }
}

export default TileText;
