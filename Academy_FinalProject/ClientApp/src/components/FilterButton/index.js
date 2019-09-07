import React, { useState } from 'react'
import FilterIcon from '../../Assets/filterIcon.png'
import Tier from '../../Assets/Tier.png'
import Voi from '../../Assets/Voi.png'
import BikeIcon from '../../Assets/CityBikeIcon.jpg'
import Circ from '../../Assets/circ.png'
import Zvipp from '../../Assets/Zvipp.png'

const sortButton = (props) => {

    const [isClicked, setIsClicked] = useState(false);
    const [voiIsClicked, setVoiIsClicked] = useState(true);
    const [tierIsClicked, setTierIsClicked] = useState(true);
    const [circIsClicked, setCircIsClicked] = useState(true);
    const [zvippIsClicked, setZvippIsClicked] = useState(true);
    const [citybikeIsClicked, setcitybikeIsClicked] = useState(true);




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
                        style={voiIsClicked ? styles.images : styles.imagesInactive}
                        onClick={()=>{props.setFilter('voi'), setVoiIsClicked(!voiIsClicked)}} />
                    <img
                        src={Tier}
                        alt={'tier icon'}
                        style={tierIsClicked ? styles.images : styles.imagesInactive}
                        onClick={()=>{props.setFilter('tier'), setTierIsClicked(!tierIsClicked)}} />
                    <img
                        src={Circ} alt={'circ icon'}
                        style={circIsClicked ? styles.images : styles.imagesInactive}
                        onClick={()=>{props.setFilter('circ'), setCircIsClicked(!circIsClicked)}} />
                    <img
                        src={Zvipp}
                        alt={'zvipp icon'}
                        style={zvippIsClicked ? styles.images : styles.imagesInactive}
                        onClick={()=>{props.setFilter('zvipp'), setZvippIsClicked(!zvippIsClicked)}} />
                    <img
                        src={BikeIcon}
                        alt={'citybike icon'}
                        style={citybikeIsClicked ? styles.images : styles.imagesInactive}
                        onClick={()=>{props.setFilter('citybike'), setcitybikeIsClicked(!citybikeIsClicked)}} />
                </div>
            </div>
        </React.Fragment>
    )
}

export default sortButton;



const styles = {
    sortButton: {
        height: 50,
        width: 50,
        borderRadius: '10px 10px 10px 10px',
        border: '1px solid grey',
        backgroundColor: '#343a40',
        padding: 2,
        position: 'fixed',
        left: '5%',
        bottom: '11%',
        boxShadow: ' 20px 21px 63px -9px rgba(0,0,0,0.58)',
        zIndex: 100,
        outline: 'none'
    },
    buttonClicked: {
        
        boxShadow: ' 20px 21px 63px -9px rgba(0,0,0,0.58)',
        border: 'none'
    },
    card: {
        width: 50,
        height: 250,
        borderRadius: '10px 10px 10px 10px',
        border: '1px solid grey',
        boxShadow: ' 20px 21px 63px -9px rgba(0,0,0,0.58)',
        backgroundColor: '#343a40',
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
        width: 50,
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
    },
    images:{
        borderRadius: '10px 10px 10px 10px',
        width: '100%', 
        padding: 10
    },
    imagesInactive:{
        opacity: '0.5',
        borderRadius: '10px 10px 10px 10px',
        width: '100%', 
        padding: 10
    }
}

