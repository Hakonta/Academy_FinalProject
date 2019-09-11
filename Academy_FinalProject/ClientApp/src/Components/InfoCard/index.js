import React from 'react'
import Tier from '../../Assets/Tier.png'
import Voi from '../../Assets/Voi.png'
import Battery from '../../Assets/Battery.png'
import Zvipp from '../../Assets/Zvipp.png' 
import Circ from '../../Assets/circ.png'
import {Button} from 'react-bootstrap';
import '../../Styles/style.css'


// const styles = {
// outerContainer: {
//     display:"flex", position:"fixed", left:"0%", bottom:"0%", height:"22%", width:"100%", zIndex:"1000000", backgroundColor: "rgba(255, 255, 255, 0.8)", color:"black", justifyContent: "space-evenly", boxShadow: "0 -5px 5px -5px #D7D7D7"
// },
// innerContainer: {
//     display:"flex", flexDirection:"row", marginTop: "20px"
// },
// cardDiv:  { 
//     display:"flex", flexDirection:"column",  alignItems:"center", marginLeft: "25px"
// },
// }
// This is image that is displayed on Footermenu
const getProviderImage = (provider) => {
    switch (provider) {
        case 'Tier': return Tier
        case 'Voi': return Voi
        case 'Zvipp': return Zvipp
        case 'Flash': return Circ

    }
}
// The toggleRideCard get it props from the MapBaseView where it's called
export default function InfoCard(props)
{
    return (
        <div className={'infoCardOuterContainer'}><div className={'infoCardinnerContainer'}><img src={getProviderImage(props.providerName)} alt={props.providerName} height="120px"></img>
        <div className={'infoCardDiv'}>
        <h4><img src={Battery}></img>&nbsp;{props.battery} %</h4><p>10 kr + 2 kr/min<br></br></p>
        <button className={'startRideButton'} block onClick={() => { props.toggleRideCard()}}>Start Ride</button>
        </div></div></div>
        
        
        
    )
}