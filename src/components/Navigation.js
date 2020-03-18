import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Navigation extends Component {
  render() {
    return (
      <>
      <nav>
        <ul>
          <li>Item 01</li>
          <li>Item 02</li>
          <li>Item 03</li>
          <li>Item 04</li>
          <li>Item 05</li>
        </ul>
      </nav>
      <div className="navButton">
          <FontAwesomeIcon icon="bars" />
      </div>
      </>
    );
  }
}

export default Navigation;
