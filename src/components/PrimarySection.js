import React, { Component } from 'react';
import Alpha from "./TestAlpha";
import Beta from "./TestBeta";

class PrimarySection extends Component {
  content = {
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

export default PrimarySection;
