const todo = (state = {}, action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return {
				id: action.id,
				name: action.name,
				completed: false,
				active: false,
			}
		
		case 'TOGGLE_TODO':
			if(state.id === action.id){
				let target = action.target;
				return {
					...state,
					[target]: !state[target],
				}
			} else {
				return state;
			}
						
		default:
			return state;
	}
}
const todos = (state = [], action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return [ 
				...state,
				todo({}, action)
			];
		
		case 'REMOVE_TODO':
			return state.filter(t => t.id !== action.id);

		case 'TOGGLE_TODO':
			return state.map(t => todo(t, action));

		default:
			return state;	
	}
}

export default todos;

export const getVisibleTodos = (state, filter) => {
	switch (filter) {
		case "SHOW_COMPLETED":
			return state.filter(t => t.completed);
		case "SHOW_INCOMPLETED":
			return state.filter(t => !t.completed);
		case "SHOW_ACTIVE":
			return state.filter(t => t.active);
		case "SHOW_INACTIVE":
			return state.filter(t => !t.active);
		default:
			return state;
	}
}
