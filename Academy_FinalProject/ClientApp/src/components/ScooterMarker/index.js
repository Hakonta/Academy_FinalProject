import React from 'react'
import { Marker } from '@react-google-maps/api'
// import TierIcon from '../../Assets/tier-dot.png'
// import VoiIcon from '../../Assets/voi-dot.png'
import FlasIcon from '../../Assets/yellow-dot.png'

const scooterMarker = (props) => {

    // const decideMarkerIcon = (props) => {
    //     switch (props.provider) {
    //         case 'Tier': return TierIcon
    //         case 'Voi': return VoiIcon
    //         case 'Flash': return FlasIcon
    //     }
    // }

    return (


        <Marker
            position={props.position}
            clusterer={props.clusterer}
            onClick={() => { props.markerClicked() }}
            icon={{ url: FlasIcon }}
        />



    )
}
export default scooterMarker