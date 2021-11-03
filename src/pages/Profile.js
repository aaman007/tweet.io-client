import { useDispatch, useSelector } from "react-redux";
import UserTweets from "../components/tweets/UserTweets";
import ProfileInfo from "../components/users/ProfileInfo";
import TweetForm from "../components/form/TweetForm";
import { createTweet } from "../store/actions/tweet";
import {useEffect} from "react";
import {fetchUser} from "../store/actions/user";

const Profile = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state?.user.user);
    const { token, user: { username } } = useSelector(state => state?.auth);

    useEffect(() => {
        dispatch(fetchUser(token, username));
    }, [dispatch, token, username]);

    const handleNewTweet = tweet => {
        dispatch(createTweet(token, tweet));
    };

    if (user === null) {
        return null;
    }

    return (
        <>
            <ProfileInfo user={user} />
            <TweetForm onSubmit={handleNewTweet} buttonText={"Tweet"} />
            <h2 className={"centered"}> Tweets </h2>
            <UserTweets username={user.username} token={token} editable />
        </>
    )
};

export default Profile;