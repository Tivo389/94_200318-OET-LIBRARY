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
            <a
              href="https://www.nngroup.com/articles/mobile-carousels/"
              rel="noopener noreferrer"
              target="_blank">
              <code>Nielsen Norman / Mobile Carousels</code>
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
            <hr></hr>
            <ul>
              <li>320 x 568 iPhone SE</li>
                <ul>
                  <li>20px iOS Bar</li>
                  <li>50px Safari URL Bar</li>
                  <li>44px Safari Control Bar</li>
                </ul>
              <li>320 x 454 / Viewport Area on load (Safari) / 1.41875</li>
              <li>320 x 528 / Viewport Area on scroll down / 1.65</li>
              <li>(1.41875 + 1.65) / 2 = 1.534375</li>
              <li>After some calculation 1.20 seems to be good as a ratio</li>
              <ul>
                <li>1.65 - 1.41875 = 0.23125</li>
                <li>1.41875 - 0.23125 = 1.1875</li>
                <li>Rounding up is 1.20</li>
              </ul>
            </ul>
          </div>
        </section>
        <section className="sectionContainer noPaddingBottom">
          <code className="sectionHeader"><FontAwesomeIcon icon="horse-head"/> Carousel</code>
        </section>
        <div className="carouselElement">
          <div className="carouselContent">
            <h6>Hello World</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam temporibus ratione itaque iure sint? Incidunt earum veniam repudiandae. Expedita omnis laudantium eum dolores! Reiciendis officiis quia excepturi. Voluptates, fuga at.</p>
          </div>
          <div className="carouselNavigation">
            <div className="carouselNavgationItem"></div>
            <div className="carouselNavgationItem"></div>
            <div className="carouselNavgationItem"></div>
            <div className="carouselNavgationItem"></div>
            <div className="carouselNavgationItem"></div>
            <div className="carouselNavgationItem"></div>
            <div className="carouselNavgationItem"></div>
            <div className="carouselNavgationItem"></div>
            <div className="carouselNavgationItem"></div>
            <div className="carouselNavgationItem"></div>
          </div>
        </div>
      </>
    );
  }
}

export default SectionCarousel;
