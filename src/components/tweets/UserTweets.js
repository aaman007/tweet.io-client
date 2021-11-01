import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { tweetActions } from "../../store/slices/tweet";
import { fetchTweets } from "../../store/actions/tweet";
import TweetList from "./TweetList";

const UserTweets = ({ username, token, editable }) => {
    const dispatch = useDispatch();
    const { tweets } = useSelector(state => state?.tweet.userTweets);

    useEffect(() => {
        return () => {
            dispatch(tweetActions.clearUserTweets({}));
        };
    }, [dispatch])

    useEffect(() => {
        dispatch(fetchTweets(token, null, username, false));
    }, [dispatch, token, username]);

    return <TweetList tweets={tweets} editable={editable} />;
};

export default UserTweets;