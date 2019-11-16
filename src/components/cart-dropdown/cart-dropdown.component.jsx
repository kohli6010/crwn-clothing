import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CartItem from '../cart-item/cartItem.component';
import { cartActionTypes } from '../../redux/cart/cart.actions';
import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';

const CartDropdown = ({ cartItems, history, hide }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.length ? (
                cartItems.map((item) => {
                    return <CartItem key={item.id} cartItem={item} />;
                })
            ) : (
                <span className='empty-message'>Your cart is empty</span>
            )}
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout');
            hide();
        }}>
            GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems,
});

const mapDispatchToProps = dispatch => ({ 
    hide : () => dispatch(cartActionTypes()) 
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));
