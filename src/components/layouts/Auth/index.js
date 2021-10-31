import classes from './Auth.module.css';

const AuthLayout = ({ children }) => {
    return (
        <div className={classes.centered}>
            {children}
        </div>
    )
};

export default AuthLayout;