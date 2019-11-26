import { cartActionTypes } from "./cart.actions";

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

export const removeItemFromCart = (cartItems, cartItemToRemove) => { 
	console.log(cartItems, cartItemToRemove);
	const newCartItemsArray = cartItems.filter((cartItem, i , cartItems) => { 
		if (cartItem.id === cartItemToRemove.id) { 
			cartItems.splice(i, 1);
			console.log("I am called", cartItems)
			return cartItems;
		}
	})

	console.log(newCartItemsArray);
	return newCartItemsArray;
}