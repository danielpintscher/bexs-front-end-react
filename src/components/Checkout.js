import React from 'react';
import Hero from './Checkout/Hero.js';
import Steps from './Checkout/Steps.js';
import Form from './Checkout/Form.js';
import { Provider } from 'react-redux';
import { Store } from '../store';

import './Checkout.scss';

class Checkout extends React.Component {

  render() {
    return (
      <Provider store={Store}>
        <div className="checkout">
          <Hero />
          <Steps />
          <Form />
        </div>
      </Provider>
    );
  }
}
  
  export default Checkout;