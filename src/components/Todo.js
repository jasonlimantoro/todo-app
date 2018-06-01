import React from "react";
import ButtonGroup from "./ButtonGroup";

export class Todo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			active : false,
		}
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(){
		this.setState(
			prevState => ({
				active : !prevState.active
			})
		);
	}
	render() {
		const {
			onClickToDo,
			onRemoveTodo,
			name,
			completed
		} = this.props;  

		const { active } = this.state;
		return (
			<li className={`list-group-item ${active && 'active'}`}>
				<span style={{ textDecoration: completed && "line-through" }}>
					{name}
				</span>{" "}
				<ButtonGroup style={{ float: "right" }}>
					{active ? (
						<button className="btn btn-light" onClick={this.handleClick}>
							Deactivate
						</button>
					) : (
						<button className="btn btn-dark" onClick={this.handleClick}>
							Activate
						</button>
					)
					}
					<button
						className={`btn btn-${completed ? 'success' : 'danger'}`}
						onClick={onClickToDo}
					>
					 Toggle
					</button>
					<button className="btn btn-secondary" onClick={onRemoveTodo}>
						Delete
					</button>
				</ButtonGroup>
			</li>
		);
	}
};

export default Todo;
