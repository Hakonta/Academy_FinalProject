import React, { Component } from 'react';
import { HeaderBar } from '../../Components/HeaderBar';
import FooterBar from '../../Components/FooterBar';
import MapBase from '../../Components/MapBaseView';
import SortCard from '../../Components/SortCard';


export default class AppView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }



  render() {
    return (
      <div  >
        <HeaderBar />
        <MapBase />
        {/* FILTERBUTTON COMPONENT HERE? */}
        

        <FooterBar />
      </div>
    )
  }
}




