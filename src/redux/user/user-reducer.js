// Setting the initial state 👍
const INITIAL_STATE = {
	currentUser: null
}

// making the reducer for User 👷
const userReducer = (state = INITIAL_STATE, action) => { 
	switch (action.type) { 
		case 'SET_CURRENT_USER':
			return {
				...state,
				currentUser: action.payload
			};
		default:
			return state;
	}
}

export default userReducer