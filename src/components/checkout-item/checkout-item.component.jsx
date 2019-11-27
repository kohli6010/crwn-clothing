import React from 'react';
import {connect} from 'react-redux';
import { removeItem } from '../../redux/cart/cart.actions';
import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, remove }) => (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={cartItem.imageUrl} alt='Item added in cart' />
        </div>
        <span className='name'>{cartItem.name}</span>
        <span className='quantity'>{cartItem.quantity}</span>
        <span className='price'>{cartItem.price}</span>
        <div className='remove-button' onClick={() => { 
            console.log("I am clicked")
            remove(cartItem)
        }}>&#10005;</div>
    </div>
);

const mapDispatchToProps = dispatch => ({ 
    remove: (item) => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);
