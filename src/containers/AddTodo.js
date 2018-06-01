import React from 'react';
import { connect } from 'react-redux';
import { add } from "../actions/TodoActions";


const AddTodo = ({ dispatch }) => {
	let input;

  return (
    <form>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          ref={node => {
            input = node;
          }}
          placeholder="Enter todo"
        />
      </div>
      <div className="form-group">
        <button
          onClick={e => {
						e.preventDefault();
						if(!input.value.trim()){
							return;
						}
            dispatch(add(input.value));
            input.value = "";
          }}
          className="btn btn-primary btn-block"
        >
          Add Todo
        </button>
      </div>
    </form>
  );
};

// default behavior: no subscription to the store, and pass the dispatch function as the props
export default connect()(AddTodo);