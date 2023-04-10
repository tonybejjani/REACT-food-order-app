/** @format */

import { React, Fragment } from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.overlay}</div>
    </div>
  );
};

const ModalBackdrop = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.setModalVisibilty}></div>
  );
};

const Modal = (props) => {
  const modalVisibiltyHandler = () => {
    props.setModalVisibilty(false);
  };

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <ModalBackdrop setModalVisibilty={modalVisibiltyHandler} />,
        document.getElementById(`${props.modalBackdropId}`)
      )}
      {/* <div className={classes.backdrop} onClick={modalVisibiltyHandler}></div> */}
      {ReactDOM.createPortal(
        <ModalOverlay overlay={props.modalOverlay} />,
        document.getElementById(`${props.modalOverlayId}`)
      )}
    </Fragment>
  );
};

export default Modal;
