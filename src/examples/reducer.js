import { combineReducers } from 'redux-immutable';

import counterReducer from 'src/examples/counterReducer';

export default combineReducers({
	counters: counterReducer,
});
