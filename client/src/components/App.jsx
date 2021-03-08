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
import Dashboard from './AdminDashboard/Dashboard';
import postOrder from '../Services/orderService';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const axios = require('axios');

const App = () => {
	const [orders, setOrders] = useState([]);
	let [totalCost, setTotalCost] = useState(0);

	//getting the logged in user if exist
	const [user, setUser] = useState({});
	useEffect(() => {
		const jwt = localStorage.getItem('token');
		if (jwt) {
			axios(
				`http://localhost:4000/customer/${jwt_decode(jwt).id}`
			).then((res) => setUser(res.data[0]));
		}
		//getting a list of all orders to pass it to Dashboard
		axios('http://localhost:4000/orders').then((res) => {
			console.log(res.data);
			setOrders(res.data);
		});
	}, []);

	useEffect(() => {
		//getting the total cost of all orders to pass it to Dashboard

		if (orders.length !== 0) {
			let total = orders.reduce((total, order) => {
				return total + +order.cost;
			}, 0);
			setTotalCost(total);
		}
	}, [orders]);

	console.log(totalCost);
	console.log('orders', orders);

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
			<ToastContainer />
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
				<Dashboard
					path="/admin"
					user={user}
					orders={orders}
					totalCost={totalCost}
					logOut={logOut}
				/>
			</Router>
			<Footer />
		</>
	);
};

export default App;
