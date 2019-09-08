import React from 'react'
import CounterComponent from '../CounterComponent'

const styles = {
    outerContainer: {
      style: "flex", justifyContent:"center", alignItems:"center"
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

// my functions

  render() {
    let verifyMenu = (!this.state.isOn) ?
      <div style={styles.outerContainer}>
          <h1>Almost there...</h1>
          <h2>Please verify that you want to begin your ride and that you comply with the safety requirements</h2>
          <button style={styles.startButton} onClick={this.unlockScooter}>Unlock Scooter</button></div> :
      null
    let verified = (!this.state.isOn) ?
      null :
      <CounterComponent/>

    return(
      <div>
        {verifyMenu}
        {verified}
        {/* {Payment} */}
      </div>
    )
  }
}
export default RideCard