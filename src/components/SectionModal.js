import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Modal extends Component {
  render() {
    return (
      <>
      <section className="sectionContainer">
        <code><FontAwesomeIcon icon="file-alt"/> Modal / 200419</code>
        <div className="linksContainer">
          <a
            href="https://docs.microsoft.com/en-us/cpp/mfc/modal-and-modeless-dialog-boxes?view=vs-2019"
            rel="noopener noreferrer"
            target="_blank">
            <code>Microsoft Docs</code>
          </a>
          <a
            href="https://www.nngroup.com/articles/modal-nonmodal-dialog/"
            rel="noopener noreferrer"
            target="_blank">
            <code>Nielsen Norman Group</code>
          </a>
        </div>
        <ul>
          <li>Modals require the user to respond before proceeding.</li>
          <li>Modeless are available for use at any time but permit other user activities.</li>
        </ul>
      </section>
      <section className="sectionContainer">
        <code className="sectionHeader"><FontAwesomeIcon icon="window-restore"/> Modal</code>
        <div id="standardCTA" className="callToActionContainer ctaLayoutVertical">
          <a
            className="ctaTextStandardPrimary"
            href="./"
            onClick={this.onClickStandardCTA}
            onTouchStart={this.onTouchStart}
            onTouchEnd={this.onTouchEnd}
            onTouchCancel={this.onTouchCancel}>
            Display Modal
          </a>
        </div>
      </section>
      <div className="modalContainer inactive">
        <div className="modalElement">
          <div className="modalHeader">
            <div className="modalCloseIcon" onClick={this.onClickModalCloseIcon}>
              <FontAwesomeIcon icon="times"/>
            </div>
          </div>
          <div className="modalContent">
            <p>Thank you for displaying this modal. The quick brown fox jumped over the lazy dog. I'm not certain what to display here just yet so here's Betty Botter.</p>
            <p>Betty Botter bought a bit of butter;</p>
            <p>“But,” she said, “this butter's bitter!</p>
            <p>If I put it in my batter</p>
            <p>It will make my batter bitter.</p>
            <p>But a bit o’ better butter</p>
            <p>Will make my batter better.”</p>
            <p>Then she bought a bit o’ butter</p>
            <p>Better than the bitter butter,</p>
            <p>Made her bitter batter better.</p>
            <p>So ’twas better Betty Botter</p>
            <p>Bought a bit o’ better butter.</p>
          </div>
          <div className="modalFooter">
            {/* 999 CONTINUE HERE */}
          </div>
        </div>
      </div>
      </>
    );
  }
  onClickModalCloseIcon = () => {
    document.querySelector('.modalContainer').classList.remove('active');
    document.querySelector('.modalContainer').classList.add('inactive');
  };
  onClickStandardCTA = (e) => {
    e.preventDefault();
    document.querySelector('.modalContainer').classList.add('active');
    document.querySelector('.modalContainer').classList.remove('inactive');
  };
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

export default Modal;
