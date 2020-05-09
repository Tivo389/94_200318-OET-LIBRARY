import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CarouselNavigationItem from "./CarouselNavigationItem"

class SectionCarousel extends Component {
  render() {
    return (
      <>
        <section className="sectionContainer">
          <code><FontAwesomeIcon icon="file-alt"/> Carousel / Scrollable &amp; Swipe / 200425</code>
        </section>
        <section className="sectionContainer noPaddingBottom">
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
