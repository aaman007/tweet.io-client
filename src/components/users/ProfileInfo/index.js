import classes from './ProfileInfo.module.css';
import UserIcon from '../../../assets/icons/user.png';
import Button from "../../ui/Button";
import {useFollow} from "../../../hooks/useFollow";

const ProfileInfo = ({ user, followable }) => {
    const [handleFollow, handleUnfollow] = useFollow(user.username);

    const renderButtons = () => {
        if (!followable) return null;
        else if (user.is_following) {
            return <Button className={classes.button} onClick={handleUnfollow}> Unfollow </Button>;
        }
        return <Button className={classes.button} onClick={handleFollow}> Follow </Button>
    }

    return (
        <div className={classes.wrapper}>
            <img src={UserIcon} alt={'Avatar'} />
            <div className={classes.fullName}> {user.full_name ? user.full_name : 'tweet.io User'} </div>
            <div className={classes.username}> @{user.username} </div>
            <div className={classes.followInfo}>
                <span> {user.followers_count || 0} Followers </span>
                <span> {user.follows_count || 0} Following </span>
            </div>
            { renderButtons() }
        </div>
    )
};

export default ProfileInfo;