import React, { Component } from 'react';
import Typography from "./SectionTypography";
import CallToAction from "./SectionCallToAction";
import Tile from "./SectionTile";
import Modal from "./SectionModal";
import CarouselNotes from "./SectionCarouselNotes";
import CarouselScroll from "./SectionCarouselScroll";
// import CarouselSwipe from "./SectionCarouselSwipe";
// import CarouselPaddle from "./SectionCarouselPaddle";
// import CarouselContentNav from "./SectionCarouselContentNav";

class SectionPrimary extends Component {
  content = {
    typography: Typography,
    callToAction: CallToAction,
    tile: Tile,
    modal: Modal,
    carouselNotes: CarouselNotes,
    carouselScroll: CarouselScroll
    // carouselSwipe: CarouselSwipe,
    // carouselPaddle: CarouselPaddle,
    // carouselContentNav: CarouselContentNav,
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
