import { useDispatch, useSelector } from "react-redux";
import UserTweets from "../components/tweets/UserTweets";
import ProfileInfo from "../components/users/ProfileInfo";
import TweetForm from "../components/form/TweetForm";
import { createTweet } from "../store/actions/tweet";

const Profile = () => {
    const dispatch = useDispatch();
    const { token, user } = useSelector(state => state?.auth);

    const handleNewTweet = tweet => {
        dispatch(createTweet(token, tweet));
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