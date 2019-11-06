import { createSelector } from 'reselect';

const cartSelector = (state) => state.cart;

export const selectCartItems = createSelector(
    [
        cartSelector,
    ],
    (cart) => cart.cartItems,
);

export const selectCartHidden = createSelector(
    [cartSelector],
    (cart) => cart.hidden
)

export const selectCartItemsCount = createSelector(
    [
        selectCartItems,
    ],
    (cartItems) => cartItems.reduce((acc, currentCartItem) => acc + currentCartItem.quantity, 0),
);
