import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class CallToAction extends Component {
  render() {
    return (
      <div className="sectionContainer flexAlignCenter">
        {/* STANDARD CTAS */}
        <div className="callToActionContainer">
          <a
            className="ctaTextStandardPrimary"
            href="./"
            onTouchStart={this.onTouchStart}
            onTouchEnd={this.onTouchEnd}
            onTouchCancel={this.onTouchCancel}>
            Learn More
          </a>
          <a
            className="ctaTextStandardSecondary"
            href="./"
            onTouchStart={this.onTouchStart}
            onTouchEnd={this.onTouchEnd}
            onTouchCancel={this.onTouchCancel}>
            Learn More
          </a>
        </div>
        <div className="callToActionContainer ctaLayoutVertical">
          <a
            className="ctaTextStandardPrimary"
            href="./"
            onTouchStart={this.onTouchStart}
            onTouchEnd={this.onTouchEnd}
            onTouchCancel={this.onTouchCancel}>
            Learn More
          </a>
          <a
            className="ctaTextStandardSecondary"
            href="./"
            onTouchStart={this.onTouchStart}
            onTouchEnd={this.onTouchEnd}
            onTouchCancel={this.onTouchCancel}>
            Learn More
          </a>
        </div>
        <hr/>
        {/* TEXT CTAS */}
        <div className="callToActionContainer">
          <a
            className="ctaTextOnlyPrimary"
            href="./"
            onTouchStart={this.onTouchStart}
            onTouchEnd={this.onTouchEnd}
            onTouchCancel={this.onTouchCancel}>
            Learn More
          </a>
          <a
            className="ctaTextOnlySecondary"
            href="./"
            onTouchStart={this.onTouchStart}
            onTouchEnd={this.onTouchEnd}
            onTouchCancel={this.onTouchCancel}>
            Learn More
          </a>
        </div>
        <div className="callToActionContainer ctaLayoutVertical">
          <a
            className="ctaTextOnlyPrimary"
            href="./"
            onTouchStart={this.onTouchStart}
            onTouchEnd={this.onTouchEnd}
            onTouchCancel={this.onTouchCancel}>
            Learn More
          </a>
          <a
            className="ctaTextOnlySecondary"
            href="./"
            onTouchStart={this.onTouchStart}
            onTouchEnd={this.onTouchEnd}
            onTouchCancel={this.onTouchCancel}>
            Learn More
          </a>
        </div>
        <hr/>
        {/* ICON & TEXT CTAS */}
        <div className="callToActionContainer">
          <a
            className="ctaIconPrimary"
            href="./"
            onTouchStart={this.onTouchStart}
            onTouchEnd={this.onTouchEnd}
            onTouchCancel={this.onTouchCancel}>
            <FontAwesomeIcon icon="newspaper" className="ctaIconIcon" width="100%"/>
            <span className="ctaIconText">News</span>
          </a>
          <a
            className="ctaIconPrimary"
            href="./"
            onTouchStart={this.onTouchStart}
            onTouchEnd={this.onTouchEnd}
            onTouchCancel={this.onTouchCancel}>
            <FontAwesomeIcon icon="video" className="ctaIconIcon" width="100%"/>
            <span className="ctaIconText">Livestreams</span>
          </a>
          <a
            className="ctaIconPrimary"
            href="./"
            onTouchStart={this.onTouchStart}
            onTouchEnd={this.onTouchEnd}
            onTouchCancel={this.onTouchCancel}>
            <FontAwesomeIcon icon="calendar-alt" className="ctaIconIcon" width="100%"/>
            <span className="ctaIconText">Events</span>
          </a>
          <a
            className="ctaIconPrimary"
            href="./"
            onTouchStart={this.onTouchStart}
            onTouchEnd={this.onTouchEnd}
            onTouchCancel={this.onTouchCancel}>
            <FontAwesomeIcon icon="play-circle" className="ctaIconIcon" width="100%"/>
            <span className="ctaIconText">Videos</span>
          </a>
          <a
            className="ctaIconPrimary"
            href="./"
            onTouchStart={this.onTouchStart}
            onTouchEnd={this.onTouchEnd}
            onTouchCancel={this.onTouchCancel}>
            <FontAwesomeIcon icon="comments" className="ctaIconIcon" width="100%"/>
            <span className="ctaIconText">Social</span>
          </a>
        </div>
      </div>
    );
  }
  onTouchStart = (e) => {
    e.currentTarget.classList.add('active');
  };
  onTouchEnd = (e) => {
    e.currentTarget.classList.remove('active');
  };
  onTouchCancel = (e) => {
    e.currentTarget.classList.remove('active');
  };
}

export default CallToAction;
