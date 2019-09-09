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
        //backgroundColor: 'red',
        zIndex: 1000000,
        width: 50,
        height: 50
        
    }
}