/** @format */

import { React, useContext } from 'react';

import Input from '../UI/Input';
import classes from './MealItemForm.module.css';
import CartContext from '../../store/cart-context';
const MealItemForm = (props) => {
  const CartCtx = useContext(CartContext);

  const AddItemToCart = (event) => {
    event.preventDefault();

    CartCtx.addItem({
      // use ref
      amount: Number(document.getElementById(`amount_${props.id}`).value),
      price: props.price,
    });
  };

  return (
    <form className={classes.form} onSubmit={AddItemToCart}>
      <Input
        label="Amount"
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
    </form>
  );
};

export default MealItemForm;
