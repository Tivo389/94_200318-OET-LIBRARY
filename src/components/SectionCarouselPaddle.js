import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CarouselPaddle from './CarouselPaddle';

class SectionCarouselPaddle extends Component {
  render() {
    return (
      <>
        <section className="sectionContainer">
          <code><FontAwesomeIcon icon="file-alt"/> Carousel / Paddle / Conventional / 200517</code>
          <li>Easy to navigate in one direction</li>
          <li>Tapping left paddle with left hand is good.</li>
          <li>Tapping right paddle with right hand is good.</li>
          <li>However, inverse tapping (i.e. left paddle with right hand) is ineffective as your hand covers the content.</li>
          <li>Tried browser console-ing the content to the top. Text was easier to ready but design would need to be adjusted, perhaps a Bottom-UI should be explored.</li>
          <ul>
            <li>Considered an "Invisible Paddle UI" but decided not to make it since the general experience would be the same as the Bottom-UI <span role='img' aria-label='thinking'>🤔</span></li>
            <ul>
              <li>It would also require the current carousel item to be narrower, to display previous/next items. Even with 16px font, 90vw on a 320px screen felt quite narrow.</li>
              <li>In addition, when previous/next items are visible the user will probably more likely to swipe. An "Invisible Paddle" may reduce visual elements, but also lacks 'noticability' since it's not displayed.</li>
            </ul>
          </ul>
        </section>
        <section className="sectionContainer noPaddingBottom">
          <code className="sectionHeader"><FontAwesomeIcon icon="horse-head"/> Carousel / Paddle / Conventional</code>
        </section>
        <CarouselPaddle/>
      </>
    );
  }
}

export default SectionCarouselPaddle;
