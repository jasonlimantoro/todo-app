import React from "react";

const Todo = ({ onClickToDo, name, completed }) => {
  return (
    <li
      style={{
        marginBottom: 20,
        textDecoration: completed ? "line-through" : "none"
      }}
    >
      {name}{" "}
      <button
        className={completed ? "btn btn-danger" : "btn btn-success"}
        onClick={onClickToDo}
      >
        Toggle
      </button>
    </li>
  );
};

export default Todo;
