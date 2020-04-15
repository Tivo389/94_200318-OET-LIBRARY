import React, { Component } from 'react';

class TileImageVertical extends Component {
  classConfig = this.props.tileCard === 'true' ? 'tileElement tileCard' : 'tileElement tileFlat';
  render() {
    return (
      <div className={this.classConfig}>
        <img className="tileImageVertical" src={require('../images/dummyFPO_16x9.png')} alt="dummy" width="100%"/>
        <div className="tileTextContainer">
          <h6 className="tileTextHeader">{this.props.header}</h6>
          <div className="tileFooter">
            <p className="tileDateStamp">Mar.31 2020</p>
            <a className="tileViewMore" href="./">View More</a>
          </div>
        </div>
      </div>
    );
  }
}

export default TileImageVertical;
