import React, { useState } from 'react'
import FilterIcon from '../../Assets/filterIcon.png'

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

                        <div>
                            <button>Voi</button>
                            <button>Tier</button>
                        </div>
                        <div>
                            <button>Circ</button>
                            <button>Zwipp</button>
                        </div>
                        <div>
                            <button>Bysykkel</button>
                        </div>

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
    },
    buttonClicked: {
        backgroundColor: '#4e5861',
        boxShadow: '0 0px #999',
    },
    card:{
        width: 200,
        height: 200,
        borderRadius: '10px 10px 10px 10px',
        border: '1px solid grey',
        backgroundColor: '#343a40',
        color: '#ffffff',
        padding: 2,
        position: 'fixed',
        left: '30%',
        bottom: '20%',
        transition: 'height 90ms ease-out'
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
        zIndex: -100000
    }

}

