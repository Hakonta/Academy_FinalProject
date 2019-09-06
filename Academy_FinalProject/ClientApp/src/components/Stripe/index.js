import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

export default class Checkout extends React.Component {
  onToken = (token, addresses) => {
    // TODO: Send the token information and any other
    // relevant information to your payment process
    // server, wait for the response, and update the UI
    // accordingly. How this is done is up to you. Using
    // XHR, fetch, or a GraphQL mutation is typical.
  };

  render() {
    return (
      <StripeCheckout
        amount="500"
        billingAddress
        description="Awesome Product"
        image="https://yourdomain.tld/images/logo.svg"
        locale="auto"
        name="YourDomain.tld"
        stripeKey="pk_test_7fR8mYhqOb4p5RkeTP2Qlb3a00u5AA68Ufy"
        token={this.onToken}
        zipCode
        label="Pay with 💳"
        panelLabel="Cost of your ride: kr{{amount}}"
      />
    )
  }
}

// -- For å teste et kredittkort:
// Card information	Value
// Card number	4111 1111 1111 1111
// Expiration date	12/21
// CVV	111