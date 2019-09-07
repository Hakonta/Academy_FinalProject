import React from 'react'

const styles = {
    startButton: {
        backgroundColor:"darkGreen", color:"white"
    },
    stopButton: {
        backgroundColor:"darkRed", color:"white"
    }
}

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
    this.setState({isOn: false})
    clearInterval(this.timer)
    this.calculateSeconds()

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
        this.setState({
            seconds:(this.state.time/1000).toFixed(0),
            minutes:((this.state.time/1000)/60).toFixed(0)
        })
        console.log(this.state.isOn)
        console.log(this.state.seconds)
        console.log(this.state.minutes)

      }
      
      console.log(this.state.time);
  }
  calculatePrice() {
    console.log('This method runs')  
    this.setState({price: 0})

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
      <div>
        <h3>{((this.state.time)/1000).toFixed(0)}s / {(((this.state.time)/1000)/60).toFixed(0)}m / {((((this.state.time)/1000)/60)/60).toFixed(0)}h</h3>
        {start}
        {/* {resume} */}
        {stop}
        {/* {reset} */}
      </div>
    )
  }
}
export default CounterComponent