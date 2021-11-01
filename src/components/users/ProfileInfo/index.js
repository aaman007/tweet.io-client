import classes from './ProfileInfo.module.css';
import UserIcon from '../../../assets/icons/user.png';
import Button from "../../ui/Button";

const ProfileInfo = ({ user, followable }) => {
    return (
        <div className={classes.wrapper}>
            <img src={UserIcon} alt={'Avatar'} />
            <div className={classes.fullName}> {user.full_name ? user.full_name : 'tweet.io User'} </div>
            <div className={classes.username}> @{user.username} </div>
            <div className={classes.followInfo}>
                <span> {user.followers_count || 0} Followers </span>
                <span> {user.follows_count || 0} Following </span>
            </div>
            {followable && <Button className={classes.button}> Follow </Button>}
        </div>
    )
};

export default ProfileInfo;