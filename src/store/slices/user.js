import { createSlice } from "@reduxjs/toolkit";
import idMapper from "../../utils/idMapper";

const INITIAL_STATE = {
    user: null,
    users: [],
    next: null
}

const userSlice = createSlice({
    name: 'user',
    initialState: INITIAL_STATE,
    reducers: {
        addUsers: (state, action) => {
            const mappedUsernames = idMapper(state.users, 'username');
            const newUsers = action.payload.data.filter(user => !mappedUsernames[user.username]);
            state.users.push(...newUsers);
        },

        addUser: (state, action) => {
            state.user = action.payload;
        },

        followUser: (state, action) => {
            const index = state.users.findIndex(user => user.username === action.payload.username);
            if (index !== -1) {
                state.users[index].is_following = true;
            }
            else {
                state.users.push({ ...action.payload, is_following: true });
            }
            if (state.user && state.user.username === action.payload.username) {
                state.user.is_following = true;
                state.user.followers_count += 1;
            }
        },

        unfollowUser: (state, action) => {
            const index = state.users.findIndex(user => user.username === action.payload.username);
            if (index !== -1) {
                state.users[index].is_following = false;
            }
            else {
                state.users.push({ ...action.payload, is_following: false });
            }
            if (state.user && state.user.username === action.payload.username) {
                state.user.is_following = false;
                state.user.followers_count -= 1;
            }
        },

        clearUsers: (state, action) => {
            state.users = [];
            state.users.next = null;
        }
    }
});

export const userActions = userSlice.actions;

export default userSlice;