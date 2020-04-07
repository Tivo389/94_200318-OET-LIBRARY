import React, { Component } from 'react';

class TileImageVertical extends Component {
  classConfig = this.props.tileCard === 'true' ? 'tileImageVertContainer tileCard' : 'tileImageVertContainer tileFlat';
  render() {
    return (
      <div className={this.classConfig}>
        <img className="tileImageVert" src={require('../images/dummyFPO_16x9.png')} alt="dummy" width="100%"/>
        <div className="tileImageVertTextContainer">
          <h6 className="tileImageHeader">{this.props.header}</h6>
          <div className="tileImageFooter">
            <p className="tileDateStamp">Mar.31 2020</p>
            <a className="tileViewMore" href="./">View More</a>
          </div>
        </div>
      </div>
    );
  }
}

export default TileImageVertical;
