import React from 'react';
import App from '../App';
import { Provider } from "react-redux";

export const Root = ({ store }) => (
	<Provider store={store}>
		<App />
	</Provider>
);
