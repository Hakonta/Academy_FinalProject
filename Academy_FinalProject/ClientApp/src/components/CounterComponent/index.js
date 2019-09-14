import React from 'react'
import '../../Styles/style.css'
import StripeCheckout from 'react-stripe-checkout'

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
        <div><h4 style={{fontFamily: "'Red Hat Display', sans-serif"}}>Have a safe ride!</h4><p>(Press the unlock button to begin your ride)</p><button style = {{fontFamily:"'Red Hat Display', sans-serif"}} className={'btncards'} onClick={this.startTimer}>Unlock Scooter</button></div> :
        null
    let stop = (this.state.time === 0 || !this.state.isOn) ?
        null :
        <div><h4 style={{fontFamily: "'Red Hat Display', sans-serif"}}>Time passed:</h4><h4 style={{fontFamily: "'Red Hat Display', sans-serif"}} >  {Math.floor(((((this.state.time)/1000)/60)/60))}h {this.showMinutes()}m {this.showSeconds()}s     </h4>
        <p>Current cost: kr {this.showPrice()}</p><button style = {{fontFamily:"'Red Hat Display', sans-serif"}} className={'btncards'} onClick={this.stopTimer}>End and pay your ride</button></div>
    let endRide = (this.state.time === 0 || this.state.isOn) ?
        null :
        <div ><h4 style={{fontFamily: "'Red Hat Display', sans-serif"}}>Thank you for the ride!</h4><h4>Total ride cost: kr {this.showPrice()}</h4>
        {<StripeCheckout
          amount={this.showPrice()*100}
          //billingAddress
          description="You will not be charged during checkout"
          image= "" // kanskje legge inn vår logo her?
          locale="auto"
          currency="NOK"
          name="SQT - Find all rides"
          stripeKey="pk_test_7fR8mYhqOb4p5RkeTP2Qlb3a00u5AA68Uf"
          //token={this.onToken}
          zipCode
          label="" //Copy-paste emoji from https://getemoji.com/
          panelLabel={this.amount}
          >
          <button className="btncards" onClick={this.props.exitFooterOnClick}>Pay with card</button> 
        </StripeCheckout>}</div>
      
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