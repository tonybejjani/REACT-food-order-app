/** @format */

import { React } from 'react';

import { ACTIONS } from './App';
const Todo = (props) => {
  const dispatchHandler = () => {
    props.dispatch({
      type: ACTIONS.TOGGLE_TODO,
      payload: { id: props.todo.id },
    });
  };

  return (
    <>
      <p style={{ color: !props.todo.complete ? 'blue' : 'green' }}>
        {props.todo.desc}
      </p>
      <button onClick={dispatchHandler}>Toggle</button>
      <button>Delete</button>
    </>
  );
};

export default Todo;
