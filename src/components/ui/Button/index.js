import classes from "./Button.module.css";

const Button = ({ children, className, ...attributes }) => {
    const classNames = className ? `${classes.button} ${className}` : classes.button;

    return (
        <button className={classNames} {...attributes}>
            {children}
        </button>
    )
};

export default Button;