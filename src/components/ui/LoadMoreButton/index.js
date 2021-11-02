import classes from "./LoadMoreButton.module.css";

const LoadMoreButton = ({ className, ...attrs }) => {
    const classNames = className ? `${classes.button} ${className}` : classes.button;

    return (
        <div className={"centered"}>
            <button className={classNames} {...attrs} />
        </div>
    )
};

export default LoadMoreButton;