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
            <li>Note that these are more to focus on each UI and may not be complete on their own.</li>
            <ul>
              <li>
                For example, a UI that involves swiping won't be effective on a desktop device.'
              </li>
              <li>As a general rule of thumb a click/tap UI should be the basic.</li>
            </ul>
            <li>Notes regarding UI</li>
            <ul>
              <li>Due to less scrolling and no micro-scrolling, a better experience.</li>
              <li>Finger blocking content issue is reduced.</li>
              <li>Can still conflict with browser's back-feature</li>
              <li>One-way content accessibility</li>
              <li>Good vertical space-saving on mobile</li>
              <li>Seems the horizontal-scrolling prevented veritcal-scroll sway.</li>
              <ul>
                <li>Since scrolling isn't used with this UI there is some vertical-scroll swaying.</li>
                <li>Wait a min, would using .scrollLeft instead of translateX prevent vertical-scroll swaying?</li>
                <ul>
                  <li></li>
                </ul>
              </ul>
            </ul>
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
