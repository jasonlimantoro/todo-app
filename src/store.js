import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import Reducer from "./reducers/Reducer";
import { loadState, saveState } from "./localStorage";
import { composeWithDevTools } from "redux-devtools-extension";
import throttle from 'lodash/throttle';

const persistedState = loadState();

const configureStore = () => {

	const store = createStore(
		Reducer,
		persistedState,
		composeWithDevTools(applyMiddleware(thunk)),
	);

	// run at most once a second
	store.subscribe(throttle(() => {
		saveState({ 
			todos: store.getState().todos 
		});
	}, 1000));	

	return store;
}

export default configureStore;