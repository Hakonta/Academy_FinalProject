import React from 'react';


const sortCard = () => {
    return (
        <div style={styles.card}>
            <form>
                <div>
                    <label for="voi" style={styles.label} >Voi</label>
                    <input 
                    type="checkbox" 
                    name="scooter" 
                    id="voi" 
                    style={styles.checkbox} 
                    
                    />

                    <label for="tier"style={styles.label} >Tier</label>
                    <input type="checkbox" name="scooter" id="tier" style={styles.checkbox} />
                </div>
                <div>
                    <label for="flash"style={styles.label} >Flash</label>
                    <input type="checkbox" name="scooter" id="flash" style={styles.checkbox} />

                    <label for="zwipp"style={styles.label} >Zwipp</label>
                    <input type="checkbox" name="scooter" id="zwipp" style={styles.checkbox} />
                </div>
            </form>
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
    },
    checkbox: {
        marginLeft: 5
    },
    label:{
        margin: 5
    }
}