import TweetList from "../components/tweets/TweetList";
import {useDispatch, useSelector} from "react-redux";
import { useEffect } from "react";
import { fetchTweets } from "../store/actions/tweet";

const PeopleWhoFollow = () => {
    const dispatch = useDispatch();
    const token = useSelector(state => state?.auth.token);
    const { tweets, next } = useSelector(state => state?.tweet.followerTweets);
    const loaded = tweets.length > 0;

    useEffect(() => {
        if (!loaded) {
            dispatch(fetchTweets(token, null, null, true));
        }
    }, [dispatch, token, loaded]);

    const handleNextClick = () => {
        dispatch(fetchTweets(token, next));
    };

    return <TweetList tweets={tweets} hasNext={!!next} onNextClick={handleNextClick} />;
};

export default PeopleWhoFollow;