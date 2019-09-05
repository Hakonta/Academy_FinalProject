import React, { Component } from 'react';
import { HeaderBar } from '../../Components/HeaderBar';
import { FooterBar } from '../../Components/FooterBar';
import MapBase from '../../Components/MapBaseView'


export class AppView extends Component {

  render() {
    return (
      <div>
        <HeaderBar />
          <MapBase />
          {/* SIDEBAR COMPONENT HERE */}
        <FooterBar />
      </div>
    );
  }
}
