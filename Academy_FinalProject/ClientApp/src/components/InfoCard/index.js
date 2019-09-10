import React from 'react'
import Tier from '../../Assets/Tier.png'
import Voi from '../../Assets/Voi.png'
import Battery from '../../Assets/Battery_transp.png'
import Zvipp from '../../Assets/Zvipp.png' 
import Circ from '../../Assets/circ.png'


const styles = {
outerContainer: {
    display:"flex", position:"fixed", left:"0%", bottom:"0%", height:"25%", width:"100%", zIndex:"1000000", backgroundColor:"#343a40", color:"white", justifyContent: "center",
},
innerContainer: {
    display:"flex", flexDirection:"row"
},
cardDiv:  { 
    display:"flex", flexDirection:"column",  alignItems:"center",
},
button: { 
    backgroundColor:"darkGreen", color:"white", alignText: "center", fontSize: "26px"

},
}
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
        <div style={styles.outerContainer}><div style={styles.innerContainer}><img src={getProviderImage(props.providerName)} alt={props.providerName}></img>
        <div style={styles.cardDiv}>
        <h1><img src={Battery}></img>&nbsp;{props.battery} %</h1><h4>10 kr + 2 kr/min<br></br></h4><button onClick={() => { props.toggleRideCard()}} style={styles.button}>Start Ride</button><br></br>
        </div></div></div>
    )
}