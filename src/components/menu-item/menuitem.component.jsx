import React from 'react';
import './menuitem.styles.scss';

export const MenuItem = ({ title, imageUrl, size }) => {
	return (
		<div className={`menu-item ${size}`}>
			<div
				className="background-img"
				style={{
					backgroundImage: `url(${imageUrl})`
				}}
			/>
			<div className="content">
				<h1 className="title">{title.toUpperCase()}</h1>
				<span className="subtitle">SHOP NOW</span>
			</div>
		</div>
	);
};
