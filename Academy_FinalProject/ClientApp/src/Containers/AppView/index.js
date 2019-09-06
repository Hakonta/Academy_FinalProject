import React, { Component } from 'react';
import { HeaderBar } from '../../Components/HeaderBar';
import { FooterBar } from '../../Components/FooterBar';
import MapBase from '../../Components/MapBaseView'
import StripeCheckout from 'react-stripe-checkout';


export default class AppView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSortcard: true
    }
  }



  render() {
    return (
      <div >
        <HeaderBar />
        <MapBase/>
      {/* FILTERBUTTON COMPONENT HERE? */}
        <FooterBar />
      </div>
    )
  }
}



//Positioning of all content:
//THIS DOES NOT WORK
// const styles ={
//   appContainer:{
//       display: 'grid',
//       gridTemplateColumns: 'repeat(5, 1fr)',
//       gridTemplateRows: 'repeat(7, 1fr)',
//       gridColumnGap: 0,
//       gridRowGap: 0
//   },
//   headerBar:{
//      gridArea: '1 / 1 / 2 / 6'
//   },
//   mappBase:{
//     gridArea: '2 / 1 / 7 / 6'

//   },
//   footerBar:{
//     gridArea: '7 / 1 / 8 / 6'
//   }
// }