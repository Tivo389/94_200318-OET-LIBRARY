import React, { Component } from 'react';

class TileImageHorizontal extends Component {
  classConfig = this.props.tileCard === 'true' ? 'tileElement tileElementHorizontal tileCard' : 'tileElement tileElementHorizontal tileFlat';
  render() {
    return (
      <div className={this.classConfig}>
        <div className="tileTextContainer tileTextContainerVerticalFullJustify">
          <h6 className="tileTextHeader tileTextHeaderHorizontal">{this.props.header}</h6>
          <div className="tileFooter">
            <p className="tileDateStamp">Mar.31 2020</p>
            <a className="tileViewMore" href="./">View More</a>
          </div>
        </div>
        <img className="tileImageHorizontal" src={require('../images/dummyFPO_1x1.png')} alt="dummy" width="100%"/>
      </div>
    );
  }
}

export default TileImageHorizontal;
