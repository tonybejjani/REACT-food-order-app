/** @format */

import React from 'react';
import classes from './MealItem.module.css';

const MealItems = (props) => {
  return (
    <li className={classes.meal} key={props.id}>
      <h3>{props.name}</h3>
      <p className={classes.description}>{props.description}</p>
      <p className={classes.price}>{props.price}</p>
    </li>
  );
};

export default MealItems;
