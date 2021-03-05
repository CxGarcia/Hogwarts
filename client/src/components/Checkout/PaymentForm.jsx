import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Typography from '@material-ui/core/Typography';
import CheckoutForm from './../../Services/payment';

const stripePromise = loadStripe(
	'pk_test_51IQB1zJgjiR5JIS9aB81HFYQ1HxdIjbgkxf2K1OYnrpzKW5hnAtfM9mkMkQh8cQ5ukkyxF87FriI4db16ASz8kNJ00C0ZWxaxX'
);

const PaymentForm = () => {
	const [status, setStatus] = React.useState('ready');

	if (status === 'success') {
		return (
			<React.Fragment>
				<Typography variant="h5" gutterBottom>
					Thank you for your booking.
				</Typography>
				<Typography variant="subtitle1">
					Your booking request confirmed. We have emailed your booking
					confirmation, and will send you an update when your booking is Done.
				</Typography>
				<Typography variant="h6" gutterBottom>
					Now relax & Let the magic happen.
				</Typography>
			</React.Fragment>
		);
	}

	return (
		<Elements stripe={stripePromise}>
			<CheckoutForm
				success={() => {
					setStatus('success');
				}}
			/>
		</Elements>
	);
};

export default PaymentForm;
