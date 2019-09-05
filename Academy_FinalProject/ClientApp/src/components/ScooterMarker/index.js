import React from 'react'
import { Marker } from '@react-google-maps/api'

const scooterMarker = (props) => {

    return (


        <Marker
            position={props.position}
            clusterer={props.clusterer}
            onClick={() => { props.markerClicked() }}
        />



    )
}
export default scooterMarker