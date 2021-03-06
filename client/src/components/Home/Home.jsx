import React from 'react';
import Header from './Header/Header';
import ServicesList from './ServicesList/ServicesList';
import BookingSteps from './BookingSteps/BookingSteps';
import Testimonial from './Testimonial/Testimonial';

const Home = ({ user }) => {
	return (
		<>
			<Header user={user} />
			<ServicesList />
			<BookingSteps />
			<Testimonial />
		</>
	);
};

export default Home;
