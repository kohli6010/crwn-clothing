import { combineReducer } from 'redux';
import userReducer from './user/user-reducer';

// combining the all reducer to send a giant store after making it ⏲
export default combineReducer({
	user: userReducer
})