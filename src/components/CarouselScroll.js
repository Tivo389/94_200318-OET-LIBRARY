import React, { Component } from 'react';
import CarouselContentItem from './CarouselContentItem';

class CarouselScroll extends Component {
  // STATES
  carouselItemInView = 0;
  carouselItemFullWidth = 0;

  // LIFECYCLE METHODS
  componentDidMount() {
    const domCarouselContentItem = document.querySelector('.carouselContentItem');
    const carouselItemWidth = domCarouselContentItem.getBoundingClientRect().width;
    const carouselItemPseudoElementWidth = domCarouselContentItem.getBoundingClientRect().x;
    this.carouselItemFullWidth = carouselItemWidth + (carouselItemPseudoElementWidth * 2);
  }

  // RENDER
  render() {
    return (
      <>
        <div className="carouselScrollElement" onScroll={this.handleOnScroll}>
          <div className="carouselScrollContent">
            <CarouselContentItem
              key="1"
              character="bangalore"
              class="Professional Soldier"
              quote="Name the weapon – I'll still beat you."/>
            <CarouselContentItem
              key="2"
              character="bloodhound"
              class="Technological Tracker"
              quote="I am the hunter the Gods have sent."/>
            <CarouselContentItem
              key="3"
              character="caustic"
              class="Toxic Trapper"
              quote="I don't concern myself with the ambitions of insects."/>
            <CarouselContentItem
              key="4"
              character="crypto"
              class="Surveillance Expert"
              quote="It’s hard to be scared when you’re prepared."/>
            <CarouselContentItem
              key="5"
              character="gibraltar"
              class="Shielded Fortress"
              quote="Try to move me; it'll be fun."/>
            <CarouselContentItem
              key="6"
              character="lifeline"
              class="Combat Medic"
              quote="Never quit. That's how you win."/>
            <CarouselContentItem
              key="7"
              character="mirage"
              class="Holographic Trickster"
              quote="I don't take myself too seriously. I don't take myself anywhere. I need to get out more."/>
            <CarouselContentItem
              key="8"
              character="octane"
              class="The Adrenaline Junkie"
              quote="Whoa . . . what a rush!"/>
            <CarouselContentItem
              key="9"
              character="pathfinder"
              class="Forward Scout"
              quote="Losing isn't fun. That's why I don't do it."/>
            <CarouselContentItem
              key="10"
              character="revenant"
              class="Synthetic Nightmare"
              quote="I’ve seen the other side, Skinbag. There is nothing. You are nothing."/>
            <CarouselContentItem
              key="11"
              character="wattson"
              class="Static Defender"
              quote="Power is everything. You only think you have it."/>
            <CarouselContentItem
              key="12"
              character="wraith"
              class="Interdimensional Skirmisher"
              quote="There’s a thin line between life and death. You’ll find me there."/>
          </div>
          <div className="carouselProgressIndicatorContainer">
            <div className="carouselProgressIndicator active" key="1"></div>
            <div className="carouselProgressIndicator" key="2"></div>
            <div className="carouselProgressIndicator" key="3"></div>
            <div className="carouselProgressIndicator" key="4"></div>
            <div className="carouselProgressIndicator" key="5"></div>
            <div className="carouselProgressIndicator" key="6"></div>
            <div className="carouselProgressIndicator" key="7"></div>
            <div className="carouselProgressIndicator" key="8"></div>
            <div className="carouselProgressIndicator" key="9"></div>
            <div className="carouselProgressIndicator" key="10"></div>
            <div className="carouselProgressIndicator" key="11"></div>
            <div className="carouselProgressIndicator" key="12"></div>
          </div>
        </div>
      </>
    );
  }

  // PRIMARY EVENT FUNCTIONS
  handleOnScroll = (e) => {
    // Get current scrollLeft value
    this.getCarouselScrollLeftValue(e);
    // Get me the index of the current slide that is in view
    this.carouselItemInView = this.getCurrentSlideInView(e);
    // Update the active indicator
    this.updateActiveIndicator(e);
  };

  // GET FUNCTIONS
  getCarouselScrollLeftValue = (e) => {
    return e.currentTarget.scrollLeft;
  };
  getCurrentSlideInView = (e) => {
    return Math.round(Math.abs(this.getCarouselScrollLeftValue(e)) / this.carouselItemFullWidth);
  };

  // UPDATE & ACTIVATE FUNCTIONS
  updateActiveIndicator = (e) => {
    e.currentTarget.querySelectorAll('.carouselProgressIndicator').forEach((indicator, i) => {
      if (parseInt(i) === this.carouselItemInView) {
        indicator.classList.add('active');
      } else {
        indicator.classList.remove('active');
      };
    });
  };

}

export default CarouselScroll;