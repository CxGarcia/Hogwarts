import React, { useState, useEffect, MouseEventHandler } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { mainListItems } from './listItems';
import DashboardHome from './Dashboard-Home/DashboardHome';
import DashboardTechnician from './Dashboard-Technicians/DashboardTechnicians';
import DashboardCustomer from './Dashboard-Customers/DashboardCustomer';
import DashboardService from './Dashboard Services/DashboardServices';
import { useParams, RouteComponentProps } from "@reach/router"
import { getServices } from '../../Services/ServicesService';
import { getCustomers } from '../../Services/customersService';
import { getTechnicians } from '../../Services/techniciansService';
import CustomerInterface from 'types/customers';

const drawerWidth = 240;

interface DashboardProps {
	orders: any[];
	totalCost: number;
	logOut: MouseEventHandler<HTMLElement>;
	path: RouteComponentProps;
	user: object;
}

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	toolbar: {
		paddingRight: 24,
		backgroundColor: '#5F4DEE',
		height: '80px',
	},
	toolbarIcon: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: '0 8px',

		...theme.mixins.toolbar,
	},

	appBarShift: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	menuButton: {
		marginRight: 36,
	},
	menuButtonHidden: {
		display: 'none',
	},
	title: {
		flexGrow: 1,
	},
	drawerPaper: {
		position: 'relative',
		whiteSpace: 'nowrap',
		width: drawerWidth,
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	drawerPaperClose: {
		overflowX: 'hidden',
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		width: theme.spacing(7),
		[theme.breakpoints.up('sm')]: {
			width: theme.spacing(9),
		},
	},
}));

const Dashboard: React.FC<DashboardProps> = ({ orders, totalCost, logOut }) => {
	const [services, setServices] = useState([]);
	const [customers, setCustomers] = useState([]);
	const [technicians, setTechnicians] = useState([]);

  useEffect(() => {
    // TODO: remove types any
		getServices().then((res: any) => setServices(res));
		getCustomers().then((value: any) => setCustomers(value));
		getTechnicians().then((res: any) => setTechnicians(res));
	}, []);

	console.log(technicians);

	const params = useParams();
	const dashRouter = (params: any) => {
		switch (params.dashboard) {
			case 'home':
				return <DashboardHome orders={orders} totalCost={totalCost} />;
			case 'technician':
				return <DashboardTechnician technicians={technicians} />;
			case 'customers':
				return <DashboardCustomer customers={customers} />;
			case 'Services':
				return <DashboardService services={services} />;
			default:
				return <DashboardHome orders={orders} totalCost={totalCost} />;
		}
	};

	const classes = useStyles();
	const [open, setOpen] = React.useState(true);
	const handleDrawerOpen = () => {
		setOpen(true);
	};
	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar
				position="absolute"
				//TODO className={clsx(classes.appBar, open && classes.appBarShift)}
			>
				<Toolbar className={classes.toolbar}>
					<IconButton
						edge="start"
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						className={clsx(
							classes.menuButton,
							open && classes.menuButtonHidden,
						)}
					>
						<MenuIcon />
					</IconButton>
					<Typography
						component="h1"
						variant="h6"
						color="inherit"
						noWrap
						className={classes.title}
					>
						Dashboard
					</Typography>
					<IconButton color="inherit">
						<Badge badgeContent="bye" onClick={logOut} color="secondary">
							<ExitToAppIcon />
						</Badge>
					</IconButton>
				</Toolbar>
			</AppBar>
			<Drawer
				variant="permanent"
				classes={{
					paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
				}}
				open={open}
			>
				<div className={classes.toolbarIcon}>
					<IconButton onClick={handleDrawerClose}>
						<ChevronLeftIcon />
					</IconButton>
				</div>
				<Divider />
				<List>{mainListItems}</List>
				<Divider />
			</Drawer>
			{dashRouter(params)}
		</div>
	);
}

export default Dashboard