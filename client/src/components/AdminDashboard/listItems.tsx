import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import SettingsIcon from '@material-ui/icons/Settings';
import PersonIcon from '@material-ui/icons/Person';
import { Link } from '@reach/router';

export const mainListItems = (
	<div>
		<Link to="/admin/home">
			<ListItem button>
				<ListItemIcon>
					<DashboardIcon />
				</ListItemIcon>
				<ListItemText primary="Dashboard" />
			</ListItem>
		</Link>
		<Link to="/admin/customers">
			<ListItem button>
				<ListItemIcon>
					<PeopleIcon />
				</ListItemIcon>
				<ListItemText primary="Customers" />
			</ListItem>
		</Link>
		<Link to="/admin/Services">
			<ListItem button>
				<ListItemIcon>
					<SettingsIcon />
				</ListItemIcon>
				<ListItemText primary="Services" />
			</ListItem>
		</Link>
		<Link to="/admin/technician">
			<ListItem button>
				<ListItemIcon>
					<PersonIcon />
				</ListItemIcon>
				<ListItemText primary="Technicians" />
			</ListItem>
		</Link>
	</div>
);
