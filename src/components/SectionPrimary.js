import React, { Component } from 'react';
import Typography from "./SectionTypography";
import CallToAction from "./SectionCallToAction";
import Tile from "./SectionTile";
import Modal from "./SectionModal";
import CarouselNotes from "./SectionCarouselNotes";
import CarouselSwipe from "./SectionCarouselSwipe";
import CarouselScrollableSwipe from "./SectionCarouselScrollableSwipe";

class SectionPrimary extends Component {
  content = {
    typography: Typography,
    callToAction: CallToAction,
    tile: Tile,
    modal: Modal,
    carouselNotes: CarouselNotes,
    carouselSwipe: CarouselSwipe,
    // carouselScrollable: CarouselScrollable,
    carouselScrollableSwipe: CarouselScrollableSwipe,
    // tabs: Tabs
  };

  render() {
    const SelectedContent = this.content[this.props.content];
    return (
      <main>
        <SelectedContent/>
      </main>
    );
  }
}

export default SectionPrimary;
