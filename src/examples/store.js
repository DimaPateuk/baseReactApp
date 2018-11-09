import { createStore, applyMiddleware, compose } from 'redux';
import Middlewares from 'src/examples/middlewares';

import reducer from './reducer';

export const store = createStore(
	reducer,
	compose(applyMiddleware(...Middlewares))
);

export default store;
