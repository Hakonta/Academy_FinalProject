import React, { Component } from 'react';
import MapBase from '../../Components/MapBaseView';

export default class AppView extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <React.Fragment>
        <MapBase/>
      </React.Fragment>
    )
  }
}