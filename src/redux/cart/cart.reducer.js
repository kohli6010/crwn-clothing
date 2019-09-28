import { addItemToCart } from './cart.utils';
const INITIAL_STATE = {
	hidden: false,
	cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => { 
	switch (action.type) { 
		case 'TOGGLE_CART': { 
			return {
				...state, 
				hidden: !state.hidden
			}
		}
			
		case 'ADD_ITEM': { 
			return {
				...state,
				cartItems: addItemToCart(state.cartItems, action.payload)
			}
		}
			
		default: { 
			return state
		}
	}
}

export default cartReducer;