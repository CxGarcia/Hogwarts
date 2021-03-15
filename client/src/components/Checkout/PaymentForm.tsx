import React from 'react';
import StripeCheckout, { Token } from 'react-stripe-checkout';
import OrderInterface from 'types/orders';
import pay from '../../Services/payment';

const Payment: React.FC<{ order: OrderInterface | null }> = ({ order }) => {
  const publishableKey = 'pk_test_51IQB1zJgjiR5JIS9aB81HFYQ1HxdIjbgkxf2K1OYnrpzKW5hnAtfM9mkMkQh8cQ5ukkyxF87FriI4db16ASz8kNJ00C0ZWxaxX';

  const onSubmit = (token: Token) => {
    if (order) pay(order.cost, token);
  };

  return (
    <StripeCheckout
      label="Place Order"
      name="Hogwarts"
      description="Just like Magic."
      panelLabel="Abra Kadabra"
      token={onSubmit}
      stripeKey={publishableKey}
      billingAddress={false}
    />
  );
};

export default Payment;
