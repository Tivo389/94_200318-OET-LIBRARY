import React, { Component } from 'react';
import CallToAction from "./SectionCallToAction";
import CarouselNotes from "./SectionCarouselNotes";
import CarouselPaddle from "./SectionCarouselPaddle";
import CarouselPaddleBottomUI from "./SectionCarouselPaddleBottomUI";
import CarouselScroll from "./SectionCarouselScroll";
import CarouselSwipe from "./SectionCarouselSwipe";
import Modal from "./SectionModal";
import Table from "./SectionTable";
import Tile from "./SectionTile";
import Typography from "./SectionTypography";

class SectionPrimary extends Component {
  content = {
    callToAction: CallToAction,
    carouselNotes: CarouselNotes,
    carouselPaddle: CarouselPaddle,
    carouselPaddleBottomUI: CarouselPaddleBottomUI,
    carouselScroll: CarouselScroll,
    carouselSwipe: CarouselSwipe,
    modal: Modal,
    table: Table,
    tile: Tile,
    typography: Typography
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
