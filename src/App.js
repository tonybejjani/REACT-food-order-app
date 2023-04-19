/** @format */

///////////////////////////////////////

//// useReducer To do List Example

import { React, useReducer, useState } from 'react';
import Todo from './Todo';

export const ACTIONS = {
  ADD_TODO: 'add-todo',
  TOGGLE_TODO: 'toggle-todo',
};

function App() {
  function reducer(todos, action) {
    switch (action.type) {
      case ACTIONS.ADD_TODO:
        console.log(action.payload);
        return [...todos, setTodo(action.payload)];
      case ACTIONS.TOGGLE_TODO:
        console.log(action.payload);
        return todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return { ...todo, complete: !todo.complete };
          }
          return todo;
        });
      default:
        return todos;
    }
  }

  const setTodo = (input) => {
    return { id: Date.now(), desc: input, complete: false };
  };

  const [todos, dispatch] = useReducer(reducer, []);
  const [userInput, setUserInput] = useState('');

  const saveInput = (e) => {
    setUserInput(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();
    setUserInput('');
    dispatch({ type: ACTIONS.ADD_TODO, payload: userInput });
  };

  console.log(todos);

  return (
    <>
      <form onSubmit={addTodo}>
        <label>Enter a to do: </label>
        <input value={userInput} onChange={saveInput} />
      </form>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </>
  );
}

export default App;
///////////////////////////////////////

//// useReducer Simple Counter Example

// import { React, useReducer } from 'react';
// function App() {
//   const ACTIONS = {
//     DECREMENT: 'decrement',
//     INCREMENT: 'increment',
//   };

//   const reduce = (state, action) => {
//     switch (action.type) {
//       case ACTIONS.DECREMENT:
//         return { count: state.count - 1 };

//       case ACTIONS.INCREMENT:
//         return { count: state.count + 1 };

//       default:
//         return state;
//     }
//   };

//   const [state, dispatch] = useReducer(reduce, { count: 0 });

//   const decrement = () => {
//     dispatch({ type: ACTIONS.DECREMENT });
//   };

//   const increment = () => {
//     dispatch({ type: ACTIONS.INCREMENT });
//   };

//   return (
//     <div style={{ margin: '0 auto', width: '500px', fontSize: '25px' }}>
//       <button onClick={decrement}>-</button>
//       <span style={{ color: '#fff' }}>{state.count}</span>
//       <button onClick={increment}>+</button>
//     </div>
//   );
// }

// export default App;

///////////////////////////////////////

// import { React, useState } from 'react';

// import Header from './components/Layout/Header';
// import Meals from './components/Meals/Meals';
// import Cart from './components/Cart/Cart';
// import CartProvider from './store/cartProvider';

// function App() {
// const [cartIsShown, setCartIsShown] = useState(false);

// const showCartHandler = () => {
//   setCartIsShown(true);
// };

// const hideCartHandler = () => {
//   setCartIsShown(false);
// };
// return (
//   <CartProvider>
//     {cartIsShown && <Cart onHideCart={hideCartHandler} />}
//     <Header onShowCart={showCartHandler} />
//     <main>
//       <Meals />
//     </main>
//   </CartProvider>
// );

// export default App;
