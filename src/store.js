import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import Reducer from "./reducers/Reducer";
import { loadState, saveState } from "./localStorage";
import { composeWithDevTools } from "redux-devtools-extension";

const persistedState = loadState();

const configureStore = () => {

	const store = createStore(
		Reducer,
		persistedState,
		composeWithDevTools(applyMiddleware(thunk)),
	);
	store.subscribe(() => {
		saveState({ todos: store.getState().todos });
	});	

	return store;
}

export default configureStore;