import React from 'react'
import { Marker } from '@react-google-maps/api'
import BysykkelIcon from '../../Assets/markerBysykkel.png'

const bikeMarker = (props) => {

    return (
        <Marker
            position={props.position}
            clusterer={props.clusterer}
            onClick={() => { props.markerClicked() }}
            icon={{url:BysykkelIcon}}
            
        />
    )
}
export default bikeMarker