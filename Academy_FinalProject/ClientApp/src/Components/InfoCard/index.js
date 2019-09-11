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
const getProviderApp = (provider) => {
    switch (provider) {
        case 'Tier': return "https://app.adjust.com/93rqtl6?redirect_android=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.tier.app&amp;redirect_ios=https%3A%2F%2Fitunes.apple.com%2Fde%2Fapp%2Ftier%2Fid1436140272"
        case 'Voi': return "https://app.adjust.com/48s7k5x"
        case 'Zvipp': return Zvipp
        case 'Flash': return Circ
    }
 }
// The toggleRideCard get it props from the MapBaseView where it's called
export default function InfoCard(props)
{
    return (

        <div className={'infoCardOuterContainer'}>
            <div className={'infoCardinnerContainer'}>
                <div className='box1'>
                    <img src={getProviderImage(props.providerName)} alt={props.providerName} height="62%"></img>
                </div>
                <div className='box2'>
                        <div>
                            <br></br>
                        <h4><img src={Battery} height="15px"></img>&nbsp;{props.battery}%</h4> 
                        </div>
                        <div>
                        <p>10 kr + 2 kr/min</p> 
                        </div>
                </div>
                <div className='box3'>
                    <button className={'startRideButton'} block onClick={() => { props.toggleRideCard()}}>Start Ride</button>
                    <br></br>
                    <button className={'startRideButton'}>
                         <a className={'providerLinks'} href={getProviderApp(props.providerName)}>Go to {props.providerName}</a>
                        </button>
                </div>
            </div>
        </div>
    )
}