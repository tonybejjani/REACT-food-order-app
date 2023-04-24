/** @format */
import { Fragment, useContext } from 'react';

import CartIcon from '../Cart/CartIcon';

import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfCartContext = cartCtx.items.reduce(
    (currNum, item) => currNum + item.amount,
    0
  );

  return (
    <Fragment>
      <button className={classes.button} onClick={props.onShowCart}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartContext}</span>
      </button>
    </Fragment>
  );
};

export default HeaderCartButton;
