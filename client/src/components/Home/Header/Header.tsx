import './Header.css';
import headerImg from './imgs/1.png';
import header from './imgs/header.svg';
import { Link } from '@reach/router';

const Header = ({ user }) => {
	return (
		<>
			<div className="header-container">
				<div className="col-lg-6 header-txt-box">
					<h1>Home maintenance made easier and better</h1>
					<p>
						Lorem Ipsum is not simply random text. It has roots in a piece of
						classical Latin literature from 45 BC, making it over 2000 years old
					</p>

					{Object.keys(user).length !== 0 ? null : (
						<Link to="/signUp">
							<button>SIGN UP</button>
						</Link>
					)}
				</div>
				<div className="col-lg-6 header-img-box">
					<img src={headerImg} alt="headerImg" />
				</div>
			</div>
			<div className="test">
				<img className="svgB" src={header} alt="badge"></img>
			</div>
		</>
	);
};

export default Header;
