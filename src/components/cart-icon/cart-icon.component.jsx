import React from 'react';
import { connect } from 'react-redux';
import {cartActionTypes} from '../../redux/cart/cart.actions';
import { ReactComponent as ShoppingCart } from '../../assests/shopping-bag.svg';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import './cart-icon.styles.scss';


const CartIcon = ({ cartActionTypes, cartQuantity }) => (
	<div className="cart-icon" onClick={() => cartActionTypes()}>
		<ShoppingCart className="shopping-icon" />
		<span className="item-count">{cartQuantity}</span>
		{console.table(cartQuantity)}
	</div>
)


const mapStateToProps = (state) => ({
	cartQuantity: selectCartItemsCount(state)
})

const mapDispatchToProps = dispatch => ({
	cartActionTypes: () => dispatch(cartActionTypes())
});


export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
