import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class SectionCarousel extends Component {
  render() {
    return (
      <>
        <section className="sectionContainer">
          <code><FontAwesomeIcon icon="file-alt"/> Carousel / Swipe Only / 200509</code>
        </section>
        <section className="sectionContainer noPaddingBottom">
          <code className="sectionHeader"><FontAwesomeIcon icon="horse-head"/> Carousel</code>
        </section>
        <div className="carouselElement">
          <div className="carouselContent">
            <div className="carouselContentItem">
              <h6>Alpha</h6>
            </div>
            <div className="carouselContentItem">
              <h6>Beta</h6>
            </div>
            <div className="carouselContentItem">
              <h6>Charlie</h6>
            </div>
            <div className="carouselContentItem">
              <h6>Delta</h6>
            </div>
            <div className="carouselContentItem">
              <h6>Echo</h6>
            </div>
            <div className="carouselContentItem">
              <h6>Foxtrot</h6>
            </div>
            <div className="carouselContentItem">
              <h6>Golf</h6>
            </div>
            <div className="carouselContentItem">
              <h6>Hotel</h6>
            </div>
            <div className="carouselContentItem">
              <h6>India</h6>
            </div>
            <div className="carouselContentItem">
              <h6>Juliett</h6>
            </div>
            <div className="carouselContentItem">
              <h6>Kilo</h6>
            </div>
            <div className="carouselContentItem">
              <h6>Lima</h6>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SectionCarousel;
