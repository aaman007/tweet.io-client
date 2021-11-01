import ReactDOM from "react-dom";
import React from "react";
import classes from "./Modal.module.css";

const overlaysRoot = document.getElementById('overlays-root');

const Modal = ({ children, onBackdropClick }) => {
    return ReactDOM.createPortal(
        <React.Fragment>
            <div className={classes.backdrop} onClick={onBackdropClick} />
            <div className={classes.modal}>
                {children}
            </div>
        </React.Fragment>,
        overlaysRoot
    );
};

export default Modal;