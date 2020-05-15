import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CarouselScroll from './CarouselScroll';

class SectionCarouselScroll extends Component {
  render() {
    return (
      <>
        <section className="sectionContainer">
          <code><FontAwesomeIcon icon="file-alt"/> Carousel / Scroll / 200509</code>
        </section>
        <section className="sectionContainer noPaddingBottom">
          <code className="sectionHeader"><FontAwesomeIcon icon="horse-head"/> Carousel / Scroll</code>
        </section>
        <CarouselScroll/>
      </>
    );
  }
}

export default SectionCarouselScroll;
