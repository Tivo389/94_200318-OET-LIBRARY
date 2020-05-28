import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CarouselPaddleBottomUI from './CarouselPaddleBottomUI';

class SectionCarouselPaddleBottomUI extends Component {
  render() {
    return (
      <>
        <section className="sectionContainer">
          <code><FontAwesomeIcon icon="file-alt"/> Carousel / Paddle / Bottom-UI / 200526</code>
          <li>In terms of a Paddle UI, placing it on the bottom definitely is much easier to use.</li>
          <li>The content not being covered by the hand is a much better experience. However, the UI does take up about 15% of the height.</li>
          <li>The loop feature works nicer than expected.</li>
          <li>Noticability is lower, but the Swipe UI allows for more space, and less clutter.</li>
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
