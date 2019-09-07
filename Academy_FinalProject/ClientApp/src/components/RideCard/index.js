import React from 'react'
import CounterComponent from '../CounterComponent'

const styles = {
    outerContainer: 
    {
         textAlign:"center"

    },
    container: 
    {
        display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"
    }
}

export default function showRideDetails() 
{
return (
    <div style={styles.outerContainer}>
        <div style={styles.container}>
            <div id='container'><h1>Have a safe ride!</h1>
                <h2>Time passed</h2>
                <h2><CounterComponent/></h2>
    </div></div></div> 
)
}