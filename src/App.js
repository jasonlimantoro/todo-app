import React from "react";
import { connect } from "react-redux";

import { getVisibleTodos } from "./reducers/Reducer";
import GridCenter from "./components/GridCenter";
import Filters from "./components/Filters";
import DisplayTodos from './containers/DisplayTodos';
import AddTodo from './containers/AddTodo';

import "./App.css";

const mapStateToProps = state => ({
	todos : getVisibleTodos(state, state.visibilityFilter) 
});

const App = ({ todos }) => ( 
	<div className="App">
		<GridCenter>
			<div className="col-xs-12 col-sm-8">
				<h1>New Todos <span className="badge badge-danger">{todos.length}</span></h1>
				<AddTodo />
				<DisplayTodos />
				<Filters />
			</div>
		</GridCenter>
	</div>
);


export default connect(mapStateToProps) (App);