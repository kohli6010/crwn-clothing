const INITIAL_STATE = {
	hidden: false
}

const cartReducer = (state = INITIAL_STATE, action) => { 
	switch (action.type) { 
		case 'TOGGLE_CART': { 
			return {
				...state, 
				hidden: !state.hidden
			}
		}
			
		default: { 
			return state
		}
	}
}

export default cartReducer;