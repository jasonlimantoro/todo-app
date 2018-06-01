const todo = (state = {}, action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return {
				id: action.id,
				name: action.name,
				completed: false,
				archived: false,
			}
		
		case 'TOGGLE_TODO':
			if(state.id === action.id){
				return {
					...state,
					completed: !state.completed,
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
		default:
			return state;
	}
}

