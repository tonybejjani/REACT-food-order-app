/** @format */

import { React, useContext, useRef, useState } from 'react';

import Input from '../UI/Input';
import classes from './MealItemForm.module.css';
import CartContext from '../../store/cart-context';
const MealItemForm = (props) => {
  const CartCtx = useContext(CartContext);
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;

    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber > 5 ||
      enteredAmountNumber < 1
    ) {
      setAmountIsValid(false);
      return;
    }

    CartCtx.addItem({
      // use ref
      id: props.id,
      name: props.name,
      amount: enteredAmountNumber,
      price: props.price,
    });
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        label="Amount"
        ref={amountInputRef}
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && (
        <p style={{ color: 'red' }}>please enter a valid amount (1-5).</p>
      )}
    </form>
  );
};

export default MealItemForm;
