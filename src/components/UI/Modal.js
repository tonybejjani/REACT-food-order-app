/** @format */

import { React, Fragment } from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const ModalBackdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onHideCart}></div>;
};

const Modal = (props) => {
  // const modalVisibiltyHandler = () => {
  //   props.setModalVisibilty(false);
  // };

  const PortalElement = document.getElementById('overlays');

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <ModalBackdrop onHideCart={props.onHideCart} />,
        PortalElement
      )}

      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        PortalElement
      )}
    </Fragment>
  );
};

export default Modal;
