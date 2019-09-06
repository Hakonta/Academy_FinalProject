import React from 'react';
import Button from 'react-bootstrap/Button';
import { Navbar} from 'react-bootstrap';
import StripeCheckout from 'react-stripe-checkout';


const footerBar = (props) => {
  
  return (
      <div style={{height: '10vh', width: '100vw'}}>
      <Navbar bg="dark" expand="xl" >
        
        {/* TODO: her burde vi få sentrert de to knappene(QR scan og nearby) */}
    
            <Button variant="outline-secondary" size="lg">QR Scan</Button>
            <Button variant="outline-secondary" size="lg">Nearby</Button>
            
        {/* <div className="fixed-bottom">
        <Card.Footer className="text-muted" style={{fontSize: '10px'}}>This webpage was created by Academy students from batch #1</Card.Footer>
       </div> */}
      
    </Navbar>
      </div>
);
}

export default footerBar