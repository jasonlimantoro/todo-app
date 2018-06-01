let nextId = 1;
export const add = name => ({
	type: 'ADD_TODO',
	id : nextId++,
	name : name,
});

export const toggle = id => ({
	type: 'TOGGLE_TODO',
	id : id,
});

export const setVisibilityFilter = filter => ({
	type: 'SET_VISIBILITY_FILTER',
	filter: filter,
});
