import React from "react";
import ButtonGroup from "./ButtonGroup";

import '../styles/list.css';

export const Todo = ({
	onToggleCompletedTodo,
	onToggleActiveTodo,
	onRemoveTodo,
	name,
	completed,
	active,
}) => (
	<li className={`list-group-item ${active ? 'active' : ''}`}>
		<span style={{ textDecoration: completed && "line-through" }}>
			{name}
		</span>{" "}
		<ButtonGroup style={{ float: "right" }}>
			{active ? (
				<button className="btn btn-light" onClick={onToggleActiveTodo}>
					Deactivate
				</button>
			) : (
				<button className="btn btn-dark" onClick={onToggleActiveTodo}>
					Activate
				</button>
			)
			}

			{ completed ? 
				(
					<button className="btn btn-warning" onClick={onToggleCompletedTodo}>
						Undo
					</button>
				) : (
					<button className="btn btn-success" onClick={onToggleCompletedTodo}>
						Do
					</button>	
				)
			}
			<button className="btn btn-danger" onClick={onRemoveTodo}>
				Delete
			</button>
		</ButtonGroup>
	</li>
);

export default Todo;
