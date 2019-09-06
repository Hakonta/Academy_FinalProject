import React from 'react'
import Tier from '../../Assets/Tier.png'
import Voi from '../../Assets/Voi.png'
import Battery from '../../Assets/Battery.png'

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
        <div style={{ backgroundColor: 'white'}}><h1>{props.providerName}</h1><img src={getProviderImage(props.providerName)} alt={'So empty...'} borderRadius="50px"></img><br></br>
        <h1><img src={Battery}></img>&nbsp;{props.battery} %<br></br></h1><h2>10 kr + 2 kr/min<br></br><br></br><button style={{backgroundColor: 'darkGreen', color: 'white'}}>Start Ride</button></h2>
        </div>
    )
}