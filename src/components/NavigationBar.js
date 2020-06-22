import React, { Component } from 'react';
import { ReactComponent as IconBurger } from '../images/icon-burger.svg';
import { ReactComponent as IconFPO1x1 } from '../images/icon-fpo-1x1.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFileAlt, faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import { throttle, addClass, removeClass } from './Helper';
library.add(faFileAlt, faArrowCircleLeft, faArrowCircleRight);



class NavigationBar extends Component {
  valueToHideNavigationBar = 128;

  // LIFECYCLE METHODS
  componentDidMount() {
    window.addEventListener('scroll', throttle(this.handleOnScroll,16));
  }
  componentDidUpdate() {}
  componentWillUnmount() {}

  // RENDER OF COMPONENT
  render() {
    return (
      <>
      <div className="App">
        <nav className="navigationBarElement">
          <ul className="navigationBarHeader">
            <li onClick={this.onBurgerIconClick}>
              <IconBurger/>
            </li>
            <li>
              <a href="/">
                <IconFPO1x1/>
              </a>
            </li>
            <li>
              <IconFPO1x1/>
            </li>
          </ul>
          <ul className="navigationBarBody">
            <li onClick={this.handleSubNavigationParent} data-nav-sub-body-function="parent">
              Alpha&ensp;<FontAwesomeIcon icon="arrow-circle-right"/>
              <ul className="navigationBarSubBody">
                <a href="/">
                  <li data-nav-sub-body-function="child">
                    Alpha-1
                  </li>
                </a>
                <a href="/">
                  <li data-nav-sub-body-function="child">
                    Alpha-2
                  </li>
                </a>
                <a href="/">
                  <li data-nav-sub-body-function="child">
                    Alpha-3
                  </li>
                </a>
                <li data-nav-sub-body-function="close">
                  <FontAwesomeIcon icon="arrow-circle-left"/>&ensp;Back
                </li>
              </ul>
            </li>
            <li>Beta</li>
            <li onClick={this.handleSubNavigationParent} data-nav-sub-body-function="parent">
              Charlie&ensp;<FontAwesomeIcon icon="arrow-circle-right"/>
              <ul className="navigationBarSubBody">
                <a href="/">
                  <li data-nav-sub-body-function="child">
                    Charlie-1
                  </li>
                </a>
                <a href="/">
                  <li data-nav-sub-body-function="child">
                    Charlie-2
                  </li>
                </a>
                <a href="/">
                  <li data-nav-sub-body-function="child">
                    Charlie-3
                  </li>
                </a>
                <li data-nav-sub-body-function="close">
                  <FontAwesomeIcon icon="arrow-circle-left"/>&ensp;Back
                </li>
              </ul>
            </li>
            <li>Delta</li>
            <li>Echo</li>
            <li>Foxtrot</li>
            <li>Golf</li>
            <li>Hotel</li>
            <li>India</li>
            <li>Juliett</li>
            <li>Kilo</li>
            <li>Lima</li>
            <li>Mike</li>
            <li>November</li>
            <li>Oscar</li>
          </ul>
        </nav>
        <section className="sectionContainer">
          <code><FontAwesomeIcon icon="file-alt"/>&ensp;Navigation Bar / 200607</code>
          <ul>
            <li>The &lt;ul&gt; and &lt;li&gt; have been used conventionally for Navigation. Semantic, Structure, and SEO seem to be the most common reason, however, is this the most effective?</li>
            <ul>
              <li>Intrestingly, the mobile version of the Google Store (as of 200607) use buttons for Primary Categories (i.e. Burger-Button > Phone) and a div containing anchors for Secondary Categories (i.e. Pixel 4, Pixel 3a, Compare phones)</li>
              <li>However, for desktop the structure is slightly different. Primary Categories are still buttons and the Secondary Categories are lists...</li>
              <li>It seems there's a menu-element which can contain buttons, it could be a future-preparation?</li>
            </ul>
            <li>It seems the 2005 research done by Bruce Lawson is the main driver behind using lists. However, this research was comparing lists in tables, so the context may not be as valid in 2020.</li>
            <li>Semantics and Structure is important, however we need to balance it with Usability and Accessibility. It needs to be maintainable, usable, and accessible.</li>
            <li>One perspective to consider may be Reinhard Stebner, an Accessibility Manager who is blind. Reinhard suggested using divs and spans instead of lists, as it makes it easier when using a screen reader.</li>
            <li>The reason for this seems to be how divs and spans are invisible to the screen reader (in his case, the JAWS screen reader). On the otherhand, lists are visible which could make sites with several layers difficult to navigate.</li>
            <li>In terms of code, &lt;nav&gt; and &lt;div role="navigation"&gt; are approaches to keep in mind. Note that the <a href="https://html.spec.whatwg.org/multipage/sections.html#the-nav-element">official spec</a> does state that <i>"A nav element doesn't have to contain a list..."</i></li>
            <li>Reference:</li>
            <ul>
              <li>
                <a href="https://www.youtube.com/watch?v=D3-v9tRu9oE" target="_blank" rel="noopener noreferrer">
                  YouTube / Screen Reader HTML List Demo
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/watch?v=nkHvZvx2OEI" target="_blank" rel="noopener noreferrer">
                  YouTube / Accessible navigation on the web
                </a>
              </li>
              <li>
                <a href="http://bfreemore.blogspot.com/2011/01/web-accessibility-with-reinhard-stebner.html" target="_blank" rel="noopener noreferrer">
                  Article / Web Accessibility with Reinhard Stebner and Refresh Baltimore
                </a>
              </li>
              <li>
                <a href="https://jimdoran.art/webdesign/refresh-web-accessibility" target="_blank" rel="noopener noreferrer">
                  Article / Web Accessibility at Refresh Baltimore
                </a>
              </li>
              <li>
                <a href="https://css-tricks.com/navigation-in-lists-to-be-or-not-to-be/" target="_blank" rel="noopener noreferrer">
                  Article / Navigation in Lists: To Be or Not To Be
                </a>
              </li>
            </ul>
          </ul>
        </section>
      </div>
      </>
    );
  }

  // FUNCTION: BASIC EXPLANATION HERE
  // - Detailed explanation here
  onBurgerIconClick = () => {
    document.querySelector('.navigationBarElement').classList.toggle('active');
    document.body.classList.toggle('hideOverflow');
  };
  handleOnScroll = () => {
    const valueTriggerHideNav = 88; // Double the average touch area value
    const startPageYOffset = window.pageYOffset;
    let endPageYOffset;
    let valueAmountScrolled;
    setTimeout(function() {
      endPageYOffset = window.pageYOffset;
      valueAmountScrolled = endPageYOffset - startPageYOffset;
      if (valueAmountScrolled >= valueTriggerHideNav) {
        document.querySelector('.navigationBarElement').classList.add('hidden');
      } else if (valueAmountScrolled <= valueTriggerHideNav * -0.5) {
        document.querySelector('.navigationBarElement').classList.remove('hidden');
      };
    }, 1000);
  };
  handleSubNavigationParent = (e) => {
    const navBody = document.querySelector('.navigationBarBody');
    const navSubBody = e.currentTarget.querySelector('.navigationBarSubBody');
    const navSubBodyIsActive = navSubBody.classList.contains('active');
    const subBodyParent = e.target.closest('li').dataset.navSubBodyFunction === 'parent';
    const subBodyChild = e.target.closest('li').dataset.navSubBodyFunction === 'child';
    const subBodyClose = e.target.closest('li').dataset.navSubBodyFunction === 'close';
    if (!navSubBodyIsActive && subBodyParent) {
      addClass(navBody, 'overflowYHidden');
      addClass(navSubBody, 'active');
    } else if (navSubBodyIsActive && subBodyChild) {
      return;
    } else if (navSubBodyIsActive && subBodyClose) {
      removeClass(navBody, 'overflowYHidden');
      removeClass(e.currentTarget.querySelector('.navigationBarSubBody.active'), 'active');
    }
  };
}

export default NavigationBar;
