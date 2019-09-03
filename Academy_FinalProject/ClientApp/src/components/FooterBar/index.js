import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Navbar } from 'react-bootstrap';

const styles2={
  color:'grey',
  textAlign: 'center',
  fontSize: '10px',
  display: 'center',
  height: '70px',
  display: 'flex',
  justifyContent: 'center'
}

export class FooterBar extends React.Component{
  render(){
  return (
      <div className="fixed-bottom">
      <Navbar bg="dark" expand="xl" fixed='bottom'>

        <br></br>
        {/* TODO: her burde vi få sentrert de to knappene(QR scan og nearby) */}
    
            <Button variant="outline-secondary" size="lg">QR Scan</Button>
            <Button variant="outline-secondary" size="lg">Nearby</Button>
         

        {/* <div className="fixed-bottom"> */}
        {/* <Card.Footer className="text-muted" style={{fontSize: '10px'}}>This webpage was created by Academy students from batch #1</Card.Footer> */}
       {/* </div> */}
       <br></br>
        </Navbar>
      </div>
);
}}

