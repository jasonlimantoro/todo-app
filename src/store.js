import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import Reducer from "./reducers/Reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const persistedState = {
	todos : [{
		id : 0,
		name: 'Start building react-redux application',
		completed: false,
	}]
};

const configureStore = () => {

	const store = createStore(
		Reducer,
		persistedState,
		composeWithDevTools(applyMiddleware(thunk)),
	);

	return store;
}

export default configureStore;