import React from 'react'

const styles = {
    outerContainer: {
        style: "flex", justifyContent:"center", alignItems:"center"
      },
      innerContainer: {
        display:"flex", flexDirection:"column", justifyContent:"center", textAlign:"center"
    },
    startButton: {
        backgroundColor:"darkGreen", color:"white"
    },
    stopButton: {
        backgroundColor:"darkRed", color:"white"
    },
    prizeText: {
        color: "red"
    }
}
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
      console.log(checkSeconds)
      
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
            console.log(this.state.seconds, 'seconds')
            console.log(this.state.minutes, 'minutes')
            console.log(this.state.hours, 'hours');
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
      <button style={styles.startButton} onClick={this.startTimer}>Unlock Scooter</button> :
      null
    let stop = (this.state.time === 0 || !this.state.isOn) ?
      null :
      <button style={styles.stopButton} onClick={this.stopTimer}>End Ride</button>
    // let resume = (this.state.time == 0 || this.state.isOn) ?
    //   null :
    //   <button onClick={this.startTimer}>resume</button>
    // let reset = (this.state.time == 0 || this.state.isOn) ?
    //   null :
    //   <button onClick={this.resetTimer}>reset</button>
    return(
      <div style={styles.outerContainer}>
          <div style={styles.innerContainer}>
        <h1>Have a safe ride!</h1>
        <h2>Time passed:</h2>
        <h3>{this.showSeconds()}s / {this.showMinutes()}m / {Math.floor(((((this.state.time)/1000)/60)/60))}h</h3>
        {start}
        {/* {resume} */}
        <p>Current cost: {this.showPrice()}</p>
        {stop}
        {/* {reset} */}
      </div></div>
    )
  }
}
export default CounterComponent