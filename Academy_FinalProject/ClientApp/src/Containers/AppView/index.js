import React, { Component } from 'react';
import { HeaderBar } from '../../Components/HeaderBar';
import { FooterBar } from '../../Components/FooterBar';
import MapBase from '../../Components/MapBaseView'


export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }



  render() {
    return (
      <div>
        <HeaderBar />
        <MapBase/>

        <FooterBar />
      </div>
    )
  }
}
