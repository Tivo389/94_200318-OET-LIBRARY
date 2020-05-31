import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ReactComponent as IconPlaystation } from '../images/icon-playstation.svg';
import { ReactComponent as IconSwitch } from '../images/icon-switch.svg';
import { ReactComponent as IconXbox } from '../images/icon-xbox.svg';

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
            href="#brandCTA"
            rel="noopener noreferrer">
            <code>Icon CTA</code>
          </a>
          <a
            href="#textCTA"
            rel="noopener noreferrer">
            <code>Text CTA</code>
          </a>
          <a
            href="#graphicCTA"
            rel="noopener noreferrer">
            <code>Graphic CTA</code>
          </a>
        </div>
        <ul>
          <li>From a modular perspective assigning margins per component was better. / 200530</li>
          <ul>
            <li>I got the impression using CSS selectors lead to a more complicated stylesheet.</li>
          </ul>
          <li><span role='img' aria-label='thinking'>🤔</span> Hmmm, initially the CTA with a leading-icon was called an "Icon CTA". However, I noticed this could lead to potential issues when locales are considered. Hence, it has been re-named "Brand CTAs" to communicate that it is a CTA specifically for Brands and not any icon. A non-brand CTA (e.g. Gear for Settings, Avatar for Account) should use the Graphic CTA / 200530
          </li>
          <ul>
            <li>For example, most brands tend to use the same name globally. Therefore, character-length is likely to remain relatively consistent across different locales.</li>
            <li>On the other hand, "Get for Free" (12 characters) in French (based on Google Translate) is "Obtenir gratuitement"  (20 characters), a 67% increase in characters.</li>
            <li>The issue with an increased character length; particularly for CTAs with a stroke or fill; is line-count. If the increase in character length requires the text to be displayed in 2-lines, this leads to some CTAs having more emphasis when they are equal in priority.</li>
          </ul>
          <li>On a different note, some particularly long brand names I came across were...</li>
          <ul>
            <li>National Geographic / 19 characters</li>
            <li>Standard Chartered / 18 characters</li>
            <li>Johnson &amp; Johnson / 17 characters</li>
            <li>Mitsubishi Motors / 17 characters</li>
            <li>American Airlines / 17 characters</li>
          </ul>
        </ul>
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
            Buy Now
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
            Buy Now
          </a>
          <a className="ctaTextOnlySecondary" href="./">
            Learn More
          </a>
        </div>
      </section>
      {/* BRAND CTAS */}
      <section className="sectionContainer">
        <code className="sectionHeader"><FontAwesomeIcon icon="map-signs"/> Brand CTA</code>
        <div id="brandCTA" className="callToActionContainerRailed">
          <a
            className="ctaStandardPrimary ctaWithBrandIcon"
            href="./"
            onTouchStart={this.onTouchStart}
            onTouchEnd={this.onTouchEnd}
            onTouchCancel={this.onTouchCancel}>
            <IconPlaystation className="ctaBrandIcon" />
            PlayStation
          </a>
          <a
            className="ctaStandardPrimary ctaWithBrandIcon"
            href="./"
            onTouchStart={this.onTouchStart}
            onTouchEnd={this.onTouchEnd}
            onTouchCancel={this.onTouchCancel}>
            <IconSwitch className="ctaBrandIcon" />
            Switch
          </a>
          <a
            className="ctaStandardPrimary ctaWithBrandIcon"
            href="./"
            onTouchStart={this.onTouchStart}
            onTouchEnd={this.onTouchEnd}
            onTouchCancel={this.onTouchCancel}>
            <IconXbox className="ctaBrandIcon" />
            Xbox
          </a>
        </div>
      </section>
      {/* GRAPHIC CTAS */}
      <section className="sectionContainer">
        <code className="sectionHeader"><FontAwesomeIcon icon="map-signs"/> Graphic CTA</code>
        <div id="graphicCTA" className="callToActionContainerRailed">
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
