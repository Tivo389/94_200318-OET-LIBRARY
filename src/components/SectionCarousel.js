import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class SectionCarousel extends Component {
  render() {
    return (
      <>
        <section className="sectionContainer">
          <code><FontAwesomeIcon icon="file-alt"/> Carousel / 200425</code>
          <div className="linksContainer">
            <a
              href="https://www.nngroup.com/articles/designing-effective-carousels/"
              rel="noopener noreferrer"
              target="_blank">
              <code>Nielsen Norman / Effective Carousels</code>
            </a>
            <ul>
              <li>A Carousel displays more than one piece of content in the same place.</li>
              <li>A Carousel indicates the presence of other content.</li>
              <li>A Carousel indicates the current content that is selected.</li>
              <li>Offers a space-saving solution for a series of content.</li>
              <li>However, it seems people frequently overlook them.</li>
              <li>Need to keep in mind that the user may not see all the items.</li>
              <li>Include 5 or fewer items, as any more will be taxing to swipe.</li>
            </ul>
          </div>
        </section>
        <section className="sectionContainer noPaddingBottom">
          <code className="sectionHeader"><FontAwesomeIcon icon="horse-head"/> Carousel</code>
        </section>
        <div className="carouselElement">
          <div className="carouselContent"></div>
          <div className="carouselNavigation"></div>
        </div>
      </>
    );
  }
}

export default SectionCarousel;
