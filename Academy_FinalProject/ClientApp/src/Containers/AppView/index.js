import React, { Component } from 'react';
import { HeaderBar } from '../../Components/HeaderBar';
import MapBase from '../../Components/MapBaseView';



export default class AppView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }



  render() {
    return (
      <div>
        <HeaderBar />
        <MapBase  />
        
      </div>
    )
  }
}




