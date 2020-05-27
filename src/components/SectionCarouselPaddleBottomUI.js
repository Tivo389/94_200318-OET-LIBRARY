import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CarouselPaddleBottomUI from './CarouselPaddleBottomUI';

class SectionCarouselPaddleBottomUI extends Component {
  render() {
    return (
      <>
        <section className="sectionContainer">
          <code><FontAwesomeIcon icon="file-alt"/> Carousel / Paddle / Bottom-UI / 200526</code>
          <li>999 Jot notes</li>
          <li>999 Also explore loop as well</li>
        </section>
        <section className="sectionContainer noPaddingBottom">
          <code className="sectionHeader"><FontAwesomeIcon icon="horse-head"/> Carousel / Paddle / Bottom-UI</code>
        </section>
        <CarouselPaddleBottomUI/>
      </>
    );
  }
}

export default SectionCarouselPaddleBottomUI;
