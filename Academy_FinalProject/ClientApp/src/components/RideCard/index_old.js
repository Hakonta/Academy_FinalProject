import React from 'react'
import CounterComponent from '../CounterComponent'
// TODO: Move this to the Container-folder?
let hasVerified = false;


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
            <div id='container'>
                <h2><CounterComponent/></h2>
    </div></div></div> 
)
}