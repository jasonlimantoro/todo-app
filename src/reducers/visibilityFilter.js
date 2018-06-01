const visibilityFilter = (state = 'SHOW_ALL', action) => {
	switch (action.type) {
		case 'SET_VISIBILITY_FILTER':
			return action.filter;	
		default:
			return state;
	}
}

export default visibilityFilter;

export const getVisibleTodos = (state, filter) => {
	switch (filter) {
		case "SHOW_COMPLETED":
			return state.filter(t => t.completed);
		case "SHOW_INCOMPLETED":
			return state.filter(t => !t.completed);
		default:
			return state;
	}
}