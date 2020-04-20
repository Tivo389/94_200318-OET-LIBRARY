import React, { Component } from 'react';
import Alpha from "./TestAlpha";
import Beta from "./TestBeta";
import Typography from "./SectionTypography";
import CallToAction from "./SectionCallToAction";
import Tile from "./SectionTile";
import Modal from "./SectionModal";

class SectionPrimary extends Component {
  content = {
    typography: Typography,
    callToAction: CallToAction,
    tile: Tile,
    modal: Modal,
    alpha: Alpha,
    beta: Beta
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
