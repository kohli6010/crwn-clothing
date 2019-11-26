import { createStore, applyMiddleware } from 'redux';
// import logger from 'redux-logger';
import rootReducer from './root-reducer'

// const middleWares = [logger];
const store = createStore(rootReducer);
export default store;

// , applyMiddleware(...middleWares)