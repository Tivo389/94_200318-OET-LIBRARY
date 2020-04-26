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
          <li
            onClick={() => this.props.setContent("typography")}
            onMouseUp={this.handleOnMouseUp}>
              Typography
          </li>
          <li
            onClick={() => this.props.setContent("callToAction")}
            onMouseUp={this.handleOnMouseUp}>
              CTA
          </li>
          <li
            onClick={() => this.props.setContent("tile")}
            onMouseUp={this.handleOnMouseUp}>
              Tile
          </li>
          <li
            onClick={() => this.props.setContent("modal")}
            onMouseUp={this.handleOnMouseUp}>
              Modal
          </li>
          <li
            onClick={() => this.props.setContent("carousel")}
            onMouseUp={this.handleOnMouseUp}>
              Carousel
          </li>
        </ul>
      </nav>
    );
  }
  onClick = (e) => {
    document.querySelector(".navBar").classList.toggle('active');
  };
  handleOnMouseUp = () => {
    document.querySelector(".navBar").classList.remove('active');
  };
}

export default Navigation;
