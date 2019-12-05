import { combineReducers } from 'redux';
import userReducer from './user/user-reducer';
import cartReducer from './cart/cart.reducer';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// combining the all reducer to send a giant store after making it 🔆

export const rootReducer = combineReducers({
	user: userReducer,
	cart: cartReducer
})

export const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['cart']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;