import React from 'react';


const sortCard = () => {
    return (
        <div style={styles.card}>
           
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

    )
}

export default sortCard;

const styles = {

    card: {
        height: 100,
        width: '70%',
        borderRadius: '10px 10px 10px 10px',
        border: '1px solid grey',
        backgroundColor: '#343a40',
        color: '#ffffff',
        padding: 20,
        margin: 'auto',
        position: 'fixed',
        left: '15%',
        bottom: '20%',
        zIndex: 100,
        transition: 'width 2s'
    },
    checkbox: {
        marginLeft: 5
    },
    label:{
        margin: 5
    }
}