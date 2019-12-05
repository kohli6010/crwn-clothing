// import { cartActionTypes } from "./cart.actions";

export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingItem = cartItems.find((cartItem) => {
        return cartItem.id === cartItemToAdd.id;
    });

    if (existingItem) {
        return cartItems.map((cartItem) => {
            if (cartItem.id === cartItemToAdd.id) {
                return { ...cartItem, quantity: cartItem.quantity + 1 };
            } else {
                return cartItem;
            }
        });
    }
    return [
        ...cartItems,
        { ...cartItemToAdd, quantity: 1 },
    ];
};

export const decreaseQuantity = (cartItems, cartItemToDecrease) => {
	console.log("I am called")	
    const existingItem = cartItems.find((cartItem) => {
        return cartItem.id === cartItemToDecrease.id;
    });

    if (existingItem.quantity <= 1) {
        return cartItems.filter((cartItem) => cartItem.id !== cartItemToDecrease.id);
    }

    return cartItems.map((cartItem) => {
        return cartItem.id === cartItemToDecrease.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem;
    });
};
