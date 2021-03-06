import React, { useState, useEffect } from 'react';
import { Router } from '@reach/router';
import jwt_decode from 'jwt-decode';
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
	const [user, setUser] = useState({});

	useEffect(() => {
		try {
			const jwt = localStorage.getItem('token');
			setUser(jwt_decode(jwt));
			Object.keys(jwt).length !== 0 ? setloggedIn(true) : setloggedIn(false);
			console.log(jwt_decode(jwt));
		} catch (error) {}
	}, []);

	// useEffect(() => console.log(user), [user]);

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
