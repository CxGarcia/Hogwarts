import './Nav.css';
import imgSrc from './imgs/Icon.png';
import { Link } from '@reach/router';

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
						<Link to="/">
							<a className="nav-link page-scroll" href="#HOME">
								HOME <span className="sr-only">(current)</span>
							</a>
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/">
							<a className="nav-link page-scroll" href="#SERVICES">
								SERVICES
							</a>
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/">
							<a className="nav-link page-scroll" href="#BOOK">
								BOOK
							</a>
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/">
							<a className="nav-link page-scroll" href="#CONTACT">
								CONTACT US
							</a>
						</Link>
					</li>

					<li className="nav-item">
						<Link to="/login">
							<button className="nav-btn">LOG IN</button>
						</Link>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Nav;
