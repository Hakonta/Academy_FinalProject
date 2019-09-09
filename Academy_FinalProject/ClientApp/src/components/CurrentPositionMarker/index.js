import React from 'react'
import { Marker } from '@react-google-maps/api'
import YouAreHere from '../../Assets/youAreHere.png'

const currentPositionMarker = (props) => {
    
    return (
            <Marker 
            position={props.position} 
            icon={{url:BysykkelIcon}}/>
    )
}

export default currentPositionMarker;
