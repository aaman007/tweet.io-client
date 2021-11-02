import { useDispatch, useSelector } from "react-redux";
import { useDisableCountdown } from "./useDisableCountdown";
import { followUser, unfollowUser } from "../store/actions/user";

export const useFollow = username => {
    const dispatch = useDispatch();
    const [disable, setDisable] = useDisableCountdown(500);
    const { token } = useSelector(state => state.auth);

    const handleFollow = () => {
        if (disable) return;

        setDisable(true);
        dispatch(followUser(token, username));
    };

    const handleUnfollow = () => {
        if (disable) return;

        setDisable(true);
        dispatch(unfollowUser(token, username));
    };

    return [handleFollow, handleUnfollow];
};
