import React, { useState } from 'react';
import { Router } from '@reach/router';
import Home from './Home/Home';
import Footer from './Common/Footer/Footer';
import Nav from './Common/Nav/Nav';
import Checkout from './Checkout/Checkout';
import Login from './LogIn/Login';
import SignUp from './SignUp/SignUp';
import Profile from './Profile/Profile';
import postOrder from './../Services/order';

const App = () => {
	const [loggedIn, setloggedIn] = useState(false);
	const [admin, setAdmin] = useState(false);

	const [order, setOrder] = useState({
		serviceName: '',
		customerName: '',
		customerEmail: '',
		customerMobile: '',
		customerAddress: '',
		apartmentSize: '',
		roomsCount: '',
		orderDate: '',
		cost: '',
	});

	const isLoggedIn = (loggedIn) => {
		if (loggedIn == true) {
			setloggedIn(true);
		}
	};
	const isAdmin = (admin) => {
		if (admin == true) {
			setAdmin(true);
		}
	};

	const createOrder = async (
		serviceName,
		customerName,
		customerEmail,
		customerMobile,
		customerAddress,
		apartmentSize,
		roomsCount,
		orderDate,
		cost
	) => {
		console.log('I am Here in create order');
		setOrder({
			serviceName,
			customerName,
			customerEmail,
			customerMobile,
			customerAddress,
			apartmentSize,
			roomsCount,
			orderDate,
			cost,
		});

		const created = await postOrder(cost, 'Visa', serviceName, 1, 1);
	};

	return (
		<>
			<Nav loggedIn={loggedIn} />
			<Router>
				<Home path="/" loggedIn={loggedIn} />
				<Login path="/login" isLoggedIn={isLoggedIn} isAdmin={isAdmin} />
				<SignUp path="/signUp" />
				<Checkout path="/checkout" createOrder={createOrder} order={order} />
				<Profile path="/profile" />
			</Router>
			<Footer />
		</>
	);
};

export default App;
