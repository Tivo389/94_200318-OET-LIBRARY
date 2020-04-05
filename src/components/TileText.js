import React, { Component } from 'react';

class TileText extends Component {
  classConfig = this.props.tileCard === 'true' ? 'tileText tileCard' : 'tileText tileFlat';
  render() {
    return (
      <div className={this.classConfig}>
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
