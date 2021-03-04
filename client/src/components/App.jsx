import React, { useState } from 'react';
import { Router } from '@reach/router';
import Home from './Home/Home';
import Footer from './Common/Footer/Footer';
import Nav from './Common/Nav/Nav';
import Checkout from './Checkout/Checkout';
import Login from './LogIn/Login';
import SignUp from './SignUp/SignUp';
import Profile from './Profile/Profile';

const App = () => {
	const [loggedIn, setloggedIn] = useState(false);

	const isLoggedIn = (loggedIn) => {
		if (loggedIn == true) {
			setloggedIn(true);
		}
	};

	return (
		<>
			<Nav loggedIn={loggedIn} />
			<Router>
				<Home path="/" loggedIn={loggedIn} />
				<Login path="/login" isLoggedIn={isLoggedIn} />
				<SignUp path="/signUp" />
				<Checkout path="/checkout" />
				<Profile path="/profile" />
			</Router>
			<Footer />
		</>
	);
};

export default App;
