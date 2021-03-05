import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';

import {
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

const CheckoutForm = ({ success }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (!error) {
      const { id } = paymentMethod;

      try {
        const { data } = await axios.post(
          'http://localhost:4000/create-checkout-session',
          {
            id,
            amount: 1099,
            description: 'test',
          }
        );
        console.log(data);
        success();
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ margin: '0 auto' }}
    >
      <h2>Price: $10.99 USD</h2>

      <CardElement />

      <Button
        variant="contained"
        color="primary"
        type="submit"
        disabled={!stripe}>Place order</Button>
    </form>
  );
};



export default CheckoutForm;