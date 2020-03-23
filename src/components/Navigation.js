import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Navigation extends Component {
  render() {
    return (
      <nav className="navBar">
        <ul className="navBarIcons">
          <li className="navBarIcon" onClick={this.onClick}>
            <FontAwesomeIcon icon="bars"/>
          </li>
        </ul>
        <ul className="navBarContent">
          <li onClick={() => this.props.setContent("typography")}>Typography</li>
          <li onClick={() => this.props.setContent("alpha")}>Alpha</li>
          <li onClick={() => this.props.setContent("beta")}>Beta</li>
        </ul>
      </nav>
    );
  }
  onClick = (e) => {
    document.querySelector(".navBar").classList.toggle('active');
  };
}

export default Navigation;
