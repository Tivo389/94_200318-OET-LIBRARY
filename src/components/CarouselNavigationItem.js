import React, { Component } from 'react';

class CarouselNavgationItem extends Component {
  render() {
    const imageURL = require(`../images/circle-${this.props.character}.png`);
    return (
      <div
        className="carouselNavgationItem"
        style={{ backgroundImage: `url(${imageURL})` }}>
      </div>
    );
  }
}

export default CarouselNavgationItem;
