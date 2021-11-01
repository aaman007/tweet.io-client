import classes from './User.module.css';
import UserIcon from '../../../assets/icons/user.png';
import Button from "../../ui/Button";

const User = ({ user }) => {
    return (
        <div className={classes.user}>
            <img src={UserIcon} alt={'Avatar'} />
            <div className={classes.userInfo}>
                <h4> {user.full_name} </h4>
                <span> @{user.username} </span>
            </div>
            <Button className={classes.button}> Follow </Button>
        </div>
    )
};

User.defaultProps = {
    user: {
        full_name: 'Tweet.io User',
        username: 'username'
    }
}

export default User;