import React, { Component } from 'react';
import CarouselContentItem from './CarouselContentItem';
import { ReactComponent as PaddleCaret } from '../images/caret-button-left.svg';


class CarouselPaddleBottomUI extends Component {
  // STATES
  translateXAxis = 0;
  touchStartXAxis = 0;
  carouselElementWidth = 0;
  carouselContentItemCount = 0;
  carouselItemInView = 0;
  carouselItemFullWidth = 0;
  carouselItemWidth = 0;
  carouselItemPseudoElementWidth = 0;
  xAxisChange = 0;
  yAxisChange = 0;
  activatePanYIsActive = false;
  domCarouselContent;
  domCarouselContentItem;
  domPaddleLeft;
  domPaddleRight;

  // LIFECYCLE METHODS
  componentDidMount() {
    this.domCarouselContent = document.querySelector('.carouselPaddleContent');
    this.domCarouselContentItem = document.querySelector('.carouselContentItem');
    this.domPaddleLeft = document.querySelector('.paddleLeft');
    this.domPaddleRight = document.querySelector('.paddleRight');
    this.carouselContentItemCount = this.domCarouselContent.childElementCount - 1; // Index-adj
    this.carouselItemWidth = this.domCarouselContentItem.getBoundingClientRect().width;
    this.carouselItemPseudoElementWidth = this.domCarouselContentItem.getBoundingClientRect().x;
    this.carouselItemFullWidth = this.carouselItemWidth + (this.carouselItemPseudoElementWidth * 2);
    this.carouselElementWidth = this.domCarouselContent.scrollWidth - this.carouselItemFullWidth;
  }

  // RENDER
  render() {
    return (
      <>
        <div className="carouselPaddleBottomUIElement">
          <div className="carouselPaddleContent" style={{transform: 'translateX(0)'}}>
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
          <div className="carouselPaddlePaddleContainer">
            <PaddleCaret
              className="paddleLeft"
              onMouseDown={this.paddleOnMouseDown}
              onMouseUp={this.paddleOnMouseUp}/>
            <PaddleCaret
              className="paddleRight"
              onMouseDown={this.paddleOnMouseDown}
              onMouseUp={this.paddleOnMouseUp}/>
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
  paddleOnMouseDown = (e) => {
    e.currentTarget.classList.add('active');
    // Get me the Carousel's translateX value from the inline style
    this.translateXAxis = this.getCarouselTranslateXAxis();
    // Get me the index of the current slide that is in view
    this.carouselItemInView = this.getCurrentSlideInView(e);
    // Activate the scroll snap to the next/previous slide
    this.activateScrollSnap(e);
  };
  paddleOnMouseUp = (e) => {
    e.currentTarget.classList.remove('active');
    // Get me the index of the current slide that is in view
    this.carouselItemInView = this.getCurrentSlideInView(e);
    // Update the active indicator
    this.updateActiveIndicator();
    // Update the paddle status if necessary
    // this.updatePaddleStatus(e); // Disabled to cater for loop function
  };

  // GET FUNCTIONS
  getCurrentSlideInView = (e) => {
    return Math.round((this.getCarouselTranslateXAxis(e) * -1) / this.carouselItemFullWidth);
  };
  getCarouselTranslateXAxis = () => {
    const input = document.querySelector('.carouselPaddleContent').style.transform;
    const regex = /-?\d+/;
    return parseInt(input.match(regex)[0]);
  };

  // UPDATE & ACTIVATE & DEACTIVATE FUNCTIONS
  activateScrollSnap = (e) => {
    const onFirstCarouselItem = this.carouselItemInView === 0;
    const onLastCarouselItem = this.carouselItemInView === this.carouselContentItemCount;
    const userClickedLeft = e.currentTarget.classList.contains('paddleLeft');
    const userClickedRight = e.currentTarget.classList.contains('paddleRight');
    let scrollSnapIsActive = false;
    let translateXValue;
    if (!scrollSnapIsActive) {
      scrollSnapIsActive = true;
      if (userClickedLeft && onFirstCarouselItem) {
        translateXValue = (this.carouselItemFullWidth * this.carouselContentItemCount) * -1;
      } else if (userClickedRight && onLastCarouselItem) {
        translateXValue = 0;
      } else if (userClickedLeft) {
        translateXValue = ((this.carouselItemInView - 1) * this.carouselItemFullWidth) * -1;
      } else if (userClickedRight) {
        translateXValue = ((this.carouselItemInView + 1) * this.carouselItemFullWidth) * -1;
      }
    }
    this.updateCarouselTranslateXAxis(translateXValue);
    scrollSnapIsActive = false;
  };
  updateActiveIndicator = () => {
    const domIndicators = document.querySelectorAll('.carouselProgressIndicator');
    domIndicators.forEach((indicator, i) => {
      if (parseInt(i) === this.carouselItemInView) {
        indicator.classList.add('active');
      } else {
        indicator.classList.remove('active');
      };
    });
  };
  updateCarouselTranslateXAxis = (translateXValue) => {
    this.domCarouselContent.style.transform = `translateX(${translateXValue}px)`
  };
  // updatePaddleStatus = (e) => {
  //   const onFirstCarouselItem = this.carouselItemInView === 0;
  //   const onLastCarouselItem = this.carouselItemInView === this.carouselContentItemCount;
  //   if (onFirstCarouselItem) {
  //     this.domPaddleLeft.classList.add('inactive');
  //   } else if (onLastCarouselItem) {
  //     this.domPaddleRight.classList.add('inactive');
  //   } else if (!onFirstCarouselItem || !onLastCarouselItem) {
  //     this.domPaddleRight.classList.remove('inactive');
  //     this.domPaddleLeft.classList.remove('inactive');
  //   }
  // };
}

export default CarouselPaddleBottomUI;