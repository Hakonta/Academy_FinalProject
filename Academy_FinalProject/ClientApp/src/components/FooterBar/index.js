import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import {Navbar} from 'react-bootstrap';

const styles={
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
  render(){
  return (
      <div className="fixed-bottom">
      <Navbar bg="dark" expand="lg" fixed='bottom'>
          {/* <Nav.Link href="bruker" style={styles}>Bruker</Nav.Link> */}
        <div style ={center}>
          <ButtonToolbar style={styles}>
            <Button variant="outline-secondary" size="sm">QR Scan</Button>
            <Button variant="outline-secondary" size="sm">Nearby</Button>
          </ButtonToolbar>
        </div>
    
        <Card.Footer className="text-muted" style={styles2}>This webpage was created by Academy students from batch #1</Card.Footer>
        </Navbar>
    </div>
);
}}

