import React from 'react'
import { Marker } from '@react-google-maps/api'
import icon from '../../Assets/dot.png'

const currentPositionMarker = (props) => {


    return (
        <div style={styles.markerwrapper}>
            <Marker icon={{ url: icon }}  opacity={1} animation={2} position={props.currentPosition} />
        </div>
    )
}

export default currentPositionMarker;

const styles = {
    markerwrapper : {
        backgroundColor: 'red',
        zIndex: 1000000,
        width: 50,
        height: 50
        
    }
}