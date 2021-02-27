import React, { Component } from 'react';
import Nav from './Nav/Nav';
import Header from './Header/Header';
import ServicesList from './ServicesList/ServicesList';
import BookingSteps from './BookingSteps/BookingSteps';
import Testimonial from './Testimonial/Testimonial';
import Footer from './Footer/Footer';

class Home extends Component {
	state = {};
	render() {
		return (
			<>
				<Nav />
				<Header />
				<ServicesList />
				<BookingSteps />
				<Testimonial />
				<Footer />
			</>
		);
	}
}

export default Home;
