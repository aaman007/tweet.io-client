import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    following: [],
    followers: [],
    toFollow: []
}

const userSlice = createSlice({
    name: 'user',
    initialState: INITIAL_STATE,
    reducers: {
    }
});

export const userActions = userSlice.actions;

export default userSlice;