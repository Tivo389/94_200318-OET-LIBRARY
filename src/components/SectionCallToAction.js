import React, { Component } from 'react';

class CallToAction extends Component {
  render() {
    return (
      <div className="sectionContainer flexAlignCenter">
        {/* STANDARD CTAS */}
        <div className="callToActionContainer">
          <a
            className="ctaStandardPrimary"
            href="./"
            onTouchStart={this.onTouchStart}
            onTouchEnd={this.onTouchEnd}
            onTouchCancel={this.onTouchCancel}>
            Learn More
          </a>
          <a
            className="ctaStandardSecondary"
            href="./"
            onTouchStart={this.onTouchStart}
            onTouchEnd={this.onTouchEnd}
            onTouchCancel={this.onTouchCancel}>
            Learn More
          </a>
        </div>
        <div className="callToActionContainer ctaLayoutVertical">
          <a
            className="ctaStandardPrimary"
            href="./"
            onTouchStart={this.onTouchStart}
            onTouchEnd={this.onTouchEnd}
            onTouchCancel={this.onTouchCancel}>
            Learn More
          </a>
          <a
            className="ctaStandardSecondary"
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
            className="ctaTextPrimary"
            href="./"
            onTouchStart={this.onTouchStart}
            onTouchEnd={this.onTouchEnd}
            onTouchCancel={this.onTouchCancel}>
            Learn More
          </a>
          <a
            className="ctaTextSecondary"
            href="./"
            onTouchStart={this.onTouchStart}
            onTouchEnd={this.onTouchEnd}
            onTouchCancel={this.onTouchCancel}>
            Learn More
          </a>
        </div>
        <div className="callToActionContainer ctaLayoutVertical">
          <a
            className="ctaTextPrimary"
            href="./"
            onTouchStart={this.onTouchStart}
            onTouchEnd={this.onTouchEnd}
            onTouchCancel={this.onTouchCancel}>
            Learn More
          </a>
          <a
            className="ctaTextSecondary"
            href="./"
            onTouchStart={this.onTouchStart}
            onTouchEnd={this.onTouchEnd}
            onTouchCancel={this.onTouchCancel}>
            Learn More
          </a>
        </div>
        <hr/>
        {/* ICON & TEXT CTAS */}
        {/* 999 CONTINUE HERE */}
        <div className="callToActionContainer">
          <a
            className="ctaTextPrimary"
            href="./"
            onTouchStart={this.onTouchStart}
            onTouchEnd={this.onTouchEnd}
            onTouchCancel={this.onTouchCancel}>
            Learn More
          </a>
          <a
            className="ctaTextSecondary"
            href="./"
            onTouchStart={this.onTouchStart}
            onTouchEnd={this.onTouchEnd}
            onTouchCancel={this.onTouchCancel}>
            Learn More
          </a>
        </div>
        <div className="callToActionContainer ctaLayoutVertical">
          <a
            className="ctaTextPrimary"
            href="./"
            onTouchStart={this.onTouchStart}
            onTouchEnd={this.onTouchEnd}
            onTouchCancel={this.onTouchCancel}>
            Learn More
          </a>
          <a
            className="ctaTextSecondary"
            href="./"
            onTouchStart={this.onTouchStart}
            onTouchEnd={this.onTouchEnd}
            onTouchCancel={this.onTouchCancel}>
            Learn More
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
