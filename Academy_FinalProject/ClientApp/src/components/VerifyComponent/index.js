import React from 'react'
import RideCard from '../RideCard/index_old'

let hasVerified = false

// TODO: Move this to the Container-folder?
const styles = {
    outerContainer: 
    {
         textAlign:"center"

    },
    container: 
    {
        display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"
    },
    startButton: {
        backgroundColor:"darkGreen", color:"white"
    },
}

export default function verifyRide() 
{
return (
    <div style={styles.outerContainer}>
        <div style={styles.container}>
            <div id='container'><h1>Almost there...</h1>
                <h2>Please verify that you want to begin your ride and that you comply with the safety requirements</h2>
                <button style={styles.startButton} onClick={this.hasVerified = true}>Begin Ride</button>
    </div></div></div> 
)
}