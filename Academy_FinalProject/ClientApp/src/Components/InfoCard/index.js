import React from 'react'
import Tier from '../../Assets/Tier.png'
import Voi from '../../Assets/Voi.png'
import Battery from '../../Assets/Battery.png'
import Zvipp from '../../Assets/Zvipp.png' 
import Circ from '../../Assets/circ.png'
import '../../Styles/style.css'


// This is image that is displayed on Footermenu
const getProviderImage = (provider) => {
    switch (provider) {
        case 'Tier': return Tier
        case 'Voi': return Voi
        case 'Zvipp': return Zvipp
        case 'Flash': return Circ
        default: return null
    }
}
const getProviderApp = (provider) => {
    switch (provider) {
        case 'Tier': return "https://app.adjust.com/93rqtl6?redirect_android=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.tier.app&amp;redirect_ios=https%3A%2F%2Fitunes.apple.com%2Fde%2Fapp%2Ftier%2Fid1436140272"
        case 'Voi': return "https://app.adjust.com/48s7k5x"
        case 'Zvipp': return Zvipp
        case 'Flash': return Circ
        default: return null
    }
 }


// The toggleRideCard get it props from the MapBaseView where it's called
export default function InfoCard(props)
{
    return (

        <div className={'infoCardOuterContainer' } style = {{fontFamily:"'Red Hat Display', sans-serif"}}>
            <div className={'infoCardinnerContainer'}>
                <div className='box1'>
                    <img src={getProviderImage(props.providerName)} alt={props.providerName} height="90vh" width="90vw"></img>
                </div>
                <div className='box2'>
                        <h4><img src={Battery} height="15px" alt="battery icon" ></img>&nbsp;{props.battery}%</h4> 
                        <p>10 kr + 2kr/min</p> 
                </div>
                <div className='box3'>
                    <button style = {{fontFamily:"'Red Hat Display', sans-serif"}} className={'btncards'} block onClick={() => { props.toggleRideCard()}}>Start Ride</button>
                    <button style = {{fontFamily:"'Red Hat Display', sans-serif"}} className={'whitebtncards'}>
                         <a className={'whiteproviderLinks'} href={getProviderApp(props.providerName)}>Go to {props.providerName}</a>
                        </button>
                </div>
            </div>
        </div>
    )
}