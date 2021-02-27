import './Footer.css';
import footer from './imgs/Footer.svg';

const Footer = (props) => {
	return (
		<div className="footer-container">
			<div className="footer-svg">
				<img src={footer} alt="" />
			</div>

			<div className="footer-content">
				<div className="footer-col-first">
					<h4>About Hogwarts</h4>
					<p className="p-small-first">
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's
					</p>
				</div>

				<div className="footer-col-middle">
					<h4>Our Social Media</h4>
					<i className="fab fa-facebook-f social-media-icon"></i>
					<i className="fab fa-twitter social-media-icon"></i>
					<i className="fab fa-youtube social-media-icon"></i>
					<i className="fab fa-pinterest social-media-icon"></i>
				</div>

				<div className="footer-col-last">
					<h4>Contact</h4>
					<ul className="list-unstyled li-space-lg p-small">
						<li className="media">
							<div className="media-body">
								<i className="fas fa-map-marker-alt"></i>
								27 carrer d'Avilla, Barcelona,Spain
							</div>
						</li>
						<li className="media">
							<div className="media-body">
								<i className="fas fa-envelope"></i>
								<a className="link" href="mailto:contact@tivo.com">
									contact@Hogwarts.com
								</a>
								<div>
									<i className="fas fa-globe"></i>
									<a className="link" href="#your-link">
										https://github.com/AbdallahAltokhy
									</a>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Footer;
