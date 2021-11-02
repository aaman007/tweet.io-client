import classes from './UserList.module.css';
import User from "../User";
import LoadMoreButton from "../../ui/LoadMoreButton";

const UserList = ({ users, hasNext, onNextClick }) => {
    const renderUsers = () => {
        if (users.length === 0) {
            return <p> No Users to show! </p>
        }
        return users.map(user => <User key={user.username} user={user} />);
    };

    return (
        <div className={classes.users}>
            <h3> Who to Follow </h3>
            { renderUsers() }
            { hasNext && <LoadMoreButton className={classes.button} onClick={onNextClick}> Load More </LoadMoreButton> }
        </div>
    );
};

export default UserList;