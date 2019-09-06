import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Navbar} from 'react-bootstrap';


const footerBar = (props) => {
  
  return (
      <div >
      <Navbar bg="dark" expand="xl" >
        
        {/* TODO: her burde vi få sentrert de to knappene(QR scan og nearby) */}
    
            <Button variant="outline-secondary" size="lg">QR Scan</Button>
            <Button variant="outline-secondary" size="lg">Nearby</Button>
            <Button variant="outline-secondary" size="lg" onClick={() => { props.toggleSortCard() }}>Sort</Button>
            <Button variant="outline-secondary" size="lg" onClick={() => { props.toggleStripe() }}>Pay</Button>

        {/* <div className="fixed-bottom">
        <Card.Footer className="text-muted" style={{fontSize: '10px'}}>This webpage was created by Academy students from batch #1</Card.Footer>
       </div> */}
      
    </Navbar>
      </div>
);
}

export default footerBar