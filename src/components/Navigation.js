import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Navigation extends Component {
  render() {
    return (
      <>
      <nav className="navBar">
        <ul className="navBarIcons">
          <li className="navBarIcon" onClick={this.onClick}>
            <FontAwesomeIcon icon="bars"/>
          </li>
        </ul>
        <ul className="navBarContent">
          <li>Typography</li>
          <li>Item 02</li>
          <li>Item 03</li>
          <li>Item 04</li>
          <li>Item 05</li>
        </ul>
      </nav>
      </>
    );
  }
  onClick = (e) => {
    document.querySelector(".navBar").classList.toggle('active');
  };
}

export default Navigation;
