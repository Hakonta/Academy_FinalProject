import React from 'react'
import { Marker } from '@react-google-maps/api'
import BysykkelIcon from '../../Assets/markerBysykkel.png'

import YouAreHere from '../../Assets/youAreHere.png'

const currentPositionMarker = (props) => {
    
    return (
            <Marker 
            position={props.position} 
            icon={{url:BysykkelIcon}}/>
    )
}

export default currentPositionMarker;

const styles = {
    markerwrapper : {
        zIndex: 1000000,
        width: 20,
        height: 20
        
    }
}
