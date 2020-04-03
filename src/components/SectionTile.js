import React, { Component } from 'react';
import TileText from './TileText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class SectionTile extends Component {
  render() {
    return (
      <div className="sectionContainer">
        <code><FontAwesomeIcon icon="file-alt"/> TILES / 200403</code>
        <div className="linksContainer">
          <a
            href="#headerAndBody"
            rel="noopener noreferrer">
            <code>Header &amp; Body</code>
          </a>
          <a
            href="#imageAndHeaderVertical"
            rel="noopener noreferrer">
            <code>Image &amp; Header / Vertical</code>
          </a>
          <a
            href="#imageAndHeaderHorizontal"
            rel="noopener noreferrer">
            <code>Image &amp; Header / Horizontal</code>
          </a>
        </div>



        {/* Header & Body */}
        <code id="headerAndBody" className="sectionHeader"><FontAwesomeIcon icon="newspaper"/> Header &amp; Body</code>
        <div className="tileContainer">
          <TileText header="B.C. won't be back to 'full normal life' until at least the summer, and another wave is possible: Henry" body="It'll be a few months before things get back to &#34;full normal life&#34;	in B.C., the province's provincial health officer said in her latest update on COVID-19."/>
          <TileText header="US sailors will die unless coronavirus-hit aircraft carrier evacuated, captain warns" body="The captain of a US aircraft carrier, with 5,000 people onboard, including an unconfirmed number who have tested positive for Covid-19, has called for help to save the lives of his sailors."/>
          <TileText header="Live coronavirus updates: Americans warned that as many as 240,000 may die" body="As many as 240,000 people in the U.S. could die from COVID-19 — and that’s only with strict social distancing measures in place, one of the government’s top doctors warned Tuesday."/>
          <TileText header="3 Steps All Leaders Must Take To Navigate Corona" body="Over the last few weeks, the challenges that my executive coaching clients have experienced due to corona, fall into two equally high priority buckets."/>
          <TileText header="Indore records 19 corona cases in 24 hours; a police official among new patients" body="Twenty more people tested positive for coronavirus in Madhya Pradesh on Wednesday including a total of 19 new positive cases in Indore. Total tally from Indore has climbed to 63 after 19 new cases emerged in the last 24 hours on Tuesday. One more case was recorded from the neighbouring Khargone district."/>
        </div>



        {/* Image & Header / Vertical */}
        <code id="imageAndHeaderVertical" className="sectionHeader"><FontAwesomeIcon icon="newspaper"/> Image &amp; Header / Vertical</code>
        <div className="tileContainer">
          <TileText header="B.C. won't be back to 'full normal life' until at least the summer, and another wave is possible: Henry" body="It'll be a few months before things get back to &#34;full normal life&#34;	in B.C., the province's provincial health officer said in her latest update on COVID-19."/>
          <TileText header="US sailors will die unless coronavirus-hit aircraft carrier evacuated, captain warns" body="The captain of a US aircraft carrier, with 5,000 people onboard, including an unconfirmed number who have tested positive for Covid-19, has called for help to save the lives of his sailors."/>
          <TileText header="Live coronavirus updates: Americans warned that as many as 240,000 may die" body="As many as 240,000 people in the U.S. could die from COVID-19 — and that’s only with strict social distancing measures in place, one of the government’s top doctors warned Tuesday."/>
          <TileText header="3 Steps All Leaders Must Take To Navigate Corona" body="Over the last few weeks, the challenges that my executive coaching clients have experienced due to corona, fall into two equally high priority buckets."/>
          <TileText header="Indore records 19 corona cases in 24 hours; a police official among new patients" body="Twenty more people tested positive for coronavirus in Madhya Pradesh on Wednesday including a total of 19 new positive cases in Indore. Total tally from Indore has climbed to 63 after 19 new cases emerged in the last 24 hours on Tuesday. One more case was recorded from the neighbouring Khargone district."/>
        </div>



        {/* Image & Header / Horizontal */}
        <code id="imageAndHeaderHorizontal" className="sectionHeader"><FontAwesomeIcon icon="newspaper"/> Image &amp; Header / Horizontal</code>
        <div className="tileContainer">
          <TileText header="B.C. won't be back to 'full normal life' until at least the summer, and another wave is possible: Henry" body="It'll be a few months before things get back to &#34;full normal life&#34;	in B.C., the province's provincial health officer said in her latest update on COVID-19."/>
          <TileText header="US sailors will die unless coronavirus-hit aircraft carrier evacuated, captain warns" body="The captain of a US aircraft carrier, with 5,000 people onboard, including an unconfirmed number who have tested positive for Covid-19, has called for help to save the lives of his sailors."/>
          <TileText header="Live coronavirus updates: Americans warned that as many as 240,000 may die" body="As many as 240,000 people in the U.S. could die from COVID-19 — and that’s only with strict social distancing measures in place, one of the government’s top doctors warned Tuesday."/>
          <TileText header="3 Steps All Leaders Must Take To Navigate Corona" body="Over the last few weeks, the challenges that my executive coaching clients have experienced due to corona, fall into two equally high priority buckets."/>
          <TileText header="Indore records 19 corona cases in 24 hours; a police official among new patients" body="Twenty more people tested positive for coronavirus in Madhya Pradesh on Wednesday including a total of 19 new positive cases in Indore. Total tally from Indore has climbed to 63 after 19 new cases emerged in the last 24 hours on Tuesday. One more case was recorded from the neighbouring Khargone district."/>
        </div>
      </div>
    );
  }
}

export default SectionTile;
