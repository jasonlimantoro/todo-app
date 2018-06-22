import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store';
import { Root } from './components/Root';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';


const store = configureStore();
ReactDOM.render(
	<Root store={store} />,
	document.getElementById('root')
);

registerServiceWorker();
