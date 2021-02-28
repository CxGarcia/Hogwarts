import React, { Component } from 'react';
import Header from './Header/Header';
import ServicesList from './ServicesList/ServicesList';
import BookingSteps from './BookingSteps/BookingSteps';
import Testimonial from './Testimonial/Testimonial';

class Home extends Component {
	state = {};
	render() {
		return (
			<>
				<Header />
				<ServicesList />
				<BookingSteps />
				<Testimonial />
			</>
		);
	}
}

export default Home;
