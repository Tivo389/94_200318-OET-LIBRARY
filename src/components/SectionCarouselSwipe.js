import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CarouselSwipe from './CarouselSwipe';

class SectionCarouselSwipe extends Component {
  render() {
    return (
      <>
        <section className="sectionContainer">
          <code><FontAwesomeIcon icon="file-alt"/> Carousel / Swipe / 200516</code>
          <ul>
            <li>Note that these are more to focus on each UI and may not be complete on their own.</li>
            <ul>
              <li>
                For example, a UI that involves swiping won't be effective on a desktop device.'
              </li>
              <li>As a general rule of thumb a click/tap UI should be the basic.</li>
            </ul>
            <li>Notes regarding UI</li>
            <ul>
              <li>Due to less scrolling and no micro-scrolling, a better experience.</li>
              <li>Finger blocking content issue is reduced.</li>
              <li>Conflict with browser's back-feature is also reduced</li>
              <li>One-way content accessibility</li>
              <li>Good vertical space-saving on mobile</li>
              <li>Seems the horizontal-scrolling prevented veritcal-scroll sway.</li>
              <ul>
                <li>Since scrolling isn't used with this UI there is some vertical-scroll swaying.</li>
                <li>Tested 4 approaches to tackle vertical-scroll swaying.</li>
              </ul>
              <li>Approach 1 of 4: Wait a min, would using .scrollLeft instead of translateX prevent vertical-scroll swaying?</li>
              <ul>
                <li>Update 200516 / Conclusion: scrollLeft is not recommended approach.</li>
                <li>Was able to reduce vertical-scroll swaying not eliminate it.</li>
                <li>In addition, scrollLeft approach didn't work well with the swipe > scroll-snap flow.</li>
                <li>This required adding more code to make the scroll animated.</li>
                <li>CSS scroll-behaviour support was still limited as of 200516</li>
              </ul>
              <li>Approach 2 of 4: Wait a min, removing the default pan-y from touch-action, and activating a class that allows 'touch-action: pan-y' beyond a y-value threshold... might... work?</li>
              <ul>
                <li>Update 200517 / Conclusion: Both adding a class and inline-style didn't work.</li>
                <li>My hypothesis is that the touch-action value upon touchStart is prioritized over the class and inline-style added AFTER touchStart.</li>
              </ul>
              <li>Approach 3 of 4: ...<span role='img' aria-label='thinking'>🤔</span> Would assigning 'overflow: hidden' to &lt;body&gt; work?</li>
              <ul>
                <li>Update 200517 / Conclusion: Out of the 3-approaches, this was the only acceptable approach. Unfortunately, it couldn't elminate vertical-scroll sway. I get the impression this may be an issue that is impossible to eliminate with this approach, only reduce.</li>
                <li>First, onTouchStart. At this point-in-time, it is impossible to tell whether the user intends to scroll vertically (i.e to scroll page) or horizontally (i.e to scroll carousel).</li>
                <li>Second, onTouchMove. Considering we can get XY touch values at this point-in-time, this seems like the sensible event to determine users intent.</li>
                <ul>
                  <li>However, this requires a threshold. If the user moves a certain x-Value, we can assume the user is trying to scroll horizontally. If the user moves a certain y-Value, we can assume the user is trying to scroll vertically.</li>
                  <li>Until the threshold is met, vertical-scrolling is still possbile. Although the vertical-scroll sway can be reduced to within the threshold value per swipe, it will not eliminate it, only reduce it.</li>
                </ul>
                <li>Approach 4 of 4: ...<span role='img' aria-label='thinking'>🤔</span>What if I set bodyOverflowHidden is dependent on swipe angle? I've noticed this on Uniqlo (uniqlo.com/ca/en) and the Google Store (store.google.com)</li>
                <ul>
                  <li>Update 200517 / Conclusion: <b>IT WORKS MUCH BETTER THAN EXPECTED <span role='img' aria-label='smile'>😆</span></b></li>
                  <li>Initially, overflowHidden was tied to the activateScrollSnap(), which had a x-Axis threshold of 66px. This was the reason vertical-scroll sway was reduced but not eliminated.</li>
                  <li>I noticed minor glitchiness on Chrome Mobile but I get the impression this is tied to the Browser's URL bar opening and closing...</li>
                </ul>
              </ul>
            </ul>
          </ul>
        </section>
        <section className="sectionContainer noPaddingBottom">
          <code className="sectionHeader"><FontAwesomeIcon icon="horse-head"/> Carousel / Swipe</code>
        </section>
        <CarouselSwipe/>
      </>
    );
  }
}

export default SectionCarouselSwipe;
