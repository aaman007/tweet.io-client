import classes from './UserList.module.css';
import User from "../User";

const UserList = ({ users }) => {
    return (
        <div className={classes.users}>
            <h3> Who to Follow </h3>
            { users.map(user => <User key={user.username} user={user} />) }
        </div>
    )
};

export default UserList;