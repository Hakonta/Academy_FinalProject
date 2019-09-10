import React from 'react'
import CounterComponent from '../CounterComponent'
import StripeCheckout from 'react-stripe-checkout'
import '../../Styles/style.css'
import PaymentButton from '../PaymentButton'

// const styles = {
//     outerContainer: {
//       display:"flex", position:"fixed", left:"0%", bottom:"0%", height:"25%", width:"100%", zIndex:"1000000", backgroundColor:"#343a40", color:"white", justifyContent: "center"
//     },
//     innerContainer: {
//       display:"flex", flexDirection:"column", justifyContent:"center", textAlign:"center"
//   },
//     startButton: {
//         backgroundColor:"darkGreen", color:"white"
//     },
//     stopButton: {
//         backgroundColor:"darkRed", color:"white"
//     },
//     prizeText: {
//         color: "red"
//     }
// }


// TODO: The time values should be fetched from the backend, for security reasons and to avoid other issues that could happen client side

class RideCard extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      fare: null,
      isOn: false
    }
    this.unlockScooter = this.unlockScooter.bind(this)
  }
  unlockScooter()
  {
    this.setState({isOn: true}, () => {
    console.log(this.state.isOn, 'Is it on?')
  }); 
  }


  render() {
    let verifyMenu = (!this.state.isOn) ?
      <div className={'infoCardOuterContainer'}>
        <div id="test"></div>
        <div className={'infoCardInnerContainer'}>
          <h4>Almost there...</h4>
          <p>Please verify that you want to begin your ride and that you comply with the safety requirements</p>
          <a href="#test">Terms of agreement</a>
          <button className={'rideCardStartButton'} onClick={this.unlockScooter}>I agree</button></div></div> :
      null
    let verified = (!this.state.isOn) ?
      null :
      <CounterComponent/>
   
      
// Below is the order the menus that should appear on the Footerbar menu
    return(
      <div>
        {verifyMenu}
        {verified}
        {/* {paymentButton} */}
        
      </div>
    )
  }
}
export default RideCard