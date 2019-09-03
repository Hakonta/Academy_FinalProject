import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
<<<<<<< HEAD
import {Nav, Navbar, Button} from 'react-bootstrap';
=======
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import {Navbar} from 'react-bootstrap';
>>>>>>> 4d1fa36edd2605c3410afd3c00241835cadd0822

const styles={
  backgroundColor: 'black',
  color:'grey',
<<<<<<< HEAD
  height: '60px'
 
=======
}
const styles2={
  color:'grey',
  textAlign: 'center',
  fontSize: '10px',
  display: 'center',
  height: '70px'
  
>>>>>>> 4d1fa36edd2605c3410afd3c00241835cadd0822
}

const center={display: 'flex', justifyContent: 'center'}

export class FooterBar extends React.Component{
<<<<<<< HEAD
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

=======
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
>>>>>>> 4d1fa36edd2605c3410afd3c00241835cadd0822

