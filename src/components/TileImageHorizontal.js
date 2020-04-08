import React, { Component } from 'react';

class TileImageHorizontal extends Component {
  classConfig = this.props.tileCard === 'true' ? 'tileImageHoriContainer tileCard' : 'tileImageHoriContainer tileFlat';
  render() {
    return (
      <div className={this.classConfig}>
        <div className="tileImageHoriTextContainer">
          <h6 className="tileImageHoriHeader">{this.props.header}</h6>
          <div className="tileImageHoriFooter">
            <p className="tileDateStamp">Mar.31 2020</p>
            <a className="tileViewMore" href="./">View More</a>
          </div>
        </div>
        <img className="tileImageHori" src={require('../images/dummyFPO_1x1.png')} alt="dummy" width="100%"/>
      </div>
    );
  }
}

export default TileImageHorizontal;
