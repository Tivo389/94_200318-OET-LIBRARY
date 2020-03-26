import React, { Component } from 'react';
import Alpha from "./TestAlpha";
import Beta from "./TestBeta";
import Typography from "./SectionTypography";
import CallToAction from "./SectionCallToAction";

class SectionPrimary extends Component {
  content = {
    typography: Typography,
    callToAction: CallToAction,
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
