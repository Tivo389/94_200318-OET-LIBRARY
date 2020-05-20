import React, { Component } from 'react';
import CarouselContentItem from './CarouselContentItem';
import { throttle } from './Helper';
import { ReactComponent as PaddleCaret } from '../images/caret-left.svg';


class CarouselPaddle extends Component {
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

  // LIFECYCLE METHODS
  componentDidMount() {
    this.domCarouselContent = document.querySelector('.carouselPaddleContent');
    this.domCarouselContentItem = document.querySelector('.carouselContentItem');
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
        <div
          className="carouselPaddleElement"
          onTouchStart={this.handleOnTouchStart}
          onTouchMove={throttle(this.handleOnTouchMove, 8)}
          onTouchEnd={this.handleOnTouchEnd}>
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
            <PaddleCaret className="paddleLeft"/>
            <PaddleCaret className="paddleRight"/>
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
    // this.touchStartXAxis = this.getTouchXAxis(e);
    // Get me the YAxis of where the touch began
    // this.touchStartYAxis = this.getTouchYAxis(e);
    // Get me the Carousel's translateX value from the inline style
    // this.translateXAxis = this.getCarouselTranslateXAxis(e);
  };
  handleOnTouchMove = (e) => {
    // Get me the value of change from the initial xAxis to the current xAxis
    // this.getXAxisChange(e);
    // Get me the value of change from the initial yAxis to the current yAxis
    // this.getYAxisChange(e);
    // If the user has scrolled a certain x-value, activate scroll snap
    // this.activateScro1llSnap();
    // If the user has scrolled a certain y-value, activate bodyOverflow
    // this.activateBodyOverflow(); // Deactivate to experience sans-angle-detection
  }
  handleOnTouchEnd = (e) => {
    // Get me the index of the current slide that is in view
    // this.carouselItemInView = this.getCurrentSlideInView(e);
    // Update the active indicator
    // this.updateActiveIndicator(e);
    // Deactivate the bodyOverflow
    // this.deactivateBodyOverflow(); // Deactivate to experience sans-angle-detection
  };



  // GET FUNCTIONS
  getCurrentSlideInView = (e) => {
    return Math.round((this.getCarouselTranslateXAxis(e) * -1) / this.carouselItemFullWidth);
  };
  getCarouselTranslateXAxis = (e) => {
    const input = e.currentTarget.querySelector('.carouselPaddleContent').style.transform;
    const regex = /-?\d+/;
    return parseInt(input.match(regex)[0]);
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
  getTouchYAxis = (e) => {
    if (e.touches && e.touches.length > 1) {
      return;
    } else if (window.PointerEvent) {
      if (e.targetTouches) {
        return Math.round(e.changedTouches[0].clientY);
      } else {
        return Math.round(e.clientY);
      }
    } else {
      return Math.round(e.clientY);
    }
  };
  getXAxisChange = (e) => {
    this.xAxisChange = this.getTouchXAxis(e) - this.touchStartXAxis;
  };
  getYAxisChange = (e) => {
    this.yAxisChange = this.getTouchYAxis(e) - this.touchStartYAxis;
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
  activateScrollSnap = () => {
    const triggerValue = 44;
    const triggerIsInitiated = Math.abs(this.xAxisChange) >= triggerValue;
    const onFirstCarouselItem = this.carouselItemInView === 0;
    const onLastCarouselItem = this.carouselItemInView === this.carouselContentItemCount;
    const swipeLeft = this.xAxisChange < 0;
    const swipeRight = this.xAxisChange > 0;
    let scrollSnapIsActive = false;
    let translateXValue;
    if (!scrollSnapIsActive && triggerIsInitiated) {
      scrollSnapIsActive = true;
      if ((onLastCarouselItem && swipeLeft) || (onFirstCarouselItem && swipeRight)) {
        return;
      } if (swipeLeft) {
        translateXValue = ((this.carouselItemInView + 1) * this.carouselItemFullWidth) * -1;
      } if (swipeRight) {
        translateXValue = ((this.carouselItemInView - 1) * this.carouselItemFullWidth) * -1;
      }
    }
    this.updateCarouselTranslateXAxis(translateXValue);
    scrollSnapIsActive = false;
  };
  activateBodyOverflow = () => {
    const radian = Math.atan2(Math.abs(this.xAxisChange), Math.abs(this.yAxisChange));
    const angle = Math.round(radian * (180 / Math.PI));
    const triggerAngle = 45;
    const triggerAngleIsInitiated = angle >= triggerAngle;
    if (triggerAngleIsInitiated) {
      document.querySelector('body').style = 'overflow: hidden';
    }
  };
  deactivateBodyOverflow = () => {
    document.querySelector('body').style = 'overflow: visible';
  }
}

export default CarouselPaddle;