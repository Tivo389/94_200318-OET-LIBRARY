import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CarouselSwipe from './CarouselSwipe';

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
        <CarouselSwipe/>
      </>
    );
  }
}

export default SectionCarousel;
