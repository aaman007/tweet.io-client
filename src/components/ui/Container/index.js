import classes from './Container.module.css';

const Container = ({ children, className }) => {
    const classNames = className ? `${classes.container} ${className}` : classes.container;

    return (
        <div className={classNames}>
            {children}
        </div>
    )
}

export default Container;