import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import {Navbar} from 'react-bootstrap';

const styles={
  backgroundColor: 'black',
  color:'grey',
}
const styles2={
  color:'grey',
  textAlign: 'center',
  fontSize: '10px',
  display: 'center',
  height: '70px'
  
}

const center={display: 'flex', justifyContent: 'center'}

export class FooterBar extends React.Component{
  render() {
    return (
        <Navbar bg="dark" expand="xl" fixed="bottom">
          <br></br>
          <Button href="bruker" variant="dark">
          <i class="material-icons">
            person
            </i>
          </Button>
          <Button href="meny" variant="dark">
          <i class="material-icons">
            person
            </i>
          </Button>
          <br></br>
        </Navbar>
    );
  }
}


