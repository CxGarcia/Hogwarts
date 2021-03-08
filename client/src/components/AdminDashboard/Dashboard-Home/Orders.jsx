import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../Title';
const axios = require('axios');

function preventDefault(event) {
	event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
	seeMore: {
		marginTop: theme.spacing(3),
	},
}));

export default function Orders({ orders }) {
	const classes = useStyles();

	return (
		<React.Fragment>
			<Title>Recent Orders</Title>
			<Table size="small">
				<TableHead>
					<TableRow>
						<TableCell>Date</TableCell>
						<TableCell>Service</TableCell>
						<TableCell>Ship To</TableCell>
						<TableCell>Payment Method</TableCell>
						<TableCell align="right">Sale Amount</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{Object.keys(orders).length !== 0 ? (
						orders.map((order) => (
							<TableRow key={order.id}>
								<TableCell>{order.createdAt}</TableCell>
								<TableCell>{order.CustomerId}</TableCell>
								<TableCell>{order.TechnicianId}</TableCell>
								<TableCell>{order.paymentMethod}</TableCell>
								<TableCell align="right">{order.cost}</TableCell>
							</TableRow>
						))
					) : (
						<h1>waiting for order</h1>
					)}
				</TableBody>
			</Table>
			<div className={classes.seeMore}>
				<Link color="primary" href="#" onClick={preventDefault}>
					See more orders
				</Link>
			</div>
		</React.Fragment>
	);
}
