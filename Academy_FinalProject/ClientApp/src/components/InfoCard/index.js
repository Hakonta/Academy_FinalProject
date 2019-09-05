import React from 'react'
import Tier from '../../Assets/Tier.png'
import Voi from '../../Assets/Voi.png'
import Battery from '../../Assets/Battery.png'



export default function InfoCard()
{
    getProviderImage = (provider) => {
        switch (provider) {
            case 'Tier': return Tier
            case 'Voi': return Voi
            // TODO: Add cases and images for Zvipp and Flash

        }
    }
    return (
        <div style={{ backgroundColor: 'white'}}><h1>{this.state.selectedScooter.providerName}</h1><img src={this.getProviderImage(this.state.selectedScooter.providerName)} alt={'So empty...'} borderRadius="50px"></img><br></br>
        <h1><img src={Battery}></img>&nbsp;{this.state.selectedScooter.batteryCapacity} %<br></br></h1><h2>10 kr + 2 kr/min<br></br><br></br><button style={{backgroundColor: 'darkGreen', color: 'white'}}>Reserve</button></h2>
        </div>
    )
}