import { v4 } from 'node-uuid';

export const add = name => ({
	type: 'ADD_TODO',
	id : v4(),
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
