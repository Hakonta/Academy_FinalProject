import React from 'react'
import Tier from '../../Assets/Tier.png'
import Voi from '../../Assets/Voi.png'
import Battery from '../../Assets/Battery.png'

const styles = {
outerContainer: {
    display:"flex"
},
innerContainer: {
    display:"flex", flexDirection:"column", justifyContent:"center"
},
cardDiv:  { 
    display:"flex", flexDirection:"column",  alignItems:"center"
},
button: { 
    backgroundColor:"darkGreen", color:"white", alignText: "center", fontSize: "26px"

},
}

const getProviderImage = (provider) => {
    switch (provider) {
        case 'Tier': return Tier
        case 'Voi': return Voi
        // TODO: Add cases and images for Zvipp and Flash

    }
}

export default function InfoCard(props)
{
// TODO: Replace inline styling with an style variable. 
    return (
        <div style={styles.outerContainer}><div style={styles.innerContainer}>
        <div style={styles.cardDiv}><img src={getProviderImage(props.providerName)} alt={props.providerName}></img>
        <h1><img src={Battery}></img>&nbsp;{props.battery} %</h1><h3>10 kr + 2 kr/min<br></br></h3><button style={styles.button}>Start Ride</button><br></br>
        </div></div></div>
    )
}