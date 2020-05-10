import React, { Component } from 'react';

class CarouselContentItem extends Component {
  render() {
    const imageURL = require(`../images/card-${this.props.character}.png`);
    return (
      <div className="carouselContentItem" style={{ backgroundImage: `url(${imageURL})` }}>
        <div className="carouselContentItemContent">
          <p className="carouselContentItemQuote">"{this.props.quote}"</p>
          <h4 className="carouselContentItemName">{this.props.character}</h4>
          <p className="carouselContentItemClass">{this.props.class}</p>
        </div>
      </div>
    );
  }
}

export default CarouselContentItem;
