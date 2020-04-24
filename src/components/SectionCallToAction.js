import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class CallToAction extends Component {
  render() {
    return (
      <>
      <section className="sectionContainer">
        <code><FontAwesomeIcon icon="file-alt"/> CALL TO ACTION / 200325</code>
        <div className="linksContainer">
          <a
            href="#standardCTA"
            rel="noopener noreferrer">
            <code>Standard CTA</code>
          </a>
          <a
            href="#textCTA"
            rel="noopener noreferrer">
            <code>Text CTA</code>
          </a>
          <a
            href="#iconCTA"
            rel="noopener noreferrer">
            <code>Icon CTA</code>
          </a>
        </div>
      </section>
      {/* STANDARD CTAS */}
      <section className="sectionContainer">
        <code className="sectionHeader"><FontAwesomeIcon icon="map-signs"/> Standard CTA</code>
        <div id="standardCTA" className="callToActionContainer">
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
      </section>
      {/* TEXT CTAS */}
      <section className="sectionContainer">
        <code className="sectionHeader"><FontAwesomeIcon icon="map-signs"/> Text CTA</code>
        <div id="textCTA" className="callToActionContainer">
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
      </section>
      {/* ICON CTAS */}
      <section className="sectionContainer">
        <code className="sectionHeader"><FontAwesomeIcon icon="map-signs"/> Icon CTA</code>
        <div id="iconCTA" className="ctaIconContainer">
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
      </section>
      </>
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
