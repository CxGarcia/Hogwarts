import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

export default function Review({ order }) {
	const products = [
		{ name: order.serviceName, desc: 'Full Home Cleaning', price: order.cost },
	];
	const addresses = order.customerAddress;

	const useStyles = makeStyles((theme) => ({
		listItem: {
			padding: theme.spacing(1, 0),
		},
		total: {
			fontWeight: 700,
		},
		title: {
			marginTop: theme.spacing(2),
		},
	}));

	const classes = useStyles();
	return (
		<React.Fragment>
			<Typography variant="h6" gutterBottom>
				Order summary
			</Typography>
			<List disablePadding>
				<ListItem className={classes.listItem}>
					<ListItemText
						primary={order.serviceName}
						secondary={'Full Home Cleaning'}
					/>
					<Typography variant="body2">{order.cost}</Typography>
				</ListItem>

				<ListItem className={classes.listItem}>
					<ListItemText primary="Total" />
					<Typography variant="subtitle1" className={classes.total}>
						{order.cost}
					</Typography>
				</ListItem>
			</List>
			<Grid container spacing={2}>
				<Grid item xs={12} sm={6}>
					<Typography variant="h6" gutterBottom className={classes.title}>
						Address
					</Typography>
					<Typography gutterBottom>{order.customerName}</Typography>
					<Typography gutterBottom>{order.customerAddress}</Typography>
				</Grid>
			</Grid>
		</React.Fragment>
	);
}
