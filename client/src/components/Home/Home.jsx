import React, { Component } from 'react';
import Nav from './Nav/Nav';
import Header from './Header/Header';
import ServicesList from './ServicesList/ServicesList';

class Home extends Component {
	state = {};
	render() {
		return (
			<>
				<Nav />
				<Header />
				<ServicesList />
			</>
		);
	}
}

export default Home;
