import React from 'react';
import { connect } from 'react-redux'; 

import CartItem from '../cart-item/cartItem.component';
import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';

const CartDropdown = ({cartItems}) => ( 
	<div className="cart-dropdown">
		<div className="cart-items">
			{cartItems.map(item => { 
				return <CartItem key={item.id} cartItem={item}/>
			})}
		</div>
		<CustomButton>GO TO CHECKOUT</CustomButton>
	</div>
)

const mapStateToProps = ({ cart: { cartItems}}) => ({ 
	cartItems
})

export default connect(mapStateToProps)(CartDropdown);