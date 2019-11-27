import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom'
import { Provider } from "react-redux"
import store from "./redux/store"
 import 'lib-flexible/flexible'
import './mock/mock-server'
import App from './App';
import history from './history'

ReactDOM.render(
	<Provider store={store} >
		<Router history={history}>
			<App />
		</Router>
	</Provider>
	, document.getElementById('app'));
