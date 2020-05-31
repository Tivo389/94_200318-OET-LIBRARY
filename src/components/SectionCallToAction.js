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
            href="#graphicCTA"
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
      </section>
      {/* TEXT CTAS */}
      <section className="sectionContainer">
        <code className="sectionHeader"><FontAwesomeIcon icon="map-signs"/> Text CTA</code>
        <div id="textCTA" className="callToActionContainer">
          <a className="ctaTextOnlyPrimary" href="./">
            Learn More
          </a>
          <a className="ctaTextOnlySecondary" href="./">
            Learn More
          </a>
        </div>
      </section>
      {/* GRAPHIC CTAS */}
      <section className="sectionContainer">
        <code className="sectionHeader"><FontAwesomeIcon icon="map-signs"/> Graphic CTA</code>
        <div id="graphicCTA" className="callToActionIconContainer">
          <a className="ctaGraphicPrimary" href="./">
            <FontAwesomeIcon icon="newspaper" width="100%"/>
            <span className="ctaGraphicText">News</span>
          </a>
          <a className="ctaGraphicPrimary" href="./">
            <FontAwesomeIcon icon="video" width="100%"/>
            <span className="ctaGraphicText">Livestream</span>
          </a>
          <a className="ctaGraphicPrimary" href="./">
            <FontAwesomeIcon icon="calendar-alt" width="100%"/>
            <span className="ctaGraphicText">Event</span>
          </a>
          <a className="ctaGraphicPrimary" href="./">
            <FontAwesomeIcon icon="play-circle" width="100%"/>
            <span className="ctaGraphicText">Video</span>
          </a>
          <a className="ctaGraphicPrimary" href="./">
            <FontAwesomeIcon icon="comments" width="100%"/>
            <span className="ctaGraphicText">Social</span>
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
