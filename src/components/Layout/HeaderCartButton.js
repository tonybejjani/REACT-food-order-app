/** @format */
import { Fragment, useState } from 'react';

import CartIcon from '../Cart/CartIcon';
import Cart from '../Cart/Cart';
import Modal from '../UI/Modal';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const [modal, setModal] = useState('');

  const modalVisibiltyHandler = (visibilty) => {
    setModal(visibilty);
  };

  const headerCartButtonHandler = () => {
    setModal(true);
  };

  console.log('test');
  return (
    <Fragment>
      {modal ? (
        <Modal
          modalBackdropId="overlays-root"
          modalOverlayId="overlays-root"
          modalOverlay={<Cart setModalVisibilty={modalVisibiltyHandler} />}
          defaultVisibilty={true}
          setModalVisibilty={modalVisibiltyHandler}
        />
      ) : (
        ''
      )}
      <button className={classes.button} onClick={headerCartButtonHandler}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>3</span>
      </button>
    </Fragment>
  );
};

export default HeaderCartButton;
