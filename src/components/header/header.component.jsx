import React from 'react';
import { ReactComponent as Logo } from './crown.svg';
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
			<Link to="/clothes" className="option">
				CLOTHES
			</Link>
		</div>
	</div>
);

export default Header;
