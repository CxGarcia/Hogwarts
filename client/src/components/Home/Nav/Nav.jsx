import './Nav.css';
import imgSrc from './imgs/Icon.png';

const Nav = (props) => {
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-dark navbar-custom ">
				<img className="navbar-brand logo-image" src={imgSrc} alt="badge"></img>

				<ul className="nav-ul navbar-nav ml-auto">
					<li className="nav-item">
						<a className="nav-link page-scroll" href="#header">
							HOME <span className="sr-only">(current)</span>
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link page-scroll" href="#features">
							SERVICES
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link page-scroll" href="#details">
							BOOK
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link page-scroll" href="#details">
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
