import React, { Component } from 'react';
import { ReactComponent as IconBurger } from '../images/icon-burger.svg';
import { ReactComponent as IconFPO1x1 } from '../images/icon-fpo-1x1.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class NavigationBar extends Component {
  // LIFECYCLE METHODS
  componentDidMount() {}
  componentDidUpdate() {}
  componentWillUnmount() {}

  // RENDER OF COMPONENT
  render() {
    return (
      <>
        <nav className="navigationBarElement">
          <ul className="navigationBarHeader">
            <li>
              <IconBurger/>
            </li>
            <li>
              <IconFPO1x1/>
            </li>
            <li>
              <IconFPO1x1/>
            </li>
          </ul>
          <ul className="navigationBarBody">
            <li>Alpha</li>
            <li>Beta</li>
            <li>Charie</li>
            <li>Delta</li>
            <li>Echo</li>
          </ul>
        </nav>
        <section className="sectionContainer">
          <code><FontAwesomeIcon icon="file-alt"/> Navigation Bar / 200607</code>
          <li>The &lt;ul&gt; and &lt;li&gt; have been used conventionally for Navigation. Semantic and Structure seem to be the most common reason, however, is this the most effective?</li>
          <li>It seems the 2005 research done by Bruce Lawson is the main driver behind using lists. However, this research was comparing lists in tables, so the context may not be as valid in 2020.</li>
          <li>Semantics and Structure is important, however we need to balance it with Usability and Accessibility. It needs to be maintainable, usable, and accessible.</li>
          <li>One perspective to consider may be Reinhard Stebner, an Accessibility Manager who is blind. Reinhard suggested using divs and spans instead of lists, as it makes it easier when using a screen reader.</li>
          <li>The reason for this seems to be how divs and spans are invisible to the screen reader (in his case, the JAWS screen reader). On the otherhand, lists are visible which could make sites with several layers difficult to navigate.</li>
          <li>In terms of code, &lt;nav&gt; and &lt;div role="navigation"&gt; are approaches to keep in mind. Note that the <a href="https://html.spec.whatwg.org/multipage/sections.html#the-nav-element">official spec</a> does state that <i>"A nav element doesn't have to contain a list..."</i></li>
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

export default NavigationBar;
