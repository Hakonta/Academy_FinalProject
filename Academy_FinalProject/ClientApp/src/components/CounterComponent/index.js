import React from 'react'
import '../../Styles/style.css'
import StripeCheckout from 'react-stripe-checkout'
import PaymentButton from '../PaymentButton'

// const styles = {
//     outerContainer: {
//       display:"flex", position:"fixed", left:"0%", bottom:"0%", height:"25%", width:"100%", zIndex:"1000000", backgroundColor:"#343a40", color:"white", justifyContent: "center"
//       },
//       innerContainer: {
//         display:"flex", flexDirection:"column", justifyContent:"center", textAlign:"center"
//     },
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
let tickerSeconds = 0;
let tickerMinutes = 0;
let fareTicker = 0;

// TODO: The time values should be fetched from the backend, for security reasons and to avoid other issues that could happen client side

class CounterComponent extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      time: 0,
      start: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      price: 0,
      isOn: false,

    }
    this.startTimer = this.startTimer.bind(this)
    this.stopTimer = this.stopTimer.bind(this)
    // this.resetTimer = this.resetTimer.bind(this)
  }
  startTimer() {
    this.setState({
      isOn: true,
      time: this.state.time,
      start: Date.now() - this.state.time
    })
    this.timer = setInterval(() => this.setState({
      time: Date.now() - this.state.start
    }), 1);
  }
  stopTimer() {
    this.calculateSeconds()
    this.setState({isOn: false})
    clearInterval(this.timer)

  }
//   resetTimer() {
//     this.setState({time: 0, isOn: false})
//   }
  calculateSeconds() {
      let checkSeconds = (this.state.time/1000).toFixed(0);
      
      if (checkSeconds >= 60 )
      {
        this.setState({seconds: 0})
      }
      else
      {
          this.setState(() => ({
              seconds: (this.state.time/1000).toFixed(0)
          }));
          this.setState({ 
              seconds: Math.floor(((this.state.time)/1000)), 
              minutes: Math.floor(((this.state.time)/1000/60)),  
              hours: Math.floor(((((this.state.time)/1000)/60)/60))  
            
            }, () => {
          }); 
      }
      
  }
  
  showPrice() {
      return 10 + fareTicker;
  }
  showSeconds()
  {
      if (Math.floor(((this.state.time)/1000) - (60 * tickerSeconds)) === 60)
      {
          tickerSeconds += 1;
          fareTicker += 2;
      }

      return Math.floor(((this.state.time)/1000)) - (60 * tickerSeconds);
  }
  showMinutes()
  {
      if (Math.floor((((this.state.time)/1000/60)) - (60 * tickerMinutes)) === 60)
      {
          tickerMinutes += 1;

      }

      return Math.floor((((this.state.time)/1000/60)) - (60 * tickerMinutes));
  }

  render() {
    let start = (this.state.time === 0) ?
      <div><h3>Have a safe ride!</h3><p>(Press the unlock button to begin your ride)</p><button className={'startButton'} onClick={this.startTimer}>Unlock Scooter</button></div> :
      null
    let stop = (this.state.time === 0 || !this.state.isOn) ?
      null :
      <div><h3>Ride in progress</h3><h4>Time passed:</h4><h4>{this.showSeconds()}s / {this.showMinutes()}m / {Math.floor(((((this.state.time)/1000)/60)/60))}h</h4>
      <p>Current cost: kr {this.showPrice()}</p><button className={'stopButton'} onClick={this.stopTimer}>End and pay your ride</button></div>
    let endRide = (this.state.time === 0 || this.state.isOn) ?
      null :
      <div><h4>Thank you for the ride!</h4><h4>Total ride cost: kr {this.showPrice()}</h4>{<StripeCheckout
        amount="500"
        billingAddress
        description="You will not be charged during checkout"
        image= "" // kanskje legge inn vår logo her?
        locale="auto"
        name="SQT - Find all rides"
        stripeKey="pk_test_7fR8mYhqOb4p5RkeTP2Qlb3a00u5AA68Uf"
        //token={this.onToken}
        zipCode
        label="Pay with 💩" //Copy-paste emoji from https://getemoji.com/
        panelLabel="Cost of your ride: kr 37,5"
      />}</div>
      
    // let reset = (this.state.time == 0 || this.state.isOn) ?
    //   null :
    //   <button onClick={this.resetTimer}>reset</button>
    return(
      <div className={'outerContainer'}>
          <div className={'innerContainer'}>
        

        {start}
        {stop}
        {endRide}
        
        
        
      </div></div>
    )
  }
}
export default CounterComponent
//             // cardNr: 4242424242424242
//             // date: 12/12
//             // CVC: 111