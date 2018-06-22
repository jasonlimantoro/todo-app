import React from 'react';
import { connect } from 'react-redux';
import { add } from "../actions/TodoActions";
import { Button, Input } from "mdbreact";


export class AddTodo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value : ''
		};
		this.addTodo = this.addTodo.bind(this);
		this.updateValue = this.updateValue.bind(this);
	}

	addTodo(e){
		e.preventDefault();
		let { value } = this.state;
		if(!value.trim()){
			alert('Enter something!');
			return;
		}
		this.props.dispatch(add(value));
		this.clearInput();
	}

	clearInput(){
		this.setState({
			value: ''
		});
	}

	updateValue(e){
		let value = e.target.value; 
		this.setState({ value });
	}
	
	render(){
		let { value } = this.state;
		return (
			<form onSubmit={this.addTodo}>
				<div className="form-group">
					<Input
						type="text"
						label="Enter todo"
						value={value}
						onChange={this.updateValue}
					/>
				</div>
				<div className="form-group">
					<Button
						color="primary"
						block
						outline
						type="submit"
					>
						Add Todo
					</Button>
				</div>
			</form>
		);
	}
};

// default behavior: no subscription to the store, and pass the dispatch function as the props
export default connect()(AddTodo);