// import { cartActionTypes } from "./cart.actions";

export const addItemToCart = (cartItems, cartItemToAdd) => {
	const existingItem = cartItems.find(cartItem => { 
		return cartItem.id === cartItemToAdd.id;
	})

	if (existingItem) { 
		return cartItems.map(cartItem => {
			if (cartItem.id === cartItemToAdd.id) { 
				return {...cartItem, quantity: cartItem.quantity+1}
			}else{
				return cartItem
			}
		})
	}
	return [...cartItems, {...cartItemToAdd, quantity: 1}]
}