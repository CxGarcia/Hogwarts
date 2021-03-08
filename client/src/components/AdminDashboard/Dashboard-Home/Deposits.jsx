import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from '../Title';

function preventDefault(event) {
	event.preventDefault();
}

const useStyles = makeStyles({
	depositContext: {
		flex: 1,
	},
	depositContainer: {
		marginTop: 50,
		marginLeft: 'auto',
		marginRight: 'auto',
	},
});

export default function Deposits({ totalCost }) {
	const classes = useStyles();

	return (
		<div className={classes.depositContainer}>
			<Title>Recent Deposits</Title>
			<Typography component="p" variant="h4">
				${totalCost}
			</Typography>
			<Typography color="textSecondary" className={classes.depositContext}>
				{`${new Date().getDate()} /${new Date().getMonth()}/${new Date().getFullYear()}`}
			</Typography>
		</div>
	);
}
