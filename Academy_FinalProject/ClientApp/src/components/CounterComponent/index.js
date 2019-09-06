import React from 'react'

class CounterComponent extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      time: 0,
      isOn: false,
      start: 0
    }
    this.startTimer = this.startTimer.bind(this)
    this.stopTimer = this.stopTimer.bind(this)
    this.resetTimer = this.resetTimer.bind(this)
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
  }
  resetTimer() {
    this.setState({time: 0, isOn: false})
  }
  render() {
    let start = (this.state.time == 0) ?
      <button onClick={this.startTimer}>Unlock Scooter</button> :
      null
    let stop = (this.state.time == 0 || !this.state.isOn) ?
      null :
      <button onClick={this.stopTimer}>End Ride</button>
    let resume = (this.state.time == 0 || this.state.isOn) ?
      null :
      <button onClick={this.startTimer}>resume</button>
    let reset = (this.state.time == 0 || this.state.isOn) ?
      null :
      <button onClick={this.resetTimer}>reset</button>
    return(
      <div>
        <h3>{((this.state.time)/1000).toFixed(0)}s / {(((this.state.time)/1000)/60).toFixed(0)}m / {((((this.state.time)/1000)/60)/60).toFixed(0)}h</h3>
        {start}
        {resume}
        {stop}
        {reset}
      </div>
    )
  }
}
export default CounterComponent