import React from 'react';
import { ReactComponent as Logo } from '../../assests/crown.svg';
import './header.styles.scss';
import { Link } from 'react-router-dom';

const Header = () => (
	<div className="header">
		<div className="logo-container">
			<Link to="/">
				<Logo />
			</Link>
		</div>
		<div className="options">
			<Link to="/shop" className="option">
				SHOP
			</Link>
			{/* 
				Clothes Link won't work right now,
				because no route as well as component 
				is created.
			 */}
			<Link to="/clothes" className="option">
				CLOTHES
			</Link>
			<Link to="/signin" className="option">
				SIGN IN
			</Link>
		</div>
	</div>
);

export default Header;
