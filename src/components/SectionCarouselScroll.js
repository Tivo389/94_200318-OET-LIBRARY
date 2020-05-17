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
            <li>Note that these are more to focus on each UI and may not be complete on their own.</li>
            <ul>
              <li>
                For example, a scroll-only UI makes it difficult for users with devices (i.e trackpad, mouse, etc) that do not have horizontal scroll features.
              </li>
              <li>On this occasion the scroll UI is only applied to the mobile breakpoint so horizontal scroll for desktop environment should not be an concern.</li>
              <li>As a general rule of thumb a click/tap UI should be the basic.</li>
            </ul>
            <li>Shift + Scroll / Seems to work on macOS but this may not be common knowledge.</li>
            <li>Clicking on the Carousel to make it the active/focused element and navigating the content with Left/Right-arrow is an option but will be an issue if the content itself is clickable.</li>
            <ul>
              <li>For mobile, not so much an issue. For desktop, limiting clickable area might be a potential solution.</li>
            </ul>
            <li>Notes regarding UI</li>
            <ul>
              <li>In general not a good experience on mobile</li>
              <li>Scroll-fatigue &amp; Micro-scrolling</li>
              <li>Finger blocks content</li>
              <li>Conflicts with browser's back-feature</li>
              <li>One-way content accessibility</li>
              <li>Good vertical space-saving on mobile</li>
            </ul>
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
