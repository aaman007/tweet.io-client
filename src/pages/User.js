import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import UserTweets from "../components/tweets/UserTweets";
import ProfileInfo from "../components/users/ProfileInfo";
import { fetchUser } from "../store/actions/user";

const User = () => {
    const dispatch = useDispatch();
    const { token } = useSelector(state => state?.auth);
    const user = useSelector(state => state?.user.user);
    const params = useParams();
    const { username } = params;

    useEffect(() => {
        dispatch(fetchUser(token, username));
    }, [dispatch, token, username]);

    if (user === null) {
        return null;
    }

    return (
        <div>
            <ProfileInfo
                user={user}
                followable
            />
            <h2 className={"centered"}> Tweets </h2>
            <UserTweets username={params.username} token={token} />
        </div>
    )
};

export default User;