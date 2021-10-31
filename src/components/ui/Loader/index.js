import React from "react";
import ReactDOM from 'react-dom';
import classes from "./Loader.module.css";

const overlaysRoot = document.getElementById('overlays-root');

const Loader = () => {
    return ReactDOM.createPortal(
        <React.Fragment>
            <div className={classes.overlay} />
            <div className={classes.loader}>
                <div className={classes.ldsHourglass} />
            </div>
        </React.Fragment>,
        overlaysRoot
    );
};

export default Loader;