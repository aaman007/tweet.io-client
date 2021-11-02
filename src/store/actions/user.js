import fetchify from "../../utils/fetchify";
import { userActions } from "../slices/user";
import { uiActions } from "../slices/ui";

export const fetchUsers = (token, url) => async dispatch => {
    url = url ? url : 'accounts/v1/users/';

    const sendRequest = async () => {
        return await fetchify(url, 200, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
    };

    try {
        const data = await sendRequest();
        dispatch(userActions.addUsers(data));
    }
    catch (error) {
        dispatch(uiActions.setAlert({
            type: 'error',
            title: 'Couldn\'t load users',
            description: 'Users couldn\'t be loaded.'
        }));
    }
};

export const fetchUser = (token, username) => async dispatch => {
    const sendRequest = async () => {
        return await fetchify(`accounts/v1/users/${username}/`, 200, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
    };

    try {
        const data = await sendRequest();
        dispatch(userActions.addUser(data));
    }
    catch (error) {
        dispatch(uiActions.setAlert({
            type: 'error',
            title: 'Couldn\'t load user',
            description: 'Something went wrong.'
        }));
    }
};

export const followUser = (token, username) => async dispatch => {
    const sendRequest = async () => {
        return await fetchify(`accounts/v1/users/${username}/follow/`, 200, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
    };

    try {
        const data = await sendRequest();
        dispatch(userActions.followUser(data));
    }
    catch (error) {
        dispatch(uiActions.setAlert({
            type: 'error',
            title: 'Couldn\'t follow user',
            description: 'Something went wrong.'
        }));
    }
};

export const unfollowUser = (token, username) => async dispatch => {
    const sendRequest = async () => {
        return await fetchify(`accounts/v1/users/${username}/unfollow/`, 200, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
    };

    try {
        const data = await sendRequest();
        dispatch(userActions.unfollowUser(data));
    }
    catch (error) {
        dispatch(uiActions.setAlert({
            type: 'error',
            title: 'Couldn\'t unfollow user',
            description: 'Something went wrong.'
        }));
    }
};