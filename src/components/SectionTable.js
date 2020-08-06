import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { addClass, removeClass } from './Helper';

class SectionTable extends Component {
  // COMPONENT VARIALBES
  state = { foo: true };
  // - As a state it would require setState(), resulting in a rapid-rendering.
  bar = false;

  // LIFECYCLE METHODS
  componentDidMount() {
    // Check On Load
    this.updateTableContainer();
    // Check On Window Resize
    window.addEventListener('resize', this.updateTableContainer);
  }
  componentDidUpdate() {}
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateTableContainer);
  }

  // RENDER OF COMPONENT
  render() {
    return (
      <>
      <section className="sectionContainer">
        <code><FontAwesomeIcon icon="file-alt"/> TABLE / 200727</code>
        <ul>
          <li>200805</li>
          <ul>
            <li>Even a simple table can benefit from details that enhance the UI &amp; UX.</li>
            <li>A drop-shadow on the right appears to indicate more content if the entire table-width cannot be displayed.</li>
            <li>This drop-shadow also disappears once it reaches the end of the table, to indicate there is no more content.</li>
            <li>This drop-shadow is set to trigger on, onLoad and onScroll. So it appears only when necessary.</li>
          </ul>
        </ul>
        <div className="linksContainer">
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table"
            target="_blank"
            rel="noopener noreferrer">
            <code>Table<FontAwesomeIcon icon="external-link-alt" className="externalLinkIcon"/></code>
          </a>
          <a
            href="https://material.io/components/data-tables"
            target="_blank"
            rel="noopener noreferrer">
            <code>Material Design/ Table<FontAwesomeIcon icon="external-link-alt" className="externalLinkIcon"/></code>
          </a>
          <a
            href="https://material.angular.io/components/table/overview"
            target="_blank"
            rel="noopener noreferrer">
            <code>Angular / Table<FontAwesomeIcon icon="external-link-alt" className="externalLinkIcon"/></code>
          </a>
        </div>
      </section>
      <section className="sectionContainer">
        <code className="sectionHeader"><FontAwesomeIcon icon="table"/> Default Table</code>
        <div className="defaultTableContainer">
          <table className="defaultTableElement">
            <thead className="tableHeader">
              <tr>
                <th className="tableHeaderCell"></th>
                <th className="tableHeaderCell">Header A</th>
                <th className="tableHeaderCell">Header B</th>
                <th className="tableHeaderCell">Header C</th>
              </tr>
            </thead>
            <tbody className="tableBody">
              <tr className="tableBodyRow">
                <td className="tableRowHeaderCell">Row Head A</td>
                <td className="tableBodyCell">Cell A1</td>
                <td className="tableBodyCell">Cell B1</td>
                <td className="tableBodyCell">Cell C1</td>
              </tr>
              <tr className="tableBodyRow">
                <td className="tableRowHeaderCell">Row Head B</td>
                <td className="tableBodyCell">Cell A2</td>
                <td className="tableBodyCell">Cell B2</td>
                <td className="tableBodyCell">Cell C2</td>
              </tr>
              <tr className="tableBodyRow">
                <td className="tableRowHeaderCell">Row Head C</td>
                <td className="tableBodyCell">Cell A3</td>
                <td className="tableBodyCell">Cell B3</td>
                <td className="tableBodyCell">Cell C3</td>
              </tr>
              <tr className="tableBodyRow">
                <td className="tableRowHeaderCell">Row Head D</td>
                <td className="tableBodyCell">Cell A4</td>
                <td className="tableBodyCell">Cell B4</td>
                <td className="tableBodyCell">Cell C4</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="sectionContainer">
        <code className="sectionHeader"><FontAwesomeIcon icon="table"/> Enhanced Table</code>
        <div className="tableContainer" onScroll={e => this.handleOnscroll(e)}>
          <table className="tableElement">
            <thead className="tableHeader">
              <tr>
                <th className="tableHeaderCell"></th>
                <th className="tableHeaderCell">Header A</th>
                <th className="tableHeaderCell">Header B</th>
                <th className="tableHeaderCell">Header C</th>
              </tr>
            </thead>
            <tbody className="tableBody">
              <tr className="tableBodyRow">
                <td className="tableRowHeaderCell">Row Head A</td>
                <td className="tableBodyCell">Cell A1</td>
                <td className="tableBodyCell">Cell B1</td>
                <td className="tableBodyCell">Cell C1</td>
              </tr>
              <tr className="tableBodyRow">
                <td className="tableRowHeaderCell">Row Head B</td>
                <td className="tableBodyCell">Cell A2</td>
                <td className="tableBodyCell">Cell B2</td>
                <td className="tableBodyCell">Cell C2</td>
              </tr>
              <tr className="tableBodyRow">
                <td className="tableRowHeaderCell">Row Head C</td>
                <td className="tableBodyCell">Cell A3</td>
                <td className="tableBodyCell">Cell B3</td>
                <td className="tableBodyCell">Cell C3</td>
              </tr>
              <tr className="tableBodyRow">
                <td className="tableRowHeaderCell">Row Head D</td>
                <td className="tableBodyCell">Cell A4</td>
                <td className="tableBodyCell">Cell B4</td>
                <td className="tableBodyCell">Cell C4</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      </>
    );
  }

  // - Verify if the Table is overflowing or not and return a Boolean value
  verifyTableOverflow = () => {
    // Section Container Variables
    const domSectionContainer = document.querySelector('.sectionContainer');
    const dSCWidth = parseFloat(window.getComputedStyle(domSectionContainer).width);
    const dSCPadding = parseFloat(window.getComputedStyle(domSectionContainer).paddingLeft);
    const dSCInnerWidth = dSCWidth - (dSCPadding * 2);
    // Table Element Variables
    const domTableElement = document.querySelector('.tableElement');
    const dTEWidth = parseFloat(window.getComputedStyle(domTableElement).width);
    // Return Value
    return dTEWidth > dSCInnerWidth;
  };

  // - Update the Table Container classlist based on a Boolean value
  updateTableContainer = () => {
    const dTC = document.querySelector('.tableContainer');
    const booleanTableOverflow = this.verifyTableOverflow();
    booleanTableOverflow ? addClass(dTC, 'overflowActive') : removeClass(dTC, 'overflowActive');
  };

  //
  handleOnscroll = (e) => {
    const target = e.currentTarget;
    const dTCWidth = parseFloat(window.getComputedStyle(target).width);
    const scrollWidth = target.scrollWidth;
    const scrollLeft = target.scrollLeft;
    const scrolledToEnd = (scrollLeft + dTCWidth) >= scrollWidth;
    scrolledToEnd ? removeClass(target, 'overflowActive') : addClass(target, 'overflowActive');
  };
}

export default SectionTable;
