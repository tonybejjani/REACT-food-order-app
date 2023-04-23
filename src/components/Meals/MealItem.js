/** @format */

import React from 'react';
import classes from './MealItem.module.css';

import MealItemForm from './MealItemForm';

const MealItems = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={classes.meal} key={props.id}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <p className={classes.price}>{price}</p>
      </div>
      <div>
        <MealItemForm id={props.id} price={props.price} name={props.name} />
      </div>
    </li>
  );
};

export default MealItems;
