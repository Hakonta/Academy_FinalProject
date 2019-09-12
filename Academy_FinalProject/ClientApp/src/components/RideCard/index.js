import React from 'react'
import CounterComponent from '../CounterComponent'
import '../../Styles/style.css'


// TODO: The time values should be fetched from the backend, for security reasons and to avoid other issues that could happen client side

class RideCard extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      fare: null,
      isOn: true
    }
    this.unlockScooter = this.unlockScooter.bind(this)
  }
  unlockScooter()
  {
    this.setState({isOn: true}, () => {
  }); 
  }


  render() {
    let verifyMenu = (!this.state.isOn) ?
      <div className={'infoCardOuterContainer'}>
        <div className={'infoCardInnerContainer'}>
          <div className='TermsOfUseBox'>
            <h4>Almost there...</h4>
          Please verify that you want to begin your ride and that you comply with the safety requirements <p></p>
          <button className={'btncards'} onClick={this.unlockScooter}>I agree</button>
          <a href="#TermsOfAgreement">Terms of Agreement</a></div>
          </div>
          </div> :
      null
    let verified = (!this.state.isOn) ?
      null :
      <CounterComponent/>
   
      
// Below is the order the menus that should appear on the Footerbar menu
    return(
      <div>
        {/* {verifyMenu} */}
        {verified}
        {/* {paymentButton} */}
        
      </div>
    )
  }
}
export default RideCard