import fetchify from "../../utils/fetchify";
import { uiActions } from "../slices/ui";
import { tweetActions } from "../slices/tweet";

export const createTweet = (token, tweet) => async dispatch => {
    const sendRequest = async () => {
        return await fetchify('tweets/v1/tweets/', 201, {
            method: 'POST',
            body: JSON.stringify({
                'content': tweet
            }),
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
    };

    try {
        const data = await sendRequest();
        dispatch(tweetActions.addUserTweet(data));
        dispatch(uiActions.setAlert({
            type: 'success',
            title: 'Success',
            description: 'Tweet is sent.'
        }));
    }
    catch (error) {
        dispatch(uiActions.setAlert({
            type: 'error',
            title: 'Couldn\'t create tweet.',
            description: error.message
        }));
    }
};

export const updateTweet = (token, tweetId, tweet) => async dispatch => {
    const sendRequest = async () => {
        return await fetchify(`tweets/v1/tweets/${tweetId}/`, 200, {
            method: 'PATCH',
            body: JSON.stringify({
                content: tweet
            }),
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
    };

    try {
        const data = await sendRequest();
        dispatch(tweetActions.updateUserTweet(data));
        dispatch(uiActions.setAlert({
            type: 'success',
            title: 'Success',
            description: 'Tweet is updated.'
        }));
    }
    catch (error) {
        dispatch(uiActions.setAlert({
            type: 'error',
            title: 'Couldn\'t update tweet.',
            description: error.message
        }));
    }
};

export const deleteTweet = (token, tweetId) => async dispatch => {
    const sendRequest = async () => {
        return await fetchify(`tweets/v1/tweets/${tweetId}/`, 204, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
    };

    try {
        await sendRequest();
        dispatch(tweetActions.deleteUserTweet(tweetId));
        dispatch(uiActions.setAlert({
            type: 'success',
            title: 'Success',
            description: 'Tweet is deleted.'
        }));
    }
    catch (error) {
        dispatch(uiActions.setAlert({
            type: 'error',
            title: 'Couldn\'t delete tweet.',
            description: error.message
        }));
    }
};

export const fetchTweets = (token, url = null, username = null, isFollowers = false) => async dispatch => {
    let type = 1;
    url = url ? url : 'tweets/v1/tweets/';
    if (username || url.indexOf('username=') > -1) {
        type = 2;
        url = url.indexOf('username=') > -1 ? url : url + `?username=${username}`;
    }
    else if (isFollowers || url.indexOf('is_followers=') > -1) {
        type = 3;
        url = url.indexOf('is_followers=') > -1 ? url : url + '?is_followers=true';
    }

    const sendRequest = async () => {
        return await fetchify(url, 200, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
    };

    try {
        const data = await sendRequest();
        if (type === 2) {
            dispatch(tweetActions.addUserTweets(data));
        }
        else if (type === 3) {
            dispatch(tweetActions.addFollowerTweets(data));
        }
        else {
            dispatch(tweetActions.addFollowedTweets(data));
        }
    }
    catch (error) {
        dispatch(uiActions.setAlert({
            type: 'error',
            title: 'Couldn\'t load tweets.',
            description: error.message
        }));
    }
};