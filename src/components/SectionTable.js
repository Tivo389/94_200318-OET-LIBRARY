import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class SectionTable extends Component {
  // COMPONENT VARIALBES
  state = { foo: true };
  // - As a state it would require setState(), resulting in a rapid-rendering.
  bar = false;

  // LIFECYCLE METHODS
  componentDidMount() {}
  componentDidUpdate() {}
  componentWillUnmount() {}

  // RENDER OF COMPONENT
  render() {
    return (
      <>
      <section className="sectionContainer">
        <code><FontAwesomeIcon icon="file-alt"/> TABLE / 200727</code>
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
        <div className="tableContainer">
          <table className="tableElement">
            <thead className="tableHeader">
              <tr>
                <th className="tableHeaderCell">Header A</th>
                <th className="tableHeaderCell">Header B</th>
                <th className="tableHeaderCell">Header C</th>
                <th className="tableHeaderCell">Header D</th>
              </tr>
            </thead>
            <tbody className="tableBody">
              <tr className="tableBodyRow">
                <td className="tableBodyCell">Cell A1</td>
                <td className="tableBodyCell">Cell B1</td>
                <td className="tableBodyCell">Cell C1</td>
                <td className="tableBodyCell">Cell D1</td>
              </tr>
              <tr className="tableBodyRow">
                <td className="tableBodyCell">Cell A2</td>
                <td className="tableBodyCell">Cell B2</td>
                <td className="tableBodyCell">Cell C2</td>
                <td className="tableBodyCell">Cell D2</td>
              </tr>
              <tr className="tableBodyRow">
                <td className="tableBodyCell">Cell A3</td>
                <td className="tableBodyCell">Cell B3</td>
                <td className="tableBodyCell">Cell C3</td>
                <td className="tableBodyCell">Cell D3</td>
              </tr>
              <tr className="tableBodyRow">
                <td className="tableBodyCell">Cell A4</td>
                <td className="tableBodyCell">Cell B4</td>
                <td className="tableBodyCell">Cell C4</td>
                <td className="tableBodyCell">Cell D4</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      </>
    );
  }

  // FUNCTION: BASIC EXPLANATION HERE
  // - Detailed explanation here
  sampleFunction = () => {
    console.log('sampleFunction!');
  };
}

export default SectionTable;
