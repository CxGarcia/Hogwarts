import './Testimonial.css';
import manImg from './imgs/man.jpg';
import ladyImg from './imgs/lady-img.jpg';
const Testimonial = (props) => {
	return (
		<div className="testimonial-container">
			<h1 className="testimonial-heading">
				WHAT PEOPLE ARE SAYING ABOUT HOGWARTS
			</h1>
			<div
				id="carouselExampleControls"
				className="carousel slide"
				data-ride="carousel"
			>
				<div className="carousel-inner">
					<div className="carousel-item active">
						<h3 className="testimonials-head">
							Reasonable prices, professional & efficient. the plumber arrived
							on time, a customer service called to follow up, and called again
							the day after to assure that the issue was fixed
						</h3>
						<img src={manImg} alt="man-profile" className="slide-img" />
						<em>Cris, Barcelona</em>{' '}
					</div>
					<div className="carousel-item">
						<h3 className="testimonials-head">
							I am so happy I discovered you guys! Very professional people and
							very polite.Thank you Hogwarts for a job well done ,customer
							service called to follow up
						</h3>
						<img src={ladyImg} alt="lady-profile" className="slide-img" />
						<em>Martha, Barcelona</em>
					</div>
				</div>
				<a
					className="carousel-control-prev"
					href="#carouselExampleControls"
					role="button"
					data-slide="prev"
				>
					<span
						className="carousel-control-prev-icon"
						aria-hidden="true"
					></span>
					<span className="sr-only">Previous</span>
				</a>
				<a
					className="carousel-control-next"
					href="#carouselExampleControls"
					role="button"
					data-slide="next"
				>
					<span
						className="carousel-control-next-icon"
						aria-hidden="true"
					></span>
					<span className="sr-only">Next</span>
				</a>
			</div>
		</div>
	);
};

export default Testimonial;
