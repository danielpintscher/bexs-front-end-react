import React from 'react';
import Hero from './Checkout/Hero.js';
import Steps from './Checkout/Steps.js';
import Form from './Checkout/Form.js';

import './Checkout.scss';

class Checkout extends React.Component {

  render() {
    return (
      <div className="checkout">
        <Hero />
        <Steps />
        <Form />
      </div>
    );
  }
}
  
  export default Checkout;