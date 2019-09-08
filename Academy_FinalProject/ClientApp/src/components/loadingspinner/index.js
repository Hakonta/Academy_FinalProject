import React from 'react'
import Spinner from 'react-bootstrap/Spinner'

const loadingSpinner = () =>{

    return(
        <Spinner animation="border" role="status" style={Styles.spinner}>
        <span className="sr-only">Loading...</span>
      </Spinner>
    )
}
export default loadingSpinner;

const Styles={
    spinner:{
        position: 'fixed',
        left: '45%',
        bottom: '45%',
        zIndex: 100,
    }
}