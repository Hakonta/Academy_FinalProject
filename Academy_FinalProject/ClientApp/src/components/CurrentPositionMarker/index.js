import React from 'react'
import { Marker } from '@react-google-maps/api'
import Here from '../../Assets/newMarker2.png'
import '../../Styles/style.css'


const currentPositionMarker = (props) => {
   return (
          <div className='container'>
                <span className='pulse-button'>
                        <Marker
                        position={props.position}
                        icon={{url:Here}}
                        className={'myPositionMarker'}/>
                </span>
           </div> 
   )
}
// const Styles={
//         marker:{
//         height: 20,
//         width: 20,
//         zIndex: 100,
//         }
//     }
export default currentPositionMarker;

