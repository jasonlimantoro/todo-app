import { combineReducers } from 'redux';
import todos, * as fromtodos from './todos';
import visibilityFilter from './visibilityFilter';

const Reducer = combineReducers({
	todos,
	visibilityFilter,
});

export default Reducer;

export const getVisibleTodos = (state, filter) => 
	fromtodos.getVisibleTodos(state.todos, filter);
