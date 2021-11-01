import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector} from "react-redux";
import { FiEdit } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";
import classes from './Tweet.module.css';
import { deleteTweet, updateTweet } from "../../../store/actions/tweet";
import humanizeDatetime from "../../../utils/humaninzeDatetime";
import * as urls from '../../../urls';
import EditModal from "../EditModal";


const Tweet = ({ tweet, editable }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { token } = useSelector(state => state?.auth);
    const [showModal, setShowModal] = useState(false);
    const disableProfileLink = history.location.pathname === urls.profile();

    const handleUpdate = data => {
        dispatch(updateTweet(token, tweet.id, data));
        setShowModal(false);
    };

    const handleDelete = () => {
        dispatch(deleteTweet(token, tweet.id));
    };

    const handleUpdateIconClick = () => {
        setShowModal(true);
    };

    const handleBackdropClick = () => {
        setShowModal(false);
    }

    const renderUsername = () => {
        if (disableProfileLink) {
            return <> @{tweet.user.username} </>;
        }
        return <Link to={urls.user(tweet.user.username)}> @{tweet.user.username} </Link>
    };

    const renderEditOptions = () => {
        return (
            <div className={classes.editOptions}>
                {showModal && (
                    <EditModal
                        onSubmit={handleUpdate}
                        onBackdropClick={handleBackdropClick}
                        initialValue={tweet.content}
                    />
                )}
                <FiEdit onClick={handleUpdateIconClick} />
                <AiFillDelete onClick={handleDelete} />
            </div>
        );
    };

    return (
        <div className={classes.tweet}>
            <div className={classes.tweetInfo}>
                <div className={classes.fullName}>
                    {tweet.user.full_name ? tweet.user.full_name : 'tweet.io User'}
                </div>
                <div className={classes.username}>
                    {renderUsername()}
                </div>
                <div className={classes.tweetTime}> {humanizeDatetime(tweet.created_at)} </div>
            </div>
            <div className={classes.content}>
                {tweet.content}
            </div>
            {editable && renderEditOptions()}
        </div>
    )
};

Tweet.defaultProps = {
    tweet: {
        user: {
            full_name: 'Tweet.io User',
            username: 'username'
        },
        content: 'some random tweet posted by someone',
        created_at: '1st Nov, 2021 at 10:12AM'
    }
}

export default Tweet;