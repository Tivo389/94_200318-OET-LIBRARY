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
            onClick={this.onClick}
            onTouchStart={this.onTouchStart}
            onTouchEnd={this.onTouchEnd}
            onTouchCancel={this.onTouchCancel}>
            Display Modal
          </a>
        </div>
      </section>
      <div className="modalContainer">
        <div className="modalElement">
          <p>Hello World</p>
          <p>999 Will need to consider modal ctas as standards use z-index</p>
        </div>
      </div>
      </>
    );
  }
  onClick = (e) => {
    e.preventDefault();
    document.querySelector('.modalContainer').classList.add('active');
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
