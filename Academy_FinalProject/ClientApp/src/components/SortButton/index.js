import React from 'react'
import FilterIcon from '../../Assets/filterIcon.png'

const sortButton = (props) => {
    return (
        <React.Fragment>
            <button style={styles.sortButton} onClick={() => { props.toggleSortCard() }}> <img src={FilterIcon} alt={'sorticon'} style={{width:30}}/>  </button>
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
        color: '#ffffff',
        padding: 2,
        position: 'fixed',
        left: '45%',
        bottom: '11%',
        zIndex: 100,
    },
}

