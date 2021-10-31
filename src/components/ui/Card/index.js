import classes from './Card.module.css';

const Card = ({ children, className, ...props }) => {
    const classNames = className ? `${classes.card} ${className}` : classes.card;

    return (
        <div className={classNames} {...props}>
            { children }
        </div>
    );
}

export default Card;