import { v4 } from 'node-uuid';

export const add = name => ({
	type: 'ADD_TODO',
	id : v4(),
	name : name,
});

export const remove = id => ({
	type: 'REMOVE_TODO',
	id,
})

export const toggle = (id, target) => ({
	type: 'TOGGLE_TODO',
	target,
	id,
});

export const setVisibilityFilter = filter => ({
	type: 'SET_VISIBILITY_FILTER',
	filter,
});
