import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Checkout extends React.Component {
  onToken = (token, addresses) => {
    console.log(token)
    console.log(addresses)
    // TODO: Send the token information and any other
    // relevant information to your payment process
    // server, wait for the response, and update the UI
    // accordingly. How this is done is up to you. Using
    // XHR, fetch, or a GraphQL mutation is typical.

    //fetch, backend implementasjonen mot stripe, backend må ha et api-endepunkt som går mot klienten
  };

  // render() {
  //   return (
  //     // <StripeCheckout
  //     //   amount="500"
  //     //   billingAddress
  //     //   description="Your SQT-ride"
  //     //   image="https://yourdomain.tld/images/logo.svg"
  //     //   locale="auto"
  //     //   name="SQT"
  //     //   stripeKey="pk_test_7fR8mYhqOb4p5RkeTP2Qlb3a00u5AA68Ufy"
  //     //   token={this.onToken}
  //     //   zipCode
  //     //   label="Pay with 💳"
  //     //   panelLabel="Cost of your ride: kr{amount}"
  //     // />

  //     // -- For å teste et kredittkort:
  //     // Card information	Value
  //     // Card number	4111 1111 1111 1111
  //     // Expiration date	12/21
  //     // CVV	111
  //   )
  // }
}