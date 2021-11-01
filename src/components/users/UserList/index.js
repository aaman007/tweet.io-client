import classes from './UserList.module.css';
import User from "../User";

const UserList = () => {
    return (
        <div className={classes.users}>
            <h3> Who to Follow </h3>
            <User />
            <User />
            <User />
        </div>
    )
};

export default UserList;