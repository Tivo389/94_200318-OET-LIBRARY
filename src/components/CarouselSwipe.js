import React, { Component } from 'react';
import CarouselContentItem from './CarouselContentItem';

class CarouselSwipe extends Component {
  // STATES
  currentSlideInView = 0;
  xAxisCarouselElement = 0;
  xAxisTouchStart = 0;
  // xAxisCarouselStart = 0;
  // xCoordinateTouchEnd = 0;
  // carouselItemWidth = 0;
  // carouselItemPseudoElementWidth = 0;
  // carouselItemFullWidth = 0;
  // scrollSnapTriggered = false;

  // LIFECYCLE METHODS
  // componentDidMount() {
  //   const domCarouselContentItem = document.querySelector('.carouselContentItem');
  //   this.carouselItemWidth = domCarouselContentItem.getBoundingClientRect().width;
  //   this.carouselItemPseudoElementWidth = domCarouselContentItem.getBoundingClientRect().x;
  //   this.carouselItemFullWidth = this.carouselItemWidth + (this.carouselItemPseudoElementWidth * 2);
  // }

  // RENDER
  render() {
    return (
      <>
        <div
          className="carouselElement"
          onTouchStart={this.handleOnTouchStart}
          onTouchMove={this.handleOnTouchMove}
          onTouchEnd={this.handleOnTouchEnd}>
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
          </div>
        </div>
      </>
    );
  }

  // PRIMARY EVENT FUNCTIONS
  handleOnTouchStart = (e) => {
    this.currentSlideInView = this.getCurrentSlideInView();
    this.xAxisCarouselElement = this.getCarouselElementXAxis(e);
    this.xAxisTouchStart = this.getXAxis(e);
  };
  handleOnTouchMove = (e) => {
    // if (this.scrollSnapTriggered === false) {
    //   if (this.getXAxis(e) - this.xAxisTouchStart <= -132) {
    //     // console.log('Scroll Left');
    //     // 01: The scroll snap should activate, moving next item into position.
    //     this.carouselScrollSnap(e);
    //     // this.sideScroll(domCarouselContent,'left',300,320,10);
    //     // 02: Any subsequent touch movements should not affect the content.
    //     this.scrollSnapTriggered = true;
    //   } else if (this.getXAxis(e) - this.xAxisTouchStart >= 132) {
    //     // console.log('Scroll Right');
    //   } else {
    //     return;
    //   }
    // }
    // return;
  }
  handleOnTouchEnd = (e) => {
    // this.scrollSnapTriggered = false;
    // this.xCoordinateTouchEnd = this.getXAxis(e);
  };

  // PRIMARY FUNCTIONS
  getXAxis = (e) => {
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
  getCarouselElementXAxis = (e) => {
    const input = e.currentTarget.querySelector('.carouselContent').style.transform;
    const regex = /\d/;
    return parseInt(input.match(regex)[0]);
  };
  getCurrentSlideInView = () => {
    if (this.xAxisCarouselStart <= this.carouselItemFullWidth) {
      return 1;
    } else {
      return Math.ceil(this.xAxisCarouselStart / this.carouselItemFullWidth);
    }
  };

  // SECONDARY FUNCTIONS
  // carouselScrollSnap = (e) => {
  //   const domCarouselContent = e.currentTarget.querySelector('.carouselContent');
  //   if (this.currentSlideInView === 1) {
  //     console.log(111)
  //     domCarouselContent.scrollLeft = this.carouselItemFullWidth;
  //   } else {
  //     console.log(222)
  //     domCarouselContent.scrollLeft = (this.currentSlideInView + 1) * this.carouselItemFullWidth;
  //   }
  // };
  // sideScroll = (element, direction, speed, distance, step) => {
  //   let scrollAmount = element.scrollLeft;
  //   const slideTimer = setInterval( function() {
  //       if (direction === 'left') {
  //           element.scrollLeft += step;
  //       } else if (direction === 'right') {
  //           element.scrollLeft -= step;
  //       } else {
  //         console.log('ERROR');
  //       }
  //       scrollAmount += step;
  //       if(scrollAmount >= distance){
  //           window.clearInterval(slideTimer);
  //       }
  //   }, speed);
  // }
}

export default CarouselSwipe;
