import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CarouselNavigationItem from "./CarouselNavigationItem"

class SectionCarousel extends Component {
  render() {
    return (
      <>
        <section className="sectionContainer hidden">
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
              <li>Carousel's are commonly used in the Landing Hero Section to cater for different promotions.</li>
              <li>Blizzard had 6 carousels on auto scroll.</li>
              <li>Blizzard also used a carousel to show its most recent dozen games.</li>
              <li>Nintendo used 4 for the landing hero on auto scroll</li>
              <li>Nintento used had 3 games per carousel slide, so 12 in total.</li>
              <li>Logitech had 7 but the colour was not the best as the indicators were difficult to see.</li>
              <li>Common aspects...</li>
                <ul>
                  <li>Minimal text, usualy just the product name and tagline of less than 35 characters.</li>
                  <li>1-2 CTAs</li>
                  <li>1-3 Images</li>
                </ul>
              <li>I got the impression that Carousel's are difficult to use as a generic component as their layout is heavily influenced by the content and space. It's not an effective component to display content and serves better to direct the user. Kind of like the content of a book or a menu.</li>
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
              <li>Considered 100vh but this doesn't account for OS bar and Browser Bars.</li>
              <li>In addition, the lack of a crop is more confusing.</li>
              <li>For a content-oriented scenario, the objective of mobile and desktop should be considered separately, due to the difference in available space.</li>
              <li>Considered a 'search' oriented UI which involved scroll-tap.</li>
              <ul>
                <li>This can be better in scenarios where the user is 'searching'.</li>
                <li>The user doesn't need to scroll the unnecessary in order to reach their destination.</li>
              </ul>
              <li>However a 'scan' oriented UI reduces interaction to just scroll.</li>
              <ul>
                <li>This can be better for scenarios where the user is 'scanning'.</li>
                <li>The user will need to scroll more, but when the mind-set is closer to a state of 'window-shopping' this approach would be more appropriate.</li>
              </ul>
              <li>Good opportunity, will make UI Spreadsheet</li>
            </ul>
          </div>
        </section>
        <section className="sectionContainer noPaddingBottom hidden">
          <code className="sectionHeader"><FontAwesomeIcon icon="horse-head"/> Carousel</code>
        </section>
        <div className="carouselElement">
          <div className="carouselContent">
            <div className="carouselContentItem">
              <h6>Alpha</h6>
            </div>
            <div className="carouselContentItem">
              <h6>Beta</h6>
            </div>
            <div className="carouselContentItem">
              <h6>Charlie</h6>
            </div>
            <div className="carouselContentItem">
              <h6>Delta</h6>
            </div>
            <div className="carouselContentItem">
              <h6>Echo</h6>
            </div>
            <div className="carouselContentItem">
              <h6>Foxtrot</h6>
            </div>
            <div className="carouselContentItem">
              <h6>Golf</h6>
            </div>
            <div className="carouselContentItem">
              <h6>Hotel</h6>
            </div>
            <div className="carouselContentItem">
              <h6>India</h6>
            </div>
            <div className="carouselContentItem">
              <h6>Juliett</h6>
            </div>
            <div className="carouselContentItem">
              <h6>Kilo</h6>
            </div>
            <div className="carouselContentItem">
              <h6>Lima</h6>
            </div>
          </div>
          <div className="carouselNavigation">
            <CarouselNavigationItem key="1" character="bangalore"/>
            <CarouselNavigationItem key="2" character="bloodhound"/>
            <CarouselNavigationItem key="3" character="caustic"/>
            <CarouselNavigationItem key="4" character="crypto"/>
            <CarouselNavigationItem key="5" character="gibraltar"/>
            <CarouselNavigationItem key="6" character="lifeline"/>
            <CarouselNavigationItem key="7" character="mirage"/>
            <CarouselNavigationItem key="8" character="octane"/>
            <CarouselNavigationItem key="9" character="pathfinder"/>
            <CarouselNavigationItem key="10" character="revenant"/>
            <CarouselNavigationItem key="11" character="wattson"/>
            <CarouselNavigationItem key="12" character="wraith"/>
          </div>
        </div>
      </>
    );
  }
}

export default SectionCarousel;
