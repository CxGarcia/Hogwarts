import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import pay from './../../Services/payment';

const Payment = (order) => {
	const publishableKey =
		'pk_test_51IQB1zJgjiR5JIS9aB81HFYQ1HxdIjbgkxf2K1OYnrpzKW5hnAtfM9mkMkQh8cQ5ukkyxF87FriI4db16ASz8kNJ00C0ZWxaxX';

	console.log(order);
	const onSubmit = (token) => {
		pay(order.order.cost, token);
	};

	return (
		<StripeCheckout
			label="Place Order"
			name="Hogwarts"
			description="Just like Magic ."
			panelLabel="Abra Kadabra"
			token={onSubmit}
			stripeKey={publishableKey}
			billingAddress={false}
		/>
	);
};

export default Payment;
