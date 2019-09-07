import React from 'react';
import Button from 'react-bootstrap/Button';
import { Navbar} from 'react-bootstrap';
import StripeCheckout from 'react-stripe-checkout';



const footerBar = (props) => {
  
  return (
      <div style={{height: '10vh', width: '100vw'}}>
      <Navbar bg="dark" expand="xl" >
        
        {/* TODO: her burde vi få sentrert de to knappene(QR scan og nearby) */}
    
            <Button variant="outline-secondary" size="lg"> QR Scan </Button>
            <Button variant="outline-secondary" size="lg"> Nearby </Button>
            <StripeCheckout
              amount="500"
              billingAddress
              description="You will not be charged during checkout"
              image= "" // kanskje legge inn vår logo her?
              locale="auto"
              name="SQT - Find all rides"
              stripeKey="pk_test_7fR8mYhqOb4p5RkeTP2Qlb3a00u5AA68Uf"
              //token={this.onToken}
              zipCode
              label="Pay with 💩" //Copy-paste emoji from https://getemoji.com/
              panelLabel="Cost of your ride: kr 37,5"
            />
            
        {/* <div className="fixed-bottom">
        <Card.Footer className="text-muted" style={{fontSize: '10px'}}>This webpage was created by Academy students from batch #1</Card.Footer>
       </div> */}
      
    </Navbar>
      </div>
);
}

export default footerBar