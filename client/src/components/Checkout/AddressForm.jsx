import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { useForm } from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';

export default function AddressForm({ createOrder, handleNext, user }) {
	const useStyles = makeStyles((theme) => ({
		button: {
			marginTop: theme.spacing(4),
			marginLeft: theme.spacing(50),
			marginBottom: theme.spacing(2),
		},
	}));

	const classes = useStyles();

	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => {
		const { name, email, mobile, address, ApartmentSize, rooms, date } = data;
		let amount = 0;

		if (ApartmentSize > 100) {
			if (rooms == 2) amount = 50;
			if (rooms == 3) amount = 60;
			if (rooms == 4) amount = 70;
			if (rooms >= 4) amount = 80;
		} else {
			amount = 40;
		}

		createOrder(
			'Home Cleaning',
			name,
			email,
			mobile,
			address,
			ApartmentSize,
			rooms,
			date,
			amount
		);
		handleNext();
	};

	return (
		<React.Fragment>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Typography variant="h6" gutterBottom>
					Service Details
				</Typography>
				<Grid container spacing={3}>
					<Grid item xs={12}>
						<TextField
							required
							id="name"
							name="name"
							value={Object.keys(user).length !== 0 ? user.name : null}
							label="Name"
							fullWidth
							autoComplete="given-name"
							inputRef={register}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							id="email"
							name="email"
							value={Object.keys(user).length !== 0 ? user.email : null}
							label="Email"
							fullWidth
							autoComplete="email"
							inputRef={register}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							id="mobile"
							name="mobile"
							value={Object.keys(user).length !== 0 ? user.phone : null}
							label="Mobile"
							fullWidth
							autoComplete="mobile"
							inputRef={register}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							id="Apartment-size"
							name="ApartmentSize"
							label="Apartment-size"
							fullWidth
							autoComplete="Apartment-size"
							inputRef={register}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							id="rooms"
							name="rooms"
							label="Number of rooms"
							fullWidth
							autoComplete="rooms"
							inputRef={register}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							required
							id="address"
							name="address"
							label="Address"
							value={Object.keys(user).length !== 0 ? user.location : null}
							fullWidth
							autoComplete="shipping address"
							inputRef={register}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							id="datetime-local"
							name="date"
							label="Preferred Date & Time"
							type="datetime-local"
							fullWidth
							InputLabelProps={{
								shrink: true,
							}}
							inputRef={register}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							id="info"
							name="info"
							label="Other Information"
							fullWidth
							autoComplete="info"
							inputRef={register}
						/>
					</Grid>
					<Button
						variant="contained"
						color="primary"
						type="submit"
						className={classes.button}
					>
						Confirm Order
					</Button>
				</Grid>
			</form>
		</React.Fragment>
	);
}
