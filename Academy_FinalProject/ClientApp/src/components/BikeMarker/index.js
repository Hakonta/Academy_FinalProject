import React from 'react'
import { Marker } from '@react-google-maps/api'
import BikeIcon from '../../Assets/guy.png'

const bikeMarker = (props) => {

    return (


        <Marker
            position={props.position}
            onClick={() => { props.markerClicked() }}
            icon={{url:BikeIcon}}
            
        />



    )
}
export default bikeMarker