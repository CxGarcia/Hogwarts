import React, { Component } from 'react';
import Nav from './Nav/Nav';
import Header from './Header/Header';

class Home extends Component {
	state = {};
	render() {
		return (
			<>
				<Nav />
				<Header />
			</>
		);
	}
}

export default Home;
