import React from 'react'
import { Marker } from '@react-google-maps/api'
import youAreHere from '../../Assets/youAreHere.png'

const currentPositionMarker = (props) => {
   return (
           <Marker
           position={props.position}
           icon={{url:youAreHere}}/>
   )
}

export default currentPositionMarker;

