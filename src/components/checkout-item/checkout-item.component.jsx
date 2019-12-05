import React from 'react';
import { connect } from 'react-redux';
import { removeItem, addItem, decreaseQuantity } from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, remove, add, decreaseQuantity }) => (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={cartItem.imageUrl} alt='Item added in cart' />
        </div>
        <span className='name'>{cartItem.name}</span>
        <span className='quantity'>
            <div className='arrow' onClick={() => decreaseQuantity(cartItem)}>
                &#10094;
            </div>
            <div className='value'>{cartItem.quantity}</div>
            <div className='arrow' onClick={() => add(cartItem)}>
                &#10095;
            </div>
        </span>
        <span className='price'>{cartItem.price}</span>
        <div
            className='remove-button'
            onClick={() => {
                console.log('I am clicked');
                remove(cartItem);
            }}
        >
            &#10005;
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    remove: (item) => dispatch(removeItem(item)),
    add: (item) => dispatch(addItem(item)),
    decreaseQuantity: (item) => dispatch(decreaseQuantity(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
