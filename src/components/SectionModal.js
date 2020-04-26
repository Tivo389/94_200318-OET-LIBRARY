import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Modal extends Component {
  targetModal = '';
  render() {
    return (
      <>
        <section className="sectionContainer">
          <code><FontAwesomeIcon icon="file-alt"/> Modal / 200419</code>
          <div className="linksContainer">
            <a
              href="https://material.io/components/dialogs"
              rel="noopener noreferrer"
              target="_blank">
              <code>Material Design <FontAwesomeIcon icon="star"/></code>
            </a>
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
            <li>A modal that requires user to respond before proceeding can be categorized as a "Modal Dialogue".</li>
            <ul>
                <li>For example, "Do you want to save changes to the document before closing?" and "Are you sure you want to send this email without a subject?" would be a modal that requires dialogue; a response.</li>
                <li>A modal dialogue should be applied for critical tasks, such as error prevention or correction or when critical information requests.</li>
                <li>Due to its nature, a modal dialogue will interrupt the user journey.</li>
            </ul>
            <li>Non-modal dialogue is more appropriate when the task is not critical.</li>
            <ul>
                <li>For example, selecting a font-size or font-weight is an example of a Non-modal dialogue, it does not block the user.</li>
                <li>A non-modal dialogue should be applied for non-critical tasks.</li>
                <li>Due to it's nature, the non-modal dialogue can blend better with the user journey.</li>
            </ul>
            <li>Placing content into a modal reduces vertical space. However, I get the impression this approach is incorrect. / 200423</li>
            <ul>
              <li>If we define a modal as "a component that prompts the user for critical/non-critical action", placing content inside of it deviates from this component's objective.</li>
              <li>If the benefit we are trying to achieve is "reducing vertical scroll amount", this should be achieved by a different component.</li>
              <li>I'll need to keep the following in mind to develop a solution. Just as a note, the dynamic content component might be a potential.</li>
              <ul>
                <li>The solution is content oriented.</li>
                <li>The solution should not require the user to open/close a modal.</li>
                <li>The solution should allow easy navigation to other content.</li>
              </ul>
            </ul>
          </ul>
        </section>
        <section className="sectionContainer">
          <code className="sectionHeader"><FontAwesomeIcon icon="window-restore"/> Modal</code>
          <div id="standardCTA" className="callToActionContainer">
            <a
              className="ctaTextStandardPrimary"
              href="./"
              modalid="alertDialogue"
              onClick={this.onClickOpenModal}
              onTouchStart={this.onTouchStart}
              onTouchEnd={this.onTouchEnd}
              onTouchCancel={this.onTouchCancel}>
              Alert Dialogue
            </a>
          </div>
        </section>
        <div id="alertDialogue" className="modalContainer inactive">
          <div className="modalElement">
            <div className="modalHeader">
              <h6>Initiate Self-destruct?</h6>
            </div>
            <div className="modalContent">
              <p>Are you sure you want to initiate the Self-destruct? This action cannot be reversed.</p>
            </div>
            <div className="modalFooter">
              <button className="modalButton" onClick={this.onClickCloseModal}>CANCEL</button>
              <button className="modalButton" onClick={this.onClickCloseModal}>INITIATE</button>
            </div>
          </div>
        </div>
      </>
    );
  }
  onClickCloseModal = () => {
    document.querySelector(`#${this.targetModal}`).classList.add('inactive');
    document.querySelector(`#${this.targetModal}`).classList.remove('active');
    document.querySelector('body').classList.remove('modalOpen');
  };
  onClickOpenModal = (e) => {
    e.preventDefault();
    this.targetModal = e.currentTarget.getAttribute('modalid');
    document.querySelector('body').classList.add('modalOpen');
    document.querySelector(`#${this.targetModal}`).classList.add('active');
    document.querySelector(`#${this.targetModal}`).classList.remove('inactive');
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
