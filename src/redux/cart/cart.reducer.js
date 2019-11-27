import { addItemToCart} from './cart.utils';
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
			
		case 'REMOVE_ITEM': { 
			return {
				...state,
				cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
			}
		}
			
		default: { 
			return state
		}
	}
}

export default cartReducer;