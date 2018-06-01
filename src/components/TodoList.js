import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";

const TodoList = ({todos, toggle}) => {
	const lists = todos.map(todo => (
		<Todo key={todo.id} onClickToDo={() => toggle(todo.id)} {...todo} />
	));
	return (
		<ul style={{ listStylePosition: "inside", textAlign: "left" }}>
			{lists}
		</ul>
	);
}

TodoList.propTypes = {
	todos : PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			name: PropTypes.string.isRequired,
			completed: PropTypes.bool.isRequired,
		}),
	),
	toggle : PropTypes.func.isRequired,
};

export default TodoList;