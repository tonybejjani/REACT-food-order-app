/** @format */

import { React, Fragment } from 'react';

import mealsImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.css';
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Catering Services</h1>
        <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="a table full of kept warm meals" />
      </div>
    </Fragment>
  );
};

export default Header;
