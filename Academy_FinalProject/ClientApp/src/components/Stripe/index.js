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
        stripeKey="your_PUBLISHABLE_stripe_key"
        token={this.onToken}
      />
    )
  }
}

// -- For å teste et kredittkort:
// Card information	Value
// Card number	4111 1111 1111 1111
// Expiration date	12/21
// CVV	111