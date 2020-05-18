import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CarouselPaddle from './CarouselPaddle';

class SectionCarouselPaddle extends Component {
  render() {
    return (
      <>
        <section className="sectionContainer">
          <code><FontAwesomeIcon icon="file-alt"/> Carousel / Paddle / 200517</code>
          <ul>
            <li><span role='img' aria-label='thinking'>🤔</span></li>
          </ul>
        </section>
        <section className="sectionContainer noPaddingBottom">
          <code className="sectionHeader"><FontAwesomeIcon icon="horse-head"/> Carousel / Paddle</code>
        </section>
        <CarouselPaddle/>
      </>
    );
  }
}

export default SectionCarouselPaddle;
