import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import {Nav, Navbar, Button} from 'react-bootstrap';

const styles={
  backgroundColor: 'black',
  color:'grey',
  height: '60px'
 
}


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


