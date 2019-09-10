import React from 'react'
import { Marker } from '@react-google-maps/api'
import markerTier from '../../Assets/markerTier.png'
import markerVoi from '../../Assets/markerVoi.png'
import markerCirc from '../../Assets/markerCirc.png'
import markerZvipp from '../../Assets/markerZvipp.png'

const decideMarkerIcon = (provider) => {
    switch (provider) {
        case 'Tier': return (markerTier)
        case 'Voi': return (markerVoi)
        case 'Zvipp': return (markerZvipp)
        case 'Flash': return (markerCirc)
        default: return null
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