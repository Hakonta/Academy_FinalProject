import React from 'react'
import CounterComponent from '../CounterComponent'

export default function showRideDetails() 
{
return (
    <div id='container'><h1>Have a safe ride!</h1><br></br>
    <h2>Time passed</h2><br></br>
    <h2><CounterComponent/></h2>
    </div>
)
}