import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const sortCard = () => {
    return(
        <div style={styles.card}>
            Sort Card
        </div>

    )
}

export default sortCard;

const styles = {

    card:{
        height: 100,
        width: '100%',
        backgroundColor: '#343a40',
        color: '#ffffff',
        padding: 20
    }
}