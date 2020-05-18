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
        <ul className="navBarContent" style={{maxHeight: window.innerHeight - 44}}>
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
            onClick={() => this.props.setContent("carouselNotes")}
            onMouseUp={this.handleOnMouseUp}>
              Carousel<span> / Notes</span>
          </li>
          <li
            onClick={() => this.props.setContent("carouselScroll")}
            onMouseUp={this.handleOnMouseUp}>
              Carousel<span> / Scroll</span>
          </li>
          <li
            onClick={() => this.props.setContent("carouselSwipe")}
            onMouseUp={this.handleOnMouseUp}>
              Carousel<span> / Swipe</span>
          </li>
          <li
            onClick={() => this.props.setContent("carouselPaddle")}
            onMouseUp={this.handleOnMouseUp}>
              Carousel<span> / Paddle</span>
          </li>
          <li
            onClick={() => this.props.setContent("carouselContentNav")}
            onMouseUp={this.handleOnMouseUp}>
              Carousel<span> / Content Nav</span>
          </li>
          <li
            onClick={() => this.props.setContent("tabs")}
            onMouseUp={this.handleOnMouseUp}>
              Tabs
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
