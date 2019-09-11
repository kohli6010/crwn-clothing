import { combineReducers } from 'redux';
import userReducer from './user/user-reducer';
import cartReducer from './cart/cart.reducer';

// combining the all reducer to send a giant store after making it 🔆
export default combineReducers({
	user: userReducer,
	cart: cartReducer
})