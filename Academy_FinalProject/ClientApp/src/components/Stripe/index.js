import StripeCheckout from 'react-stripe-checkout';
import React from 'react';
import Button from 'react-bootstrap/Button';
import { Navbar} from 'react-bootstrap';



const paymentButton = (props) => {
  
  return (
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
            // cardNr: 4242424242424242
            // date: 12/12
            // CVC: 111
);
}


export default paymentButton
