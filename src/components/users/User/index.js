import { Link } from "react-router-dom";
import classes from './User.module.css';
import UserIcon from '../../../assets/icons/user.png';
import Button from "../../ui/Button";
import * as urls from "../../../urls";
import { useFollow } from "../../../hooks/useFollow";

const User = ({ user }) => {
    const [handleFollow, handleUnfollow] = useFollow(user.username);

    return (
        <div className={classes.user}>
            <img src={UserIcon} alt={'Avatar'} />
            <div className={classes.userInfo}>
                <h4> {user.full_name ? user.full_name : 'tweet.io User'} </h4>
                <Link to={urls.user(user.username)}> @{user.username} </Link>
            </div>
            { user.is_following
                    ? <Button className={classes.button} onClick={handleUnfollow}> Unfollow </Button>
                    : <Button className={classes.button} onClick={handleFollow}> Follow </Button> }
        </div>
    )
};

export default User;