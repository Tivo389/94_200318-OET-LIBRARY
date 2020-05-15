import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CarouselScroll from './CarouselScroll';

class SectionCarouselScroll extends Component {
  render() {
    return (
      <>
        <section className="sectionContainer">
          <code><FontAwesomeIcon icon="file-alt"/> Carousel / Scroll / 200509</code>
          <ul>
            <li>Note that this UI-approach will make it difficult for users with devices (i.e trackpad, mouse, etc) that do not have horizonltal scroll features.</li>
            <li>Shift + Scroll / Seems to work on macOS but this may not be common knowledge.</li>
            <li>Clicking on the Carousel and navigating the content with Left/Right-arrow is also an option but will be an issue if the content is clickable.</li>
            <ul>
              <li>For mobile, not so much an issue. For desktop, limiting clickable area might be a potential solution.</li>
            </ul>
            <li>In general not a good experience on mobile</li>
            <ul>
              <li>Scroll-fatigue &amp; Micro-scrolling</li>
              <li>Finger blocks content</li>
              <li>Conflicts with browser's back-feature</li>
              <li>Content accessibility limited</li>
            </ul>
            <li>Good vertical space-saving on mobile</li>
          </ul>
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
