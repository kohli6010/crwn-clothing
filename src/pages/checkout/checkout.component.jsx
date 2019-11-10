import React from 'react';
import { connect } from 'react-redux';
import './checkout.styles.scss';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

const CheckOut = ({ cartItems, total}) => (
	<div className="checkout-page">
		<div className="checkout-header">
			<div className="header-block">
				<span>Product</span>
			</div>
			<div className="header-block">
				<span>Description</span>
			</div>
			<div className="header-block">
				<span>Quantity</span>
			</div>
			<div className="header-block">
				<span>Price</span>
			</div>
			<div className="header-block">
				<span>Remove</span>
			</div>
		</div>
		<div>
			{
				cartItems.map(cartItem => <div key={cartItem.id}>{cartItem.id}</div>)
			}
			{
				cartItems.map(cartItem => <div key={cartItem.id}>{cartItem.name}</div>)
			}
		</div>
		<div className="total">
			<span>Total: $ {total}</span>
		</div>
	</div>
)

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal
})

export default connect(mapStateToProps)(CheckOut);