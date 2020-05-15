import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class SectionCarousel extends Component {
  render() {
    return (
      <>
        <section className="sectionContainer">
          <code><FontAwesomeIcon icon="file-alt"/> Carousel / Notes / 200425</code>
          <div className="linksContainer">
            <a
              href="https://www.nngroup.com/articles/designing-effective-carousels/"
              rel="noopener noreferrer"
              target="_blank">
              <code>Nielsen Norman / Effective Carousels</code>
            </a>
            <a
              href="https://www.nngroup.com/articles/mobile-carousels/"
              rel="noopener noreferrer"
              target="_blank">
              <code>Nielsen Norman / Mobile Carousels</code>
            </a>
            <ul>
              <li>A Carousel displays more than one piece of content in the same place.</li>
              <li>A Carousel indicates the presence of other content.</li>
              <li>A Carousel indicates the current content that is selected.</li>
              <li>Offers a space-saving solution for a series of content.</li>
              <li>However, it seems people frequently overlook them.</li>
              <li>Need to keep in mind that the user may not see all the items.</li>
              <li>Include 5 or fewer items, as any more will be taxing to swipe.</li>
            </ul>
            <hr></hr>
            <ul>
              <li>Carousel's are commonly used in the Landing Hero Section to cater for different promotions.</li>
              <li>Blizzard had 6 carousels on auto scroll.</li>
              <li>Blizzard also used a carousel to show its most recent dozen games.</li>
              <li>Nintendo used 4 for the landing hero on auto scroll</li>
              <li>Nintento used had 3 games per carousel slide, so 12 in total.</li>
              <li>Logitech had 7 but the colour was not the best as the indicators were difficult to see.</li>
              <li>Common aspects...</li>
                <ul>
                  <li>Minimal text, usualy just the product name and tagline of less than 35 characters.</li>
                  <li>1-2 CTAs</li>
                  <li>1-3 Images</li>
                </ul>
              <li>I got the impression that Carousel's are difficult to use as a generic component as their layout is heavily influenced by the content and space. It's not an effective component to display content and serves better to direct the user. Kind of like the content of a book or a menu.</li>
            </ul>
            <hr></hr>
            <ul>
              <li>320 x 568 iPhone SE</li>
                <ul>
                  <li>20px iOS Bar</li>
                  <li>50px Safari URL Bar</li>
                  <li>44px Safari Control Bar</li>
                </ul>
              <li>320 x 454 / Viewport Area on load (Safari) / 1.41875</li>
              <li>320 x 528 / Viewport Area on scroll down / 1.65</li>
              <li>(1.41875 + 1.65) / 2 = 1.534375</li>
              <li>After some calculation 1.20 seems to be good as a ratio</li>
              <ul>
                <li>1.65 - 1.41875 = 0.23125</li>
                <li>1.41875 - 0.23125 = 1.1875</li>
                <li>Rounding up is 1.20</li>
              </ul>
              <li>Considered 100vh but this doesn't account for OS bar and Browser Bars.</li>
              <li>In addition, the lack of a crop is more confusing.</li>
              <li>For a content-oriented scenario, the objective of mobile and desktop should be considered separately, due to the difference in available space.</li>
              <li>Considered a 'search' oriented UI which involved scroll-tap.</li>
              <ul>
                <li>This can be better in scenarios where the user is 'searching'.</li>
                <li>The user doesn't need to scroll the unnecessary in order to reach their destination.</li>
              </ul>
              <li>However a 'scan' oriented UI reduces interaction to just scroll.</li>
              <ul>
                <li>This can be better for scenarios where the user is 'scanning'.</li>
                <li>The user will need to scroll more, but when the mind-set is closer to a state of 'window-shopping' this approach would be more appropriate.</li>
              </ul>
              <li>Good opportunity, will make UI Spreadsheet</li>
            </ul>
            <hr></hr>
            <ul>
              <li>200514</li>
              <li>I'm writing this after completing the Carousel / Scroll. Some thoughts, discoveries, etc.</li>
              <li>In terms of responsiveness, I initially tried to keep the UI consistent across mobile and desktop. However, a set of thoughts lead to some questions.</li>
              <li>My initial thoughts were focused on trying to understand 'what a Carousel is intended for'.</li>
              <ul>
                <li>"A Carousel is a component oriented towards displaying content within a limited space."</li>
                <li>"A Carousel is a component that offers to display certain content above the fold."</li>
                <ul>
                  <li>However, this 2nd reason, in my opinion is flawed for most Carousels. Excluding the 1st element of the carousel, all other carousel elements in exchange for being placed above the horizontal-fold, are now hidden; fully or partially, behind a vertical-fold.</li>
                  <li><b>The only difference here is that what was once 'below the fold' is now 'beyond the edge'.</b></li>
                  <li><b>An analogy, you want to expose the user to sun light. However a sun that is below the horizon, and a sun is above the horizon but behind a mountain are both unable to offer exposure.</b></li>
                  <li>If exposure to content is the objective, it MUST be visible.</li>
                </ul>
              </ul>
              <li>Presuming the 2 observations above; or at least the 1st, are acceptable, it raised a question.</li>
              <ul>
                <li>"Does UI need to be consistent across desktop and mobile?"</li>
                <li>My current response to this as of 200515 is, "It does not have to be consistent, particularly for content-oriented components".</li>
              </ul>
              <li>In the cases of Blizzard, Nintendo, and Logitech, their Carousel's UI were consistent across mobile and desktop. The way they looked, worked, and could be interacted with were pretty much consistent.</li>
              <li>However, when we consider the difference in available space and user interaction (i.e. touch vs cursor), I fail to see a reason for this consistency.</li>
              <ul>
                <li>Consistency helps avoid confusion. However, <b>what confusion are we protecting the user from in this scenario (Carousel Component)?</b></li>
                <li><b>How does offering consistent UI across different devices help the user?</b></li>
                <li>The <b>important factor here is that the Carousel is a content-oriented component.</b> It is not a function-oriented component that is intended of help the user complete a specific task, like a date-picker or value-input.</li>
                <li>To clarify, this is specifically for content-oriented component. If this was a function-oriented component, for example a 'calender event', consistent UI between different devices makes sense.</li>
                <ul>
                  <li>For example, when you make a new event with Google Calendar the UI is consistent between devices. How you input the name of the event, how you select the date, whether the event is an all-day event or not. All the UI; how the user interacts to complete each task, is consistent. Respectively, they are type-input, date-selection, and toggle-input.</li>
                </ul>
              </ul>
              <li><b>For a function-oriented component, the interaction a user performs to add an event to a calendar should not be different between device.</b></li>
              <li><b>For a content-oriented component, the interaction a user performs to gain exposure to the content should be the primary focus, not UI consistency.</b></li>
              <li>The above thought-flow lead to the approach of 'carousel-in-mobile, grid-in-desktop'.</li>
              <li>I didn't implement it for this one (might for the paddle-version), but for mobile the user will be navigated to a different page on tap. For desktop, a modal will open.</li>
            </ul>
          </div>
        </section>
      </>
    );
  }
}

export default SectionCarousel;
