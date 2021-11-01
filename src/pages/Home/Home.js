import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import classes from './Home.module.css';
import TweetList from "../../components/tweets/TweetList";
import UserList from "../../components/users/UserList";
import { fetchTweets } from "../../store/actions/tweet";

const Home = () => {
    const dispatch = useDispatch();
    const token = useSelector(state => state?.auth.token);
    const { tweets } = useSelector(state => state?.tweet.followedTweets);

    useEffect(() => {
        dispatch(fetchTweets(token));
    }, [dispatch, token]);

    return (
        <div className={classes.home}>
            <TweetList tweets={tweets} />
            <UserList />
        </div>
    );
};

export default Home;