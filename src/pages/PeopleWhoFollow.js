import TweetList from "../components/tweets/TweetList";
import {useDispatch, useSelector} from "react-redux";
import { useEffect } from "react";
import { fetchTweets } from "../store/actions/tweet";

const PeopleWhoFollow = () => {
    const dispatch = useDispatch();
    const token = useSelector(state => state?.auth.token);
    const { tweets } = useSelector(state => state?.tweet.followerTweets);

    useEffect(() => {
        dispatch(fetchTweets(token, null, null, true));
    }, [dispatch, token]);

    return <TweetList tweets={tweets} />;
};

export default PeopleWhoFollow;