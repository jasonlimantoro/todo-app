import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";

const TodoList = ({todos, toggle, remove}) => {
	const lists = todos.map(todo => (
		<Todo 
			key={todo.id} 
			onToggleCompletedTodo={() => toggle(todo.id, 'completed')} 
			onToggleActiveTodo={() => toggle(todo.id, 'active') }
			onRemoveTodo={() => remove(todo.id)}
			{...todo} 
		/>
	));
	return (
		<ul className="list-group" style={{ listStylePosition: "inside", textAlign: "left", marginBottom: 40, }}>
			{lists}
		</ul>
	);
}

TodoList.propTypes = {
	todos : PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			completed: PropTypes.bool.isRequired,
		}),
	),
	toggle : PropTypes.func.isRequired,
	remove : PropTypes.func.isRequired,
};

export default TodoList;