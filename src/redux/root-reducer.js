import { combineReducers } from 'redux';
import userReducer from './user/user-reducer';

// combining the all reducer to send a giant store after making it 🔆
export default combineReducers({
	user: userReducer
})