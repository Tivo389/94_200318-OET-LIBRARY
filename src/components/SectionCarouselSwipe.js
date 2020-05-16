import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CarouselSwipe from './CarouselSwipe';

class SectionCarouselSwipe extends Component {
  render() {
    return (
      <>
        <section className="sectionContainer">
          <code><FontAwesomeIcon icon="file-alt"/> Carousel / Swipe / 200516</code>
          <ul>
            <li>---</li>
          </ul>
        </section>
        <section className="sectionContainer noPaddingBottom">
          <code className="sectionHeader"><FontAwesomeIcon icon="horse-head"/> Carousel / Swipe</code>
        </section>
        <CarouselSwipe/>
      </>
    );
  }
}

export default SectionCarouselSwipe;
