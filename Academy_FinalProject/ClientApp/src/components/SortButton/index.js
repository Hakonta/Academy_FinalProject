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

                        
                            <img src={Voi} alt={'voi icon'} style={{ width: 25 }} /> 
                            <img src={Tier} alt={'tier icon'} style={{ width: 25 }} /> 
                            <img src={Circ} alt={'circ icon'} style={{ width: 25 }} /> 
                            <img src={Zvipp} alt={'zwipp icon'} style={{ width: 25 }} /> 
                            <img src={BikeIcon} alt={'citybike icon'} style={{ width: 25 }} /> 

                    
                        
                           
                        

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
        left: '45%',
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
    card:{
        width: 40,
        height: 200,
        borderRadius: '10px 10px 10px 10px',
        border: '1px solid grey',
        backgroundColor: '#4e5861',
        color: '#ffffff',
        padding: 2,
        position: 'fixed',
        left: '45%',
        bottom: '12%',
        opacity: '1',
        transition: '300ms ease-out'
    },
    cardInActive:{
        height: 40,
        width: 40,
        borderRadius: '10px 10px 10px 10px',
        border: '1px solid grey',
        backgroundColor: '#343a40',
        color: '#ffffff',
        padding: 2,
        position: 'fixed',
        left: '45%',
        bottom: '11%',
        zIndex: -100000,
        opacity: '0',
        transition: '1s ease-out'
    }

}

