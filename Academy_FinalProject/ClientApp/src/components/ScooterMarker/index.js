import React from 'react'
import { Marker } from '@react-google-maps/api'
import markerTier from '../../Assets/markerTier.png'
import markerVoi from '../../Assets/markerVoi.png'
import markerCirc from '../../Assets/markerCirc.png'
import markerZvipp from '../../Assets/markerZvipp.png'



const decideMarkerIcon = (provider) => {
    switch (provider) {
        case 'Tier': return (markerTier)
        //case 'Tier': return 'http://maps.google.com/mapfiles/kml/paddle/grn-blank_maps.png'
        case 'Voi': return (markerVoi)
        //case 'Voi': return 'http://maps.google.com/mapfiles/kml/paddle/red-blank_maps.png'
        case 'Zvipp': return (markerZvipp)
        //case 'Zvipp': return 'http://maps.google.com/mapfiles/kml/paddle/blu-blank_maps.png'
        case 'Flash': return (markerCirc)
        //case 'Flash': return 'http://maps.google.com/mapfiles/kml/paddle/pink-blank_maps.png'
    }
}
const scooterMarker = (props) => {
    return (
        <Marker
            position={props.position}
            clusterer={props.clusterer}
            onClick={() => { props.markerClicked() }}
            icon={{ url: decideMarkerIcon(props.provider) }}
        />
    )
}
export default scooterMarker