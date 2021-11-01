import classes from './Navigation.module.css';
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../../store/slices/auth";
import * as urls from '../../../urls';
import Button from "../../ui/Button";

const Navigation = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(authActions.logout({}));
    }

    return (
        <nav className={classes.navbar}>
            <h1> tweet.io </h1>
            <ul className={classes.navLinks}>
                <li>
                    <NavLink activeClassName={classes.active} to={urls.home()}> Home </NavLink>
                </li>
                <li>
                    <NavLink activeClassName={classes.active} to={urls.peopleWhoFollow()}>
                        People who follow
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName={classes.active} to={urls.profile()}> Profile </NavLink>
                </li>
                <li>
                    <Button className={classes.logout} onClick={handleLogout}> Logout </Button>
                </li>
            </ul>
        </nav>
    )
};

export default Navigation;