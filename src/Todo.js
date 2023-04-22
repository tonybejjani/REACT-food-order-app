/** @format */

import { React } from 'react';

import { ACTIONS } from './App';
const Todo = (props) => {
  const dispatchToggleoHandler = () => {
    props.dispatch({
      type: ACTIONS.TOGGLE_TODO,
      payload: { id: props.todo.id },
    });
  };

  const dispatchDeleteHandler = () => {
    props.dispatch({
      type: ACTIONS.DELETE_TODO,
      payload: { id: props.todo.id },
    });
  };

  return (
    <>
      <p style={{ color: !props.todo.complete ? 'blue' : 'green' }}>
        {props.todo.desc}
      </p>
      <button onClick={dispatchToggleoHandler}>Toggle</button>
      <button onClick={dispatchDeleteHandler}>Delete</button>
    </>
  );
};

export default Todo;
