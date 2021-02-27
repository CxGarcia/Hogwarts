import './BookingSteps.css';
import arrow from './imgs/arrow.svg';

const BookingSteps = (props) => {
	return (
		<div className="booking-steps-container">
			<h1 className="booking-steps-heading">FOUR EASY STEPS</h1>
			<div className="steps">
				<h2>CHOOSE</h2>
				<img className="arrow" src={arrow} alt="" />
				<h2>SCHEDULE</h2>
				<img className="arrow" src={arrow} alt="" />
				<h2>PAY</h2>
				<img className="arrow" src={arrow} alt="" />
				<h2>RELAX</h2>
			</div>
		</div>
	);
};

export default BookingSteps;
