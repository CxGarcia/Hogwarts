import './Nav.css';
import imgSrc from './imgs/Icon.png';

const Nav = (props) => {
	return (
		<>
			<nav
				id="HOME"
				className="navbar navbar-expand-lg navbar-dark navbar-custom "
			>
				<img className="navbar-brand logo-image" src={imgSrc} alt="badge" />

				<ul className="nav-ul navbar-nav ml-auto">
					<li className="nav-item">
						<a className="nav-link page-scroll" href="#HOME">
							HOME <span className="sr-only">(current)</span>
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link page-scroll" href="#SERVICES">
							SERVICES
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link page-scroll" href="#BOOK">
							BOOK
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link page-scroll" href="#CONTACT">
							CONTACT US
						</a>
					</li>

					<li className="nav-item">
						<button className="nav-btn">LOG IN</button>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Nav;
