import React, { useState } from 'react'
import FilterIcon from '../../Assets/filterIcon.png'
import Tier from '../../Assets/Tier.png'
import Voi from '../../Assets/Voi.png'
import BikeIcon from '../../Assets/CityBikeIcon.jpg'
import Circ from '../../Assets/circ.png'
import Zvipp from '../../Assets/Zvipp.png'

const sortButton = (props) => {

    const [isClicked, setIsClicked] = useState(false);

    return (
        <React.Fragment>
            <div>
                <button
                    onClick={() => { setIsClicked(!isClicked) }}
                    style={{
                        ...styles.sortButton,
                        ...(isClicked ? styles.buttonClicked : null)
                    }}
                >
                    <img src={FilterIcon} alt={'sorticon'} style={{ width: 30 }} />
                </button>

                <div style={isClicked ? styles.card : styles.cardInActive}>
                    <img 
                        src={Voi} 
                        alt={'voi icon'}
                        style={{width: '100%',padding: 5,paddingTop: 10}}
                        onClick={()=>{props.setFilter('voi')}} />
                    <img
                        src={Tier}
                        alt={'tier icon'}
                        style={{ width: '100%',padding: 5}}
                        onClick={()=>{props.setFilter('tier')}} />
                    <img
                        src={Circ} alt={'circ icon'}
                        style={{ width: '100%', padding: 5 }}
                        onClick={()=>{props.setFilter('circ')}} />
                    <img
                        src={Zvipp}
                        alt={'zvipp icon'}
                        style={{ width: '100%', padding: 5 }}
                        onClick={()=>{props.setFilter('zvipp')}} />
                    <img
                        src={BikeIcon}
                        alt={'citybike icon'}
                        style={{ width: '100%', padding: 5 }}
                        onClick={()=>{props.setFilter('citybike')}} />
                </div>



            </div>
        </React.Fragment>


    )
}

export default sortButton;



const styles = {
    sortButton: {
        height: 40,
        width: 40,
        borderRadius: '10px 10px 10px 10px',
        border: '1px solid grey',
        backgroundColor: '#343a40',
        padding: 2,
        position: 'fixed',
        left: '5%',
        bottom: '11%',
        boxShadow: '0 2px #999',
        zIndex: 100,
        outline: 'none'
    },
    buttonClicked: {
        backgroundColor: '#4e5861',
        boxShadow: '0 0px #999',
        border: 'none'
    },
    card: {
        width: 40,
        height: 200,
        borderRadius: '10px 10px 10px 10px',
        border: '1px solid grey',
        backgroundColor: '#4e5861',
        color: '#ffffff',
        padding: 2,
        position: 'fixed',
        left: '5%',
        bottom: '14%',
        opacity: '1',
        transition: '100ms ease-out'
    },
    cardInActive: {
        height: 50,
        width: 40,
        borderRadius: '10px 10px 10px 10px',
        border: '1px solid grey',
        backgroundColor: '#343a40',
        color: '#ffffff',
        padding: 2,
        position: 'fixed',
        left: '5%',
        bottom: '15%',
        zIndex: -100000,
        opacity: '0',
    }

}

