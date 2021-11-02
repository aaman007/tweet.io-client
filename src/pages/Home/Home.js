import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import classes from './Home.module.css';
import TweetList from "../../components/tweets/TweetList";
import UserList from "../../components/users/UserList";
import { fetchTweets } from "../../store/actions/tweet";
import { fetchUsers } from "../../store/actions/user";

const Home = () => {
    const dispatch = useDispatch();
    const token = useSelector(state => state?.auth.token);
    const { tweets, next: nextTweets } = useSelector(state => state?.tweet.followedTweets);
    const { users, next: nextUsers } = useSelector(state => state?.user);
    const loaded = tweets.length > 0;

    useEffect(() => {
        if (!loaded) {
            dispatch(fetchTweets(token));
            dispatch(fetchUsers(token));
        }
    }, [dispatch, token, loaded]);

    const handleNextTweetsClick = () => {
        dispatch(fetchTweets(token, nextTweets));
    };

    const handleNextUsersClick = () => {
        dispatch(fetchUsers(token, nextUsers));
    };

    return (
        <div className={classes.home}>
            <TweetList tweets={tweets} hasNext={!!nextTweets} onNextClick={handleNextTweetsClick} />
            <UserList users={users} hasNext={!!nextUsers} onNextClick={handleNextUsersClick} />
        </div>
    );
};

export default Home;