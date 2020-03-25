import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SectionTypographyEnglish from './SectionTypographyEnglish';
import SectionTypographySpanish from './SectionTypographySpanish';
import SectionTypographyFrench from './SectionTypographyFrench';
import SectionTypographyRussian from './SectionTypographyRussian';
import SectionTypographyChinese from './SectionTypographyChinese';
import SectionTypographyJapanese from './SectionTypographyJapanese';
import SectionTypographyArabic from './SectionTypographyArabic';

class SectionTypography extends Component {
  render() {
    return (
      <div className="sectionContainer">
        <code><FontAwesomeIcon icon="file-alt"/>TYPOGRAPHY / 200322</code>
        <div className="linksContainer">
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements"
            target="_blank"
            rel="noopener noreferrer">
            <code>Heading<FontAwesomeIcon icon="external-link-alt" className="externalLinkIcon"/></code>
          </a>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p"
            target="_blank"
            rel="noopener noreferrer">
            <code>Paragraph<FontAwesomeIcon icon="external-link-alt" className="externalLinkIcon"/></code>
          </a>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS/line-break"
            target="_blank"
            rel="noopener noreferrer">
            <code>CSS/line-break<FontAwesomeIcon icon="external-link-alt" className="externalLinkIcon"/></code>
          </a>
        </div>
        <SectionTypographyEnglish/>
        <SectionTypographySpanish/>
        <SectionTypographyFrench/>
        <SectionTypographyRussian/>
        <SectionTypographyChinese/>
        <SectionTypographyJapanese/>
        <SectionTypographyArabic/>
      </div>
    );
  }
}

export default SectionTypography;
