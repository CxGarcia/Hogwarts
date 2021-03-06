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
import getCustomerById from './../Services/customers';
const App = () => {
	//getting the logged in user if exist
	const [user, setUser] = useState({});
	useEffect(() => {
		const jwt = localStorage.getItem('token');
		console.log('JWT', jwt_decode(jwt).id);

		setUser(getCustomerById());
	}, []);

	// getuser;
	console.log('user', user);

	//logging out a user
	const logOut = () => {
		localStorage.removeItem('token');
		window.location = '/';
	};

	//create new order
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
			<Nav user={user} logOut={logOut} />
			<Router>
				<Home user={user} path="/" />
				<Login path="/login" />
				<SignUp path="/signUp" />
				<Checkout
					path="/checkout"
					createOrder={createOrder}
					order={order}
					user={user}
				/>
				<Profile path="/profile" />
			</Router>
			<Footer />
		</>
	);
};

export default App;
