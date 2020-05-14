import React, { Component } from 'react';
import CarouselContentItem from './CarouselContentItem';
import { throttle } from './Helper';


class CarouselSwipe extends Component {
  // STATES
  translateXAxis = 0;
  touchStartXAxis = 0;
  carouselElementWidth = 0;
  carouselItemInView = 0;
  carouselItemFullWidth = 0;
  carouselItemWidth = 0;
  carouselItemPseudoElementWidth = 0;
  xAxisChange = 0;
  domCarouselContent;
  domCarouselContentItem;

  // LIFECYCLE METHODS
  componentDidMount() {
    this.domCarouselContent = document.querySelector('.carouselContent');
    this.domCarouselContentItem = document.querySelector('.carouselContentItem');
    this.carouselItemWidth = this.domCarouselContentItem.getBoundingClientRect().width;
    this.carouselItemPseudoElementWidth = this.domCarouselContentItem.getBoundingClientRect().x;
    this.carouselItemFullWidth = this.carouselItemWidth + (this.carouselItemPseudoElementWidth * 2);
    this.carouselElementWidth = this.domCarouselContent.scrollWidth - this.carouselItemFullWidth;
  }

  // RENDER
  render() {
    return (
      <>
        <div
          className="carouselElement"
          onTouchStart={this.handleOnTouchStart}
          onTouchMove={throttle(this.handleOnTouchMove, 8)}>
          <div className="carouselContent" style={{transform: 'translateX(0)'}}>
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
  handleOnTouchStart = (e) => {
    // Get me the XAxis of where the touch began
    this.touchStartXAxis = this.getTouchXAxis(e);
    // Get me the Carousel's translateX value from the inline style
    this.translateXAxis = this.getCarouselTranslateXAxis(e);
  };
  handleOnTouchMove = (e) => {
    // Get me the value of change from the initial xAxis to the current xAxis
    this.getXAxisChange(e);
    // Apply the value to the Carousel's translateX style
    this.getTranslateX(e);
    // Update the active indicator
    this.updateActiveIndicator(e);
    // Get me the index of the current slide that is in view
    this.carouselItemInView = this.getCurrentSlideInView(e);
    // If the user has scrolled a certain amount, activate scroll snap
    this.activateScrollSnap(e);
  }

  // GET FUNCTIONS
  getCurrentSlideInView = (e) => {
    return Math.round((this.getCarouselTranslateXAxis(e) * -1) / this.carouselItemFullWidth);
  };
  getCarouselTranslateXAxis = (e) => {
    const input = e.currentTarget.querySelector('.carouselContent').style.transform;
    const regex = /-?\d+/;
    return parseInt(input.match(regex)[0]);
  };
  getTranslateX = (e) => {
    let translateXValue = this.translateXAxis + this.xAxisChange;
    if (translateXValue <= this.carouselElementWidth * -1) {
      // Avoid going past last carousel element
      translateXValue = this.carouselElementWidth * -1;
    } else if (translateXValue > 0) {
      // Avoid going before first carousel element
      translateXValue = 0;
    };
    this.updateCarouselTranslateXAxis(translateXValue);
  };
  getTouchXAxis = (e) => {
    if (e.touches && e.touches.length > 1) {
      return;
    } else if (window.PointerEvent) {
      if (e.targetTouches) {
        return Math.round(e.changedTouches[0].clientX);
      } else {
        return Math.round(e.clientX);
      }
    } else {
      return Math.round(e.clientX);
    }
  };
  getXAxisChange = (e) => {
    this.xAxisChange = this.getTouchXAxis(e) - this.touchStartXAxis;
  };

  // UPDATE & ACTIVATE FUNCTIONS
  updateCarouselTranslateXAxis = (translateXValue) => {
    this.domCarouselContent.style.transform = `translateX(${translateXValue}px)`
  };
  updateActiveIndicator = (e) => {
    const domIndicators = e.currentTarget.querySelectorAll('.carouselProgressIndicator')
    domIndicators.forEach((indicator, i) => {
      if (parseInt(i) === this.carouselItemInView) {
        indicator.classList.add('active');
      } else {
        indicator.classList.remove('active');
      };
    });
  };
  activateScrollSnap = (e) => {
    const triggerValue = 44;
    const triggerIsInitiated = Math.abs(this.xAxisChange) >= triggerValue;
    const notFirstCarouselElement = this.carouselItemInView !== 0;
    let scrollSnapIsActive = false;
    if (triggerIsInitiated && !scrollSnapIsActive && notFirstCarouselElement) {
      scrollSnapIsActive = true;
      let translateXValue = (this.carouselItemInView * this.carouselItemFullWidth) * -1;
      this.domCarouselContent.classList.add('scrollSnapActive');
      // 999 Iget the impression it looks gltich because we're tryng to go 0 > 44 > 0 > 320
      // 999 Also it might be worth separating this into SCROLL ONLY
      // 999 Different comparison sounds goood.....
      this.updateCarouselTranslateXAxis(translateXValue);
      setTimeout(() => this.domCarouselContent.classList.remove('scrollSnapActive'), 450);
    }
    scrollSnapIsActive = false;
  };



}

export default CarouselSwipe;
