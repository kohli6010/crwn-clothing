import React from 'react';
import { connect } from 'react-redux';
import {cartActionTypes} from '../../redux/cart/cart.actions';
import { ReactComponent as ShoppingCart } from '/Users/Rahul/Desktop/crwn-clothing/crwn-clothing/src/assests/shopping-bag.svg';

import './cart-icon.styles.scss';


const CartIcon = ({ cartActionTypes }) => (
	<div className="cart-icon" onClick={() => cartActionTypes()}>
		<ShoppingCart className="shopping-icon" />
		<span className="item-count">0</span>
	</div>
)

const mapDispatchToProps = dispatch => ({
	cartActionTypes: () => dispatch(cartActionTypes())
});

export default connect(null, mapDispatchToProps)(CartIcon);