import React, { Component } from 'react';
import Typography from "./SectionTypography";
import CallToAction from "./SectionCallToAction";
import Tile from "./SectionTile";
import Modal from "./SectionModal";
import CarouselNotes from "./SectionCarouselNotes";
import CarouselScroll from "./SectionCarouselScroll";
import CarouselSwipe from "./SectionCarouselSwipe";
import CarouselPaddle from "./SectionCarouselPaddle";
import CarouselPaddleBottomUI from "./SectionCarouselPaddleBottomUI";

class SectionPrimary extends Component {
  content = {
    typography: Typography,
    callToAction: CallToAction,
    tile: Tile,
    modal: Modal,
    carouselNotes: CarouselNotes,
    carouselScroll: CarouselScroll,
    carouselSwipe: CarouselSwipe,
    carouselPaddle: CarouselPaddle,
    carouselPaddleBottomUI: CarouselPaddleBottomUI
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
