import UserTweets from "../components/tweets/UserTweets";
import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import ProfileInfo from "../components/users/ProfileInfo";

const User = () => {
    const { token } = useSelector(state => state?.auth);
    const params = useParams();

    return (
        <div>
            <ProfileInfo
                user={{
                    full_name: 'tweet.io User',
                    username: params.username,
                }}
                followable
            />
            <h2 className={"centered"}> Tweets </h2>
            <UserTweets username={params.username} token={token} />
        </div>
    )
};

export default User;