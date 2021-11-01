import { createSlice } from "@reduxjs/toolkit";
import idMapper from "../../utils/idMapper";

const INITIAL_STATE = {
    userTweets: {
        tweets: [],
        next: null
    },
    followedTweets: {
        tweets: [],
        next: null
    },
    followerTweets: {
        tweets: [],
        next: null
    }
}

const tweetSlice = createSlice({
    name: 'tweet',
    initialState: INITIAL_STATE,
    reducers: {
        addUserTweet: (state, action) => {
            const mappedIds = idMapper(state.userTweets.tweets);
            if (!mappedIds[action.payload.id]) {
                state.userTweets.tweets = [action.payload].concat(state.userTweets.tweets);
            }
        },

        updateUserTweet: (state, action) => {
            const index = state.userTweets.tweets.findIndex(tweet => tweet.id === action.payload.id);
            if (index !== -1) {
                state.userTweets.tweets[index] = action.payload;
            }
            else {
                state.userTweets.tweets.push(action.payload);
            }
        },

        deleteUserTweet: (state, action) => {
            state.userTweets.tweets = state.userTweets.tweets.filter(tweet => tweet.id !== action.payload);
        },

        addUserTweets: (state, action) => {
            const mappedIds = idMapper(state.userTweets.tweets);
            const newTweets = action.payload.data.filter(tweet => !mappedIds[tweet.id]);
            state.userTweets.tweets.push(...newTweets);
            state.userTweets.next = action.payload.links.next;
        },

        clearUserTweets: (state, action) => {
            state.userTweets.tweets = [];
            state.userTweets.next = null;
        },

        addFollowedTweets: (state, action) => {
            const mappedIds = idMapper(state.followedTweets.tweets);
            const newTweets = action.payload.data.filter(tweet => !mappedIds[tweet.id]);
            state.followedTweets.tweets.push(...newTweets);
            state.followedTweets.next = action.payload.links.next;
        },

        removeFollowedTweets: (state, action) => {
            state.followedTweets.tweets = state.followedTweets.tweets.filter(tweet => {
                return tweet.user.username !== action.payload;
            });
        },

        clearFollowedTweets: (state, action) => {
            state.followedTweets.tweets = [];
            state.followedTweets.next = null;
        },

        addFollowerTweets: (state, action) => {
            const mappedIds = idMapper(state.followerTweets.tweets);
            const newTweets = action.payload.data.filter(tweet => !mappedIds[tweet.id]);
            state.followerTweets.tweets.push(...newTweets);
            state.followerTweets.next = action.payload.links.next;
        },

        removeFollowerTweets: (state, action) => {
            state.followerTweets.tweets = state.followerTweets.tweets.filter(tweet => {
                return tweet.user.username !== action.payload;
            });
        },

        clearFollowerTweets: (state, action) => {
            state.followerTweets.tweets = [];
            state.followerTweets.next = null;
        }
    }
});

export const tweetActions = tweetSlice.actions;

export default tweetSlice;