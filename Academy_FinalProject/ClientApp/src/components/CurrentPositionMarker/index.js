import React from 'react'
import { Marker } from '@react-google-maps/api'
import YouAreHere from '../../Assets/youAreHere.png'

const currentPositionMarker = (props) => {
    
    return (
        <div style={styles.markerwrapper}>
            <Marker icon={{ url: YouAreHere }}  opacity={1} animation={2} position={props.currentPosition} />
        </div>
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